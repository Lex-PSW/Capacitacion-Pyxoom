/* =============================================
   PYXOOM 4.2.3 — SCRIPT PRINCIPAL
   Archivo: script.js
   ============================================= */

// Datos de sesiones con tooltips
const SESSIONS = {
  // mes (0-indexed), dia: {title, time, link}
  "7-5":  { title:"Psicometría y Gestión por Competencias",
            time:"Mie 5 Ago · 9:30 AM - 12:30 PM (CST)",
            day:"Miércoles 5 de Agosto, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:30 PM (CST)",
            session:"Sesión 1",
            description:"El(la) participante identificará las características y diferencias entre la metodología Estándar y Spyd, a fin de seleccionar aquella que se alinee al proceso interno de la organización",
            tooltip_description:"Metodología alineada a tu proceso",
            link:"https://events.teams.microsoft.com/event/657d7d9a-ea69-4876-aa31-63b4071f9aae@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "7-6":  { title:"Psicometría y Gestión por Competencias",
            time:"Jue 6 Ago · 9:30 AM - 12:30 PM (CST)",
            day:"Jueves 6 de Agosto, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:30 PM (CST)",
            session:"Sesión 2",
            description:"El(la) participante identificará las características y diferencias entre la metodología Estándar y Spyd, a fin de seleccionar aquella que se alinee al proceso interno de la organización",
            tooltip_description:"Metodología alineada a tu proceso",
            link:"https://events.teams.microsoft.com/event/657d7d9a-ea69-4876-aa31-63b4071f9aae@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "7-11": { title:"Uso de Pyxoom 4.2",
            time:"Mar 11 Ago · 9:30 AM - 12:00 PM (CST)",
            day:"Martes 11 de Agosto, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 3",
            description: "El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/309a5c8b-ef49-4d4a-9eb1-bd41871690ec@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "7-12": { title:"Uso de Pyxoom 4.2",
            time:"Mier 12 Ago · 9:30 AM - 12:00 PM (CST)",
            day:"Miércoles 12 de Agosto, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 4",
            description: "El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/309a5c8b-ef49-4d4a-9eb1-bd41871690ec@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "7-13": { title:"Uso de Pyxoom 4.2",
            time:"Jue 13 Ago · 9:30 AM - 12:00 PM (CST)",
            day:"Jueves 13 de Agosto, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 12:00 PM (CST)",
            session:"Sesión 5",
            description: "El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/309a5c8b-ef49-4d4a-9eb1-bd41871690ec@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "7-18": { title:"Metodología de perfilamiento",
            time:"Mar 18 Ago · 3:00 PM - 5:00 PM (CST)",
            day:"Martes 18 de Agosto, 2026",
            start_hour:"3:00 PM",
            finished_hour:" - 5:00 PM (CST)",
            session:"Sesión 6",
            description:"El(la) participante conocerá los pasos para la creación de perfiles de psicometría y competencias,  así como el registro de estos en la plataforma.",
            tooltip_description:"Creación y registro de perfiles",
            link:"https://events.teams.microsoft.com/event/1178d7fc-14ce-41cb-a543-badaf777e0aa@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "7-19": { title:"Testyt: Alta de pruebas técnicas",
            time:"Mie 19 Ago · 3:00 PM - 4:00 PM (CST)",
            day:"Miércoles 19 de Agosto, 2026",
            start_hour:"3:00 PM",
            finished_hour:" - 4:00 PM (CST)",
            session:"Sesión 7",
            description:"El(la) participante conocerá los pasos para realizar el alta de una prueba técnica en Testyt, a fin de usarla a través de Pyxoom.",
            tooltip_description:"Alta de pruebas técnicas en Testyt",
            link:"https://events.teams.microsoft.com/event/806c59f5-9979-4a83-a8cb-570c44584bf8@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "7-21": { title:"Amitai: Perfiles y reportes",
            time:"Vie 21 Ago · 9:30 AM - 11:00 AM (CST)",
            day:"Viernes 21 de Agosto, 2026",
            start_hour:"9:30 AM",
            finished_hour:" - 11:00 AM (CST)",
            session:"Sesión 8",
            description:"El(la) participante conocerá los pasos para realizar el registro de un perfil de honestidad a través de la plataforma de Amitai.",
            tooltip_description:"Registro de perfiles en Amitai",
            link:"https://events.teams.microsoft.com/event/41b814db-4bb5-4d00-bc82-251a033aa22b@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "7-26": { title:"Uso de Pyxoom 4.2",
            time:"Mie 26 Ago · 3:00 PM - 5:30 PM (CST)",
            day:"Miércoles 26 de Agosto, 2026",
            start_hour:"3:00 PM",
            finished_hour:" - 5:30 PM (CST)",
            session:"Sesión 9",
            description:"El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/6dca4ebd-4d75-49eb-830e-b7c2f072c38c@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
  "7-27": { title:"Uso de Pyxoom 4.2",
            time:"Jue 27 Ago · 3:00 PM - 5:30 PM (CST)",
            day:"Jueves 27 de Agosto, 2026",
            start_hour:"3:00 PM",
            finished_hour:" - 5:30 PM (CST)",
            session:"Sesión 10",
            description:"El(la) participante identificará el funcionamiento de los diferentes módulos de Pyxoom. Este curso incluye la revisión de Power BI y las funciones de IA.",
            tooltip_description:"Revisión de módulos, Power BI y funciones de IA",
            link:"https://events.teams.microsoft.com/event/6dca4ebd-4d75-49eb-830e-b7c2f072c38c@4699fbe4-77a7-4846-ad70-9ce4e3841335" },
};

const MONTHS = [  
  { name:"Agosto", year:2026, month:7 },
  { name:"Septiembre", year:2026, month:8 },
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
});