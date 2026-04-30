/* =============================================
   PYXOOM 4.2.3 — SCRIPT PRINCIPAL
   Archivo: script.js
   ============================================= */

// Datos de sesiones con tooltips
const SESSIONS = {
  // mes (0-indexed), dia: {title, time, link}
  "4-12": { title:"Webinar Inaugural — Pyxoom 4.2.3",  time:"Lun 12 Mayo · 10:00 AM (CST)", link:"https://bit.ly/webinar_py" },
  "4-19": { title:"Sesión 2 — Módulos de Reclutamiento",time:"Lun 19 Mayo · 10:00 AM (CST)", link:"https://bit.ly/webinar_py" },
  "4-26": { title:"Sesión 3 — Flujos de Evaluación",    time:"Lun 26 Mayo · 10:00 AM (CST)", link:"https://bit.ly/webinar_py" },
  "5-2":  { title:"Sesión 4 — Administración y Roles",  time:"Mar 2 Jun · 10:00 AM (CST)",   link:"https://bit.ly/webinar_py" },
  "5-9":  { title:"Sesión 5 — Reporteo e Indicadores",  time:"Mar 9 Jun · 10:00 AM (CST)",   link:"https://bit.ly/webinar_py" },
  "5-16": { title:"Sesión 6 — Integración y APIs",      time:"Mar 16 Jun · 10:00 AM (CST)",  link:"https://bit.ly/webinar_py" },
  "5-23": { title:"Sesión 7 — Migración y Go-Live",     time:"Lun 23 Jun · 10:00 AM (CST)",  link:"https://bit.ly/webinar_py" },
};

const MONTHS = [
  { name:"Mayo",  year:2026, month:4 },
  { name:"Junio", year:2026, month:5 },
  { name:"Julio", year:2026, month:6 },
];

const DAY_NAMES = ["Do","Lu","Ma","Mi","Ju","Vi","Sá"];

function buildCalendar(cfg) {
  const { name, year, month } = cfg;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const today = new Date();

  let gridHTML = DAY_NAMES.map(d => `<div class="pyx-calendar__day-name">${d}</div>`).join('');

  // Celdas vacías al inicio
  for(let i=0;i<firstDay;i++) gridHTML += `<div class="pyx-cal-day pyx-cal-day--empty"></div>`;

  for(let d=1;d<=daysInMonth;d++) {
    const key = `${month}-${d}`;
    const session = SESSIONS[key];
    const isToday = (today.getFullYear()===year && today.getMonth()===month && today.getDate()===d);
    let cls = "pyx-cal-day";
    if(session) cls += " pyx-cal-day--session";
    if(isToday) cls += " pyx-cal-day--today";

    let tooltip = '';
    if(session) {
      tooltip = `
        <div class="pyx-tooltip">
          <div class="pyx-tooltip__title">${session.title}</div>
          <div class="pyx-tooltip__date">${session.time}</div>
          <a class="pyx-tooltip__link" href="${session.link}" target="_blank">Registrarse →</a>
        </div>`;
    }

    gridHTML += `<div class="${cls}">${d}${tooltip}</div>`;
  }

  const hasSessions = Object.keys(SESSIONS).some(k => k.startsWith(`${month}-`));

  return `
    <div class="pyx-calendar">
      <div class="pyx-calendar__month">
        ${name} ${year}
        ${hasSessions ? '<span class="pyx-calendar__month-tag">Activo</span>' : '<span class="pyx-calendar__month-tag" style="background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.3)">Próximo</span>'}
      </div>
      <div class="pyx-calendar__days-header">${gridHTML.slice(0, gridHTML.indexOf('<div class="pyx-cal-day'))}</div>
      <div class="pyx-calendar__grid">${gridHTML.slice(gridHTML.indexOf('<div class="pyx-cal-day'))}</div>
    </div>`;
}

// Construir webinat card
function buildWebinarCard() {
  return `
    <div class="pyx-webinar-card">
      <div class="pyx-webinar-card__eyebrow">Webinar Inaugural</div>
      <div class="pyx-webinar-card__title">Pyxoom 4.2.3 —<br>Lo que viene para tu equipo</div>
      <div class="pyx-webinar-card__meta">
        <div class="pyx-webinar-card__meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span><strong>Lunes 28 de Abril, 2026</strong></span>
        </div>
        <div class="pyx-webinar-card__meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span><strong>10:00 AM</strong> — 11:00 AM (Hora CST)</span>
        </div>
        <div class="pyx-webinar-card__meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <span>Abierto a todos los clientes</span>
        </div>
      </div>
      <a href="https://bit.ly/webinar_py" target="_blank" class="pyx-btn pyx-btn--primary" style="width:100%;justify-content:center;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        Registrarme al webinar
      </a>
      <p style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:12px;text-align:center;">
        bit.ly/webinar_py
      </p>
    </div>`;
}

// Render calendarios al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('calendarios-container');
  if (!container) return;

  let html = '';
  MONTHS.forEach(cfg => {
    const { name, year, month } = cfg;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const today = new Date();
    const hasSessions = Object.keys(SESSIONS).some(k => k.startsWith(`${month}-`));

    let headerHTML = DAY_NAMES.map(d => `<div class="pyx-calendar__day-name">${d}</div>`).join('');
    let gridHTML = '';

    for(let i=0;i<firstDay;i++) gridHTML += `<div class="pyx-cal-day pyx-cal-day--empty"></div>`;

    for(let d=1;d<=daysInMonth;d++){
      const key = `${month}-${d}`;
      const session = SESSIONS[key];
      const isToday = (today.getFullYear()===year && today.getMonth()===month && today.getDate()===d);
      let cls = "pyx-cal-day";
      if(session) cls += " pyx-cal-day--session";
      if(isToday) cls += " pyx-cal-day--today";

      let tooltip = '';
      if(session){
        tooltip = `<div class="pyx-tooltip">
          <div class="pyx-tooltip__title">${session.title}</div>
          <div class="pyx-tooltip__date">${session.time}</div>
          <a class="pyx-tooltip__link" href="${session.link}" target="_blank">Registrarse →</a>
        </div>`;
      }
      gridHTML += `<div class="${cls}">${d}${tooltip}</div>`;
    }

    html += `
      <div class="pyx-calendar">
        <div class="pyx-calendar__month">
          ${name} ${year}
          ${hasSessions
            ? '<span class="pyx-calendar__month-tag">Activo</span>'
            : '<span class="pyx-calendar__month-tag" style="background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.3)">Próximo</span>'}
        </div>
        <div class="pyx-calendar__days-header">${headerHTML}</div>
        <div class="pyx-calendar__grid">${gridHTML}</div>
      </div>`;
  });

  html += buildWebinarCard();
  container.innerHTML = html;
});
