/* =============================================
   Genera los archivos de la landing para HubSpot
   a partir de los archivos fuente del repositorio.

   Uso:  node hubspot/build.mjs
   Salida (hubspot/dist/):
     - bienvenida.css   → File Manager: bienvenida-y-cursos-del-mes/
     - bienvenida.js    → File Manager: bienvenida-y-cursos-del-mes/
     - bienvenida-y-cursos-del-mes.hubl.html → plantilla de la landing

   Para actualizar el calendario del mes basta con editar cursos.js,
   correr el build y reemplazar bienvenida.js en el File Manager.
   ============================================= */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'hubspot', 'dist');
const read = (file) => readFileSync(join(ROOT, file), 'utf8');

// Carpeta del File Manager de HubSpot donde viven imágenes, favicon, CSS y JS
const HUBFS = 'https://www.pyxoom.com/hubfs/bienvenida-y-cursos-del-mes';

// Solo los pesos que usa la página (200 itálica para los <em> de la sección de bienvenida)
const GOOGLE_FONTS = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&display=swap';

let html = read('bienvenida-y-cursos-del-mes.html');

const replaceOnce = (pattern, replacement, label) => {
  if (!pattern.test(html)) throw new Error(`No se encontró: ${label}`);
  html = html.replace(pattern, replacement);
};

// CSS: las fuentes locales se reemplazan por Google Fonts
const css = read('styles.css').replace(/@font-face\s*{[^}]*}\s*/g, '');

// JS: cursos.js + timeline-auto-flip.js + los scripts inline de la página
const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1].trim());
const js = [read('cursos.js'), read('timeline-auto-flip.js'), ...inlineScripts].join('\n\n');
html = html.replace(/<script>[\s\S]*?<\/script>\s*/g, '');

// <head>: SEO, OG y Twitter los genera HubSpot desde la configuración de la página
replaceOnce(
  /<link rel="stylesheet" href="styles\.css">[\s\S]*?<\/head>/,
  `<title>{{ content.html_title }}</title>
  <meta name="description" content="{{ content.meta_description }}">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${GOOGLE_FONTS}" rel="stylesheet">
  <link rel="stylesheet" href="${HUBFS}/bienvenida.css">

  {{ standard_header_includes }}

  <!-- Favicon oficial de Pyxoom (después de los includes para que prevalezca sobre el del sitio) -->
  <link rel="icon" type="image/x-icon" href="${HUBFS}/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="${HUBFS}/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="${HUBFS}/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="${HUBFS}/apple-touch-icon.png">
</head>`,
  'bloque <head>'
);

// Imágenes → File Manager
html = html.replaceAll('src="assets/img/', `src="${HUBFS}/`);

replaceOnce(
  /<!-- Scripts -->\s*<script src="cursos\.js" defer><\/script>\s*<script src="timeline-auto-flip\.js" defer><\/script>\s*/,
  `<script src="${HUBFS}/bienvenida.js" defer></script>\n\n`,
  'scripts cursos.js / timeline-auto-flip.js'
);

replaceOnce(/<\/body>/, `{{ standard_footer_includes }}\n</body>`, '</body>');

const leftovers = html.match(/(src|href)="(assets|favicon)\/[^"]*"/g);
if (leftovers) throw new Error(`Rutas locales sin migrar: ${leftovers.join(', ')}`);

mkdirSync(DIST, { recursive: true });
const outputs = {
  'bienvenida.css': css,
  'bienvenida.js': js,
  'bienvenida-y-cursos-del-mes.hubl.html': html,
};
for (const [name, content] of Object.entries(outputs)) {
  writeFileSync(join(DIST, name), content);
  console.log(`${name.padEnd(40)} ${Buffer.byteLength(content)} bytes`);
}
