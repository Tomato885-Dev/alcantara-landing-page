/* =========================================================
   Festival Alcántara — interacciones del landing
   ========================================================= */

/* ---- 1. Line-up (edita libremente) ----
   size: 'xl' (headliner), 'l', 'm', 's'
   days: en qué días toca cada artista */
const LINEUP = [
  { name: 'KIDD VOODOO', size: 'xl', days: [1] },
  { name: 'HEADLINER DOS', size: 'xl', days: [2] },
  { name: 'HEADLINER TRES', size: 'xl', days: [3] },
  { name: 'Artista Mayor A', size: 'l', days: [1] },
  { name: 'Artista Mayor B', size: 'l', days: [1, 2] },
  { name: 'Artista Mayor C', size: 'l', days: [2] },
  { name: 'Artista Mayor D', size: 'l', days: [3] },
  { name: 'Banda Media E', size: 'm', days: [1] },
  { name: 'Banda Media F', size: 'm', days: [2] },
  { name: 'Banda Media G', size: 'm', days: [3] },
  { name: 'Banda Media H', size: 'm', days: [1, 3] },
  { name: 'Banda Media I', size: 'm', days: [2] },
  { name: 'Emergente J', size: 's', days: [1] },
  { name: 'Emergente K', size: 's', days: [2] },
  { name: 'Emergente L', size: 's', days: [3] },
  { name: 'Emergente M', size: 's', days: [1] },
  { name: 'Emergente N', size: 's', days: [2] },
  { name: 'Emergente O', size: 's', days: [3] },
];

const poster = document.getElementById('poster');

function renderPoster(day) {
  const list = day === 'all' ? LINEUP : LINEUP.filter(a => a.days.includes(Number(day)));
  poster.innerHTML = list
    .map((a, i) => {
      const sep = (a.size !== 'xl' && i > 0 && list[i - 1].size !== 'xl')
        ? '<span class="poster__sep">✺</span>' : '';
      return `${sep}<span class="poster__artist poster__artist--${a.size}">${a.name}</span>`;
    })
    .join('');
}
renderPoster('all');

/* ---- 2. Tabs por día ---- */
document.getElementById('dayTabs').addEventListener('click', e => {
  const tab = e.target.closest('.day-tab');
  if (!tab) return;
  document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('is-active'));
  tab.classList.add('is-active');
  renderPoster(tab.dataset.day);
});

/* ---- 3. Countdown ---- */
const TARGET = new Date('2026-03-13T13:00:00').getTime();
const cd = {
  d: document.getElementById('cd-days'),
  h: document.getElementById('cd-hours'),
  m: document.getElementById('cd-min'),
  s: document.getElementById('cd-sec'),
};
const pad = n => String(n).padStart(2, '0');
function tick() {
  const diff = TARGET - Date.now();
  if (diff <= 0) { cd.d.textContent = cd.h.textContent = cd.m.textContent = cd.s.textContent = '00'; return; }
  const s = Math.floor(diff / 1000);
  cd.d.textContent = pad(Math.floor(s / 86400));
  cd.h.textContent = pad(Math.floor((s % 86400) / 3600));
  cd.m.textContent = pad(Math.floor((s % 3600) / 60));
  cd.s.textContent = pad(s % 60);
}
tick();
setInterval(tick, 1000);

/* ---- 4. Nav ---- */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

window.addEventListener('scroll', () => nav.classList.toggle('is-scrolled', window.scrollY > 40));

function setMenu(open) {
  navLinks.classList.toggle('is-open', open);
  navOverlay.classList.toggle('is-open', open);
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  document.body.style.overflow = open ? 'hidden' : '';
}
burger.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
navOverlay.addEventListener('click', () => setMenu(false));
navLinks.addEventListener('click', e => { if (e.target.tagName === 'A') setMenu(false); });

/* ---- 5. FAQ ---- */
document.getElementById('accordion').addEventListener('click', e => {
  const q = e.target.closest('.acc__q');
  if (!q) return;
  const item = q.parentElement;
  const answer = item.querySelector('.acc__a');
  const open = item.classList.toggle('is-open');
  answer.style.maxHeight = open ? answer.scrollHeight + 'px' : null;
});

/* ---- 6. Reveal on scroll ---- */
const toReveal = document.querySelectorAll('.section__head, .info-card, .exp-card, .ticket, .countdown');
toReveal.forEach(el => el.setAttribute('data-reveal', ''));
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
toReveal.forEach(el => io.observe(el));
