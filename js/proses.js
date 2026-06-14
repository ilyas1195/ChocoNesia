/* ===== DOM REFS ===== */
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const themeToggle = document.getElementById('theme-toggle');
const scrollBarEl = document.getElementById('scroll-bar');
const backToTop = document.getElementById('back-to-top');

/* ===== LOCOMOTIVE SCROLL ===== */
let locoScroll = null;

/* ===== THEME ===== */
const savedTheme = localStorage.getItem('choconesia-theme');
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  if (themeToggle) themeToggle.querySelector('i').className = 'fas fa-sun';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const rect = themeToggle.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const diag = Math.ceil(Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)) * 2;
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();

    const overlay = document.createElement('div');
    overlay.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;width:${diag}px;height:${diag}px;margin:-${diag/2}px 0 0 -${diag/2}px;border-radius:50%;background:${accent};pointer-events:none;z-index:99999;transform:scale(0)`;
    document.body.appendChild(overlay);

    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';

    const tl = gsap.timeline({ onComplete: () => overlay.remove() });
    tl.to(overlay, {
      scale: 1, opacity: 1, duration: 0.35, ease: 'power3.in',
      onComplete: () => {
        document.documentElement.setAttribute('data-theme', next);
        themeToggle.querySelector('i').className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        next === 'light'
          ? localStorage.setItem('choconesia-theme', 'light')
          : localStorage.removeItem('choconesia-theme');
      }
    });
    tl.to(overlay, { opacity: 0, duration: 0.3, ease: 'power2.out' });
  });
}

/* ===== HAMBURGER ===== */
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

/* ===== NAV CLICK ===== */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    if (navMenu) navMenu.classList.remove('active');
    if (hamburger) hamburger.classList.remove('active');
  });
});

/* ===== SCROLL ===== */
function onScroll(sy, limit) {
  if (navbar) navbar.classList.toggle('scrolled', sy > 50);
  if (scrollBarEl) scrollBarEl.style.width = Math.min((sy / limit) * 100, 100) + '%';
  if (backToTop) backToTop.classList.toggle('visible', sy > 400);
}

/* ===== BACK TO TOP ===== */
if (backToTop) {
  backToTop.addEventListener('click', () => {
    if (locoScroll) locoScroll.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===== PROCES CARD REVEAL ===== */
function initProsesReveal() {
  gsap.registerPlugin(ScrollTrigger);
  const cards = gsap.utils.toArray('.proses-card');
  cards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        scroller: '[data-scroll-container]',
        start: 'top 88%',
        once: true
      },
      y: 50,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.08,
      ease: 'power3.out'
    });
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });
  locoScroll.on('scroll', (instance) => {
    onScroll(instance.scroll.y, instance.limit.y);
  });
  window.addEventListener('resize', () => locoScroll.update());

  initProsesReveal();
  ScrollTrigger.refresh();
});
