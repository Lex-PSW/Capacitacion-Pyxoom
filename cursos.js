/* =============================================
   PYXOOM 4.2.3 — SCRIPT PRINCIPAL
   Archivo: cursos.js
   ============================================= */

// Datos de sesiones con tooltips
const SESSIONS = {
  // mes (0-indexed), dia: {title, time, link}
  "8-2": { title:"Psicometría y gestión por competencias",
            time:"Mie 2 Sep · 9:30 AM - 11:30 AM (CST)",
            day:"Miércoles 2 de Septiembre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 11:30 AM (CST)",
            session:"Sesión 1",
            description:"El(la) participante identificará las características y diferencias entre la metodología Estándar y Spyd, a fin de seleccionar aquella que se alinee al proceso interno de la organización.",
            tooltip_description:"Metodología alineada a tu proceso",
            link:"https://events.teams.microsoft.com/event/2e534ee0-7a0d-4d64-a120-0af6671f3d9c@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "8-3": { title:"Psicometría y gestión por competencias",
            time:"Jue 3 Sep · 9:30 AM - 11:30 AM (CST)",
            day:"Jueves 3 de Septiembre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 11:30 AM (CST)",
            session:"Sesión 2",
            description:"El(la) participante identificará las características y diferencias entre la metodología Estándar y Spyd, a fin de seleccionar aquella que se alinee al proceso interno de la organización.",
            tooltip_description:"Metodología alineada a tu proceso",
            link:"https://events.teams.microsoft.com/event/2e534ee0-7a0d-4d64-a120-0af6671f3d9c@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "8-4": { title:"Metodología de perfilamiento",
            time:"Vie 4 Sep · 9:30 AM - 11:30 AM (CST)",
            day:"Viernes 4 de Septiembre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 11:30 AM (CST)",
            session:"Sesión 3",
            description:"El(la) participante conocerá los pasos para la creación de perfiles de psicometría y competencias,  así como el registro de estos en la plataforma.",
            tooltip_description:"Creación y registro de perfiles",
            link:"https://events.teams.microsoft.com/event/2d6fc9f7-d641-4fb8-9b8e-8e319af4720d@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "8-8": { title:"Uso de Pyxoom 4.2",
            time:"Mar 8 Sep · 9:30 AM - 12:00 PM (CST)",
            day:"Martes 8 de Septiembre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 4",
            description:"El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/c773d78d-f331-4736-99a2-d9423425fb62@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "8-9": { title:"Uso de Pyxoom 4.2",
            time:"Mie 9 Sep · 9:30 AM - 12:00 PM (CST)",
            day:"Miércoles 9 de Septiembre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 5",
            description:"El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/c773d78d-f331-4736-99a2-d9423425fb62@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "8-10": { title:"Uso de Pyxoom 4.2",
            time:"Jue 10 Sep · 9:30 AM - 12:00 PM (CST)",
            day:"Jueves 10 de Septiembre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 6",
            description:"El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/c773d78d-f331-4736-99a2-d9423425fb62@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "8-14": { title:"Amitai: Perfiles y reportes",
            time:"Lun 14 Sep · 3:00 PM - 4:30 PM (CST)",
            day:"Lunes 14 de Septiembre, 2026",
            start_hour:"3:00 PM",
            finished_hour:" - 4:30 PM (CST)",
            session:"Sesión 7",
            description:"El(la) participante conocerá los pasos para realizar el registro de un perfil de honestidad a través de la plataforma de Amitai.",
            tooltip_description:"Registro de perfiles en Amitai",
            link:"https://events.teams.microsoft.com/event/3cad84a4-3200-4a23-b3f9-5319bf37c53b@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "8-21": { title:"Testyt: Alta de pruebas técnicas",
            time:"Lun 21 Sep · 3:00 PM - 4:00 PM (CST)",
            day:"Lunes 21 de Septiembre, 2026",
            start_hour:"3:00 PM",
            finished_hour:" - 4:00 PM (CST)",
            session:"Sesión 8",
            description:"El(la) participante conocerá los pasos para realizar el alta de una prueba técnica en Testyt, a fin de usarla a través de Pyxoom.",
            tooltip_description:"Registro de pruebas en Testyt",
            link:"https://events.teams.microsoft.com/event/afc55e39-add9-4cfb-ad3d-8c2685fd6d4d@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "8-29": { title:"Uso de Pyxoom 4.2",
            time:"Mar 29 Sep · 9:30 AM - 12:00 PM (CST)",
            day:"Martes 29 de Septiembre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 9",
            description:"El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/4c786dc3-1d13-4b35-825a-ff96fc982357@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "8-30": { title:"Uso de Pyxoom 4.2",
            time:"Mie 30 Sep · 9:30 AM - 12:00 PM (CST)",
            day:"Miércoles 30 de Septiembre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 9",
            description:"El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/4c786dc3-1d13-4b35-825a-ff96fc982357@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "9-7": { title:"Accountability para Capital Humano",
            time:"Mie 7 Oct · 9:30 AM - 11:30 AM (CST)",
            day:"Miércoles 7 de Octubre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 11:30 AM (CST)",
            session:"Sesión 1",
            description:"El(la) participante conocerá cómo impulsar una cultura de responsabilidad y seguimiento de compromisos desde el área de Capital Humano.",
            tooltip_description:"Cultura de responsabilidad en Capital Humano",
            link:"https://events.teams.microsoft.com/event/377e0681-f58d-43cb-b035-507c71a3bf22@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "9-12": { title:"Uso de Sidepro",
            time:"Lun 12 Oct · 9:30 AM - 10:30 AM (CST)",
            day:"Lunes 12 de Octubre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 10:30 AM (CST)",
            session:"Sesión 2",
            description:"El(la) participante identificará el funcionamiento de Sidepro y sus principales funcionalidades.",
            tooltip_description:"Funcionamiento de Sidepro",
            link:"https://events.teams.microsoft.com/event/dafb8629-d455-43a6-8005-49480f718bf7@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "9-13": { title:"Uso de Pyxoom 4.2",
            time:"Mar 13 Oct · 9:30 AM - 12:00 PM (CST)",
            day:"Martes 13 de Octubre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 3",
            description:"El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/b8c16cd5-2f41-47ec-a830-14dd5f2905b3@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "9-14": { title:"Uso de Pyxoom 4.2",
            time:"Mie 14 Oct · 9:30 AM - 12:00 PM (CST)",
            day:"Miércoles 14 de Octubre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 4",
            description:"El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/b8c16cd5-2f41-47ec-a830-14dd5f2905b3@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "9-15": { title:"Uso de Pyxoom 4.2",
            time:"Jue 15 Oct · 9:30 AM - 12:00 PM (CST)",
            day:"Jueves 15 de Octubre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 5",
            description:"El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/b8c16cd5-2f41-47ec-a830-14dd5f2905b3@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "9-20": { title:"Metodología de perfilamiento",
            time:"Mar 20 Oct · 3:00 PM - 5:00 PM (CST)",
            day:"Martes 20 de Octubre, 2026",
            start_hour:"3:00 PM",
            finished_hour:" - 5:00 PM (CST)",
            session:"Sesión 6",
            description:"El(la) participante conocerá los pasos para la creación de perfiles de psicometría y competencias,  así como el registro de estos en la plataforma.",
            tooltip_description:"Creación y registro de perfiles",
            link:"https://events.teams.microsoft.com/event/c605c02e-ea90-403c-93e6-324c0ead53ba@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "9-22": { title:"Testyt: Alta de pruebas técnicas",
            time:"Jue 22 Oct · 3:00 PM - 4:00 PM (CST)",
            day:"Jueves 22 de Octubre, 2026",
            start_hour:"3:00 PM",
            finished_hour:" - 4:00 PM (CST)",
            session:"Sesión 7",
            description:"El(la) participante conocerá los pasos para realizar el alta de una prueba técnica en Testyt, a fin de usarla a través de Pyxoom.",
            tooltip_description:"Alta de pruebas técnicas en Testyt",
            link:"https://events.teams.microsoft.com/event/537a2662-f9fe-43ac-a63c-4b2beb489788@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "9-27": { title:"Diseño de puestos en la era de la IA",
            time:"Mar 27 Oct · 10:00 AM - 12:00 PM (CST)",
            day:"Martes 27 de Octubre, 2026",
            start_hour:"10:00 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 8",
            description:"El(la) participante conocerá cómo diseñar y actualizar puestos de trabajo considerando el impacto de la inteligencia artificial en las funciones y competencias.",
            tooltip_description:"Puestos y competencias ante la IA",
            link:"https://events.teams.microsoft.com/event/5effbc37-2f08-499d-857a-b2c720c083fd@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "9-29": { title:"Amitai: Perfiles y reportes",
            time:"Jue 29 Oct · 9:30 AM - 11:00 AM (CST)",
            day:"Jueves 29 de Octubre, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 11:00 AM (CST)",
            session:"Sesión 9",
            description:"El(la) participante conocerá los pasos para realizar el registro de un perfil de honestidad a través de la plataforma de Amitai.",
            tooltip_description:"Registro de perfiles en Amitai",
            link:"https://events.teams.microsoft.com/event/6daf39f9-8ea9-4c1c-a1c9-1bf3fe529623@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
};

const MONTHS = [
  { name:"Septiembre", year:2026, month:8 },
  { name:"Octubre", year:2026, month:9 },
];

const DAY_NAMES = ["Do","Lu","Ma","Mi","Ju","Vi","Sá"];

function getSessionForDate(month, day) {
  const primaryKey = `${month}-${day}`;
  if (SESSIONS[primaryKey]) return SESSIONS[primaryKey];
  if (month === 6) return SESSIONS[`5-${day}`];
  return null;
}

function monthHasSessions(month) {
  if (month === 6) return true;
  return Object.keys(SESSIONS).some(k => k.startsWith(`${month}-`));
}

function parseSessionTime(key, timeStr) {
  const [month, day] = key.split('-').map(Number);
  const cleanTime = timeStr.replace(/^[\s-]+/, '').replace(/\s*\(.*\)$/, '').trim();
  const [time, period] = cleanTime.split(' ');
  const [hour, minute] = time.split(':').map(Number);
  const normalizedHour = (hour % 12) + (period === 'PM' ? 12 : 0);
  return new Date(2026, month, day, normalizedHour, minute, 0, 0);
}

function getUpcomingSession() {
  const now = new Date();
  const sessions = Object.entries(SESSIONS).map(([key, session]) => ({
    key,
    session,
    start: parseSessionTime(key, session.start_hour),
    end: parseSessionTime(key, session.finished_hour),
  }));

  const current = sessions.find(item => item.start <= now && now <= item.end);
  if (current) return current.session;

  const next = sessions
    .filter(item => item.end > now)
    .sort((a, b) => a.start - b.start)[0];

  return next ? next.session : sessions.sort((a, b) => b.start - a.start)[0]?.session || null;
}

function buildTooltip(session, isPast) {
  if (!session) return '';
  if (isPast) {
    return `
        <div class="pyx-tooltip pyx-tooltip--past">
          <div class="pyx-tooltip__title">${session.title}</div>
          <div class="pyx-tooltip__date">${session.time}</div>
          <div class="pyx-tooltip__desc">${session.tooltip_description}</div>
          <a class="pyx-btn pyx-btn--outline pyx-btn--disabled" href="#" aria-disabled="true" tabindex="-1">Concluido</a>
        </div>`;
  }
  return `
        <div class="pyx-tooltip">
          <div class="pyx-tooltip__title">${session.title}</div>
          <div class="pyx-tooltip__date">${session.time}</div>
          <div class="pyx-tooltip__desc">${session.tooltip_description}</div>
          <a class="pyx-btn pyx-btn--primary" href="${session.link}" target="_blank">Registrarse →</a>
        </div>`;
}

function buildCalendar(cfg) {
  const { name, year, month } = cfg;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const today = new Date();

  const headerHTML = DAY_NAMES.map(d => `<div class="pyx-calendar__day-name">${d}</div>`).join('');
  let daysHTML = '';

  // Celdas vacías al inicio
  for(let i=0;i<firstDay;i++) daysHTML += `<div class="pyx-cal-day pyx-cal-day--empty"></div>`;

  for(let d=1;d<=daysInMonth;d++) {
      const session = getSessionForDate(month, d);
    const isToday = (today.getFullYear()===year && today.getMonth()===month && today.getDate()===d);
    const isPast = new Date(year, month, d) < today && !isToday;
    let cls = "pyx-cal-day";
    if(session) cls += " pyx-cal-day--session";
    if(isPast && session) cls += " pyx-cal-day--past";
    if(isToday) cls += " pyx-cal-day--today";

    let tooltip = '';
    if(session) {
      if (Array.isArray(session)) {
        tooltip = `<div class="pyx-tooltips">${session.map(s => buildTooltip(s, isPast)).join('')}</div>`;
      } else {
        tooltip = buildTooltip(session, isPast);
      }
    }

    daysHTML += `<div class="${cls}">${d}${tooltip}</div>`;
  }

  const hasSessions = monthHasSessions(month);

  return `
    <div class="pyx-calendar">
      <div class="pyx-calendar__month">
        ${name} ${year}
        ${hasSessions ? '<span class="pyx-calendar__month-tag">Activo</span>' : '<span class="pyx-calendar__month-tag" style="background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.3)">Próximo</span>'}
      </div>
      <div class="pyx-calendar__days-header">${headerHTML}</div>
      <div class="pyx-calendar__grid">${daysHTML}</div>
    </div>`;
}

// Construir webinar card
function buildWebinarCard(session) {
  if (!session) {
    return `
      <div class="pyx-webinar-card">
        <div class="pyx-webinar-card__eyebrow">Próximo curso</div>
        <div class="pyx-webinar-card__title">No hay cursos disponibles</div>
        <div class="pyx-webinar-card__meta">
          <div class="pyx-webinar-card__meta-item">
            <span>Revisa el calendario para ver las próximas fechas.</span>
          </div>
        </div>
      </div>`;
  }

  return `
    <div class="pyx-webinar-card">
      <div class="pyx-webinar-card__eyebrow">${session.session || 'Sesión'}</div>
      <div class="pyx-webinar-card__title">${session.title}</div>
      <div class="pyx-webinar-card__meta">
        <div class="pyx-webinar-card__meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span><strong>${session.day}</strong></span>
        </div>
        <div class="pyx-webinar-card__meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span><strong>${session.start_hour}</strong>${session.finished_hour}</span>
        </div>
        <div class="pyx-webinar-card__meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M12 16V12H10" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M12 8.01V8" stroke-linecap="square"/>
          </svg>
          <span>${session.description}</span>
        </div>
        <div class="pyx-webinar-card__meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span>Abierto a todos los clientes</span>
        </div>
      </div>
      <a href="${session.link}" target="_blank" class="pyx-btn pyx-btn--primary" style="width:100%;justify-content:center;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        Registrate a este curso
      </a>
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
    const hasSessions = monthHasSessions(month);

    let headerHTML = DAY_NAMES.map(d => `<div class="pyx-calendar__day-name">${d}</div>`).join('');
    let gridHTML = '';

    for(let i=0;i<firstDay;i++) gridHTML += `<div class="pyx-cal-day pyx-cal-day--empty"></div>`;

    for(let d=1;d<=daysInMonth;d++){
      const session = getSessionForDate(month, d);
      const isToday = (today.getFullYear()===year && today.getMonth()===month && today.getDate()===d);
      const isPast = new Date(year, month, d) < today && !isToday;
      let cls = "pyx-cal-day";
      if(session) cls += " pyx-cal-day--session";
      if(isPast && session) cls += " pyx-cal-day--past";
      if(isToday) cls += " pyx-cal-day--today";

      let tooltip = '';
      if(session){
        if (Array.isArray(session)) {
          tooltip = `<div class="pyx-tooltips">${session.map(s => buildTooltip(s, isPast)).join('')}</div>`;
        } else {
          tooltip = buildTooltip(session, isPast);
        }
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

  html += buildWebinarCard(getUpcomingSession());
  container.innerHTML = html;

  // Fallback de tap/click para dispositivos táctiles, donde el tooltip por
  // :hover no siempre se activa de forma confiable.
  container.addEventListener('click', (event) => {
    const dayEl = event.target.closest('.pyx-cal-day--session');
    if (!dayEl) return;
    if (event.target.closest('.pyx-tooltip, .pyx-tooltips')) return;

    const wasOpen = dayEl.classList.contains('is-open');
    container.querySelectorAll('.pyx-cal-day--session.is-open').forEach((el) => el.classList.remove('is-open'));
    if (!wasOpen) dayEl.classList.add('is-open');
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.pyx-cal-day--session')) return;
    container.querySelectorAll('.pyx-cal-day--session.is-open').forEach((el) => el.classList.remove('is-open'));
  });
});