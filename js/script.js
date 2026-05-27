/* ===== DATA ===== */
const products = [
  { id:1, name:'Dark Chocolate Excellence', desc:'Cokelat hitam premium 70% kakao dari perkebunan Jawa Timur. Rasa bold dengan sentuhan buah dan rempah khas Indonesia.', price:'Rp 85.000', img:'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&q=80', details:['70% Kakao Premium','Tanpa pengawet','Dari petani Jawa Timur','Rasa bold & kompleks','Kemasan eksklusif'] },
  { id:2, name:'Milk Chocolate Velvet', desc:'Cokelat susu lembut dengan perpaduan kakao pilihan dan susu segar. Tekstur creamy dan rasa manis yang seimbang.', price:'Rp 75.000', img:'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=300&q=80', details:['34% Kakao & Susu Premium','Tekstur creamy','Rasa manis seimbang','Cocok untuk semua usia','Kemasan elegan'] },
  { id:3, name:'Cocoa Powder Premium', desc:'Bubuk kakao murni tanpa gula tambahan. Cocok untuk minuman cokelat, kue, dan kreasi kuliner premium.', price:'Rp 95.000', img:'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80', details:['100% Kakao Murni','Tanpa gula tambahan','Kaya antioksidan','Serbaguna untuk masak & minum','Kemasan airtight premium'] },
  { id:4, name:'Artisan Chocolate', desc:'Koleksi cokelat artisan dengan varian rasa Nusantara: Pala, Kayu Manis, Kelapa, dan Cabe Rawit. Pengalaman rasa unik.', price:'Rp 125.000', img:'https://images.unsplash.com/photo-1606313562750-1b71db1e2b2b?w=300&q=80', details:['Varian rasa Nusantara','Bahan alami pilihan','Produksi terbatas','Kreasi artisan','Bingkai hadiah premium'] }
];

const timelineData = [
  { year:'Langkah 01', title:'Petani Kakao', desc:'Petani mandiri di seluruh Indonesia membudidayakan kakao berkualitas tinggi dengan metode ramah lingkungan dan berkelanjutan.', icon:'<i class="fas fa-users"></i>' },
  { year:'Langkah 02', title:'Fermentasi', desc:'Proses fermentasi alami yang menghasilkan cita rasa khas kakao Nusantara dengan standar kualitas internasional.', icon:'<i class="fas fa-seedling"></i>' },
  { year:'Langkah 03', title:'Pengolahan', desc:'Pengolahan modern dengan teknologi terkini memastikan setiap biji kakao menghasilkan produk bermutu premium.', icon:'<i class="fas fa-industry"></i>' },
  { year:'Langkah 04', title:'Produk Cokelat', desc:'Beragam produk cokelat premium siap pasar — dari batangan cokelat hingga bubuk kakao berkualitas tinggi.', icon:'<i class="fas fa-cube"></i>' },
  { year:'Langkah 05', title:'Konsumen Global', desc:'Menjangkau konsumen di dalam dan luar negeri dengan platform digital yang transparan, cepat, dan terpercaya.', icon:'<i class="fas fa-globe-asia"></i>' }
];

const testimonials = [
  { name:'Chef Maria Santoso', role:'Pastry Chef Internasional', quote:'ChocoNesia membawa cokelat Indonesia ke tingkat global. Kualitas dan rasa yang luar biasa — saya bangga menggunakan produk ini di dapur saya.', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
  { name:'Pak Budi Hartono', role:'Petani Kakao Jawa Timur', quote:'Sebagai petani kakao, saya bangga produk kami diolah dengan standar premium. ChocoNesia memberi kami akses ke pasar yang lebih luas.', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { name:'Dr. Sari Dewi', role:'Ahli Agribisnis UI', quote:'Platform ini menghubungkan petani dengan pasar internasional secara langsung. Inovasi digital yang tepat untuk hilirisasi kakao Indonesia.', avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' }
];

const faqData = [
  { q:'Apa itu ChocoNesia?', a:'ChocoNesia adalah platform digital premium yang menghubungkan petani kakao Indonesia dengan konsumen global. Kami fokus pada hilirisasi produk kakao — dari biji kakao berkualitas hingga produk cokelat siap konsumsi — dengan standar mutu internasional.' },
  { q:'Bagaimana cara membeli produk?', a:'Produk dapat dibeli langsung melalui platform ChocoNesia. Pilih produk dari katalog, klik "Lihat Detail" untuk informasi lengkap, dan lakukan pemesanan melalui kontak yang tersedia. Kami melayani pengiriman ke seluruh Indonesia dan mancanegara.' },
  { q:'Apa itu hilirisasi kakao?', a:'Hilirisasi kakao adalah proses pengolahan biji kakao mentah menjadi produk bernilai tambah tinggi seperti cokelat batangan, bubuk kakao, dan berbagai produk turunan lainnya. ChocoNesia mendukung penuh proses ini untuk meningkatkan kesejahteraan petani dan daya saing kakao Indonesia.' },
  { q:'Apakah produk yang dijual asli Indonesia?', a:'Seluruh produk ChocoNesia berasal dari kakao asli Indonesia yang dibudidayakan oleh petani lokal dari berbagai daerah seperti Jawa Timur, Sulawesi Selatan, Sumatera Barat, dan Papua. Setiap produk melalui proses quality control yang ketat.' },
  { q:'Bagaimana sistem pengirimannya?', a:'Kami bekerja sama dengan jasa logistik terpercaya untuk pengiriman dalam dan luar negeri. Setiap produk dikemas dengan standar premium untuk menjaga kualitas. Estimasi pengiriman 2-5 hari untuk domestik dan 7-14 hari untuk internasional.' }
];

/* ===== DOM REFS ===== */
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const themeToggle = document.getElementById('theme-toggle');
const scrollBar = document.getElementById('scroll-bar');
const backToTop = document.getElementById('back-to-top');
const productsGrid = document.getElementById('products-grid');
const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const timelineContainer = document.getElementById('timeline-container');
const testimonialsGrid = document.getElementById('testimonials-grid');
const faqList = document.getElementById('faq-list');
const heroParticles = document.getElementById('hero-particles');

/* ===== LOCOMOTIVE SCROLL ===== */
let locoScroll = null;

/* ===== THEME — DARK DEFAULT + LOCALSTORAGE ===== */
const savedTheme = localStorage.getItem('choconesia-theme');
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.querySelector('i').className = 'fas fa-sun';
}

themeToggle.addEventListener('click', (e) => {
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

  const tl = gsap.timeline({
    onComplete: () => {
      overlay.remove();
      if (chartInstance) { chartInstance.destroy(); initCharts(); }
    }
  });

  tl.to(overlay, {
    scale: 1,
    opacity: 1,
    duration: 0.35,
    ease: 'power3.in',
    onComplete: () => {
      document.documentElement.setAttribute('data-theme', next);
      themeToggle.querySelector('i').className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
      if (next === 'light') {
        localStorage.setItem('choconesia-theme', 'light');
      } else {
        localStorage.removeItem('choconesia-theme');
      }
    }
  });

  tl.to(overlay, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.out'
  });
});

/* ===== LOADING + INIT ===== */
document.body.classList.add('loading');
setTimeout(() => {
  loadingScreen.classList.add('loaded');
  document.body.classList.remove('loading');

  locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });

  ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    scrollTop(value) {
      if (arguments.length) {
        locoScroll.scrollTo(value, { duration: 0, disableLerp: true });
      }
      return locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector('[data-scroll-container]').style.transform ? 'transform' : 'fixed'
  });

  locoScroll.on('scroll', onLocoScroll);
  locoScroll.on('scroll', ScrollTrigger.update);
  ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
  window.addEventListener('resize', () => { locoScroll.update(); ScrollTrigger.refresh(); });

  initCharts();
  initCounters();
  generateParticles();
  initGsapBeans();
  initGsapReveal();
  observeTimeline();

  ScrollTrigger.refresh();
}, 2200);

/* ===== LOCOMOTIVE SCROLL HANDLER ===== */
function onLocoScroll(instance) {
  const sy = instance.scroll.y;
  const limit = instance.limit.y;

  navbar.classList.toggle('scrolled', sy > 50);
  scrollBar.style.width = Math.min((sy / limit) * 100, 100) + '%';
  backToTop.classList.toggle('visible', sy > 400);

  let current = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (sy >= s.offsetTop - 200) current = s.getAttribute('id');
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}

/* ===== PARTICLES ===== */
function generateParticles() {
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 8 + 's';
    p.style.animationDuration = (4 + Math.random() * 4) + 's';
    p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
    heroParticles.appendChild(p);
  }
}

/* ===== NAVBAR HAMBURGER ===== */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = this.getAttribute('href');
    if (target && target.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(target);
      if (el && locoScroll) {
        locoScroll.scrollTo(el, { duration: 1.2, easing: [0.25, 0.1, 0.25, 1] });
      }
    }
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

/* ===== BACK TO TOP ===== */
backToTop.addEventListener('click', () => {
  if (locoScroll) locoScroll.scrollTo(0, { duration: 0.8, easing: [0.25, 0.1, 0.25, 1] });
});

/* ===== MOUSE PARALLAX HERO (GSAP) ===== */
document.querySelector('.hero').addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const x = (clientX / window.innerWidth - 0.5) * 2;
  const y = (clientY / window.innerHeight - 0.5) * 2;
  document.querySelectorAll('.cocoa-bean').forEach((el) => {
    const speed = parseFloat(el.dataset.depth) || 0.5;
    if (el._beanTween) el._beanTween.kill();
    el._beanTween = gsap.to(el, {
      x: x * 60 * speed,
      z: Math.abs(speed) * 60,
      rotateX: y * 18 * speed,
      rotateY: x * -22 * speed,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  });
});
document.querySelector('.hero').addEventListener('mouseleave', () => {
  document.querySelectorAll('.cocoa-bean').forEach(el => {
    if (el._beanTween) el._beanTween.kill();
    gsap.to(el, { x: 0, z: 0, rotateX: 0, rotateY: 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
  });
});

/* ===== GSAP COCOA BEAN SCROLL ===== */
function initGsapBeans() {
  gsap.registerPlugin(ScrollTrigger);
  const beans = gsap.utils.toArray('.cocoa-bean');
  beans.forEach((bean) => {
    const depth = parseFloat(bean.dataset.depth) || 0.5;
    const rot = parseFloat(bean.dataset.rotate) || 15;
    gsap.to(bean, {
      y: -350 * Math.abs(depth),
      rotationZ: rot + 70 * depth,
      ease: 'none',
      scrollTrigger: {
        trigger: bean,
        scroller: '[data-scroll-container]',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });
    gsap.to(bean, {
      rotateX: -20 * depth,
      rotateY: 30 * depth,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        scroller: '[data-scroll-container]',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    });
  });
}

/* ===== GSAP SECTION REVEAL (replaces AOS) ===== */
function initGsapReveal() {
  gsap.registerPlugin(ScrollTrigger);
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const children = section.querySelectorAll(':scope > .container > *');
    if (children.length) {
      gsap.from(children, {
        scrollTrigger: {
          trigger: section,
          scroller: '[data-scroll-container]',
          start: 'top 88%',
          once: true
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }
  });
}

/* ===== PRODUCT CARDS ===== */
function renderProducts() {
  productsGrid.innerHTML = products.map(p => `
    <div class="product-card" data-id="${p.id}" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.15">
      <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy">
      <h3>${p.name}</h3>
      <p class="product-desc">${p.desc}</p>
      <span class="product-price">${p.price}</span>
      <button class="btn-detail" data-id="${p.id}">Lihat Detail</button>
    </div>
  `).join('');
  if (typeof VanillaTilt !== 'undefined') VanillaTilt.init(document.querySelectorAll('[data-tilt]'));
  productsGrid.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); openModal(parseInt(btn.dataset.id)); });
  });
}

function openModal(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  modalBody.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p class="modal-price">${p.price}</p>
    <p class="modal-desc">${p.desc}</p>
    <ul class="modal-list">${p.details.map(d => `<li>${d}</li>`).join('')}</ul>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* ===== TIMELINE ===== */
function renderTimeline() {
  timelineContainer.innerHTML = timelineData.map((t, i) => `
    <div class="timeline-item" data-index="${i}">
      <div class="timeline-content">
        <span class="timeline-year">${t.year}</span>
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
      </div>
      <div class="timeline-icon">${t.icon}</div>
    </div>
  `).join('');
}
function observeTimeline() {
  gsap.utils.toArray('.timeline-item').forEach(item => {
    ScrollTrigger.create({
      trigger: item,
      scroller: '[data-scroll-container]',
      start: 'top 85%',
      onEnter: () => item.classList.add('revealed')
    });
  });
}

/* ===== TESTIMONIALS ===== */
function renderTestimonials() {
  testimonialsGrid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="quote">&ldquo;</div>
      <p>${t.quote}</p>
      <div class="testimonial-author">
        <img src="${t.avatar}" alt="${t.name}" class="avatar" loading="lazy">
        <div><h4>${t.name}</h4><span>${t.role}</span></div>
      </div>
    </div>
  `).join('');
}

/* ===== FAQ ===== */
function renderFAQ() {
  faqList.innerHTML = faqData.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-question">
        <span>${f.q}</span>
        <i class="fas fa-plus faq-icon"></i>
      </button>
      <div class="faq-answer"><div class="faq-answer-inner">${f.a}</div></div>
    </div>
  `).join('');
  faqList.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');
      faqList.querySelectorAll('.faq-item.active').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.faq-answer').style.maxHeight = '0';
      });
      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ===== COUNTERS ===== */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const isDecimal = !Number.isInteger(target);
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = target * eased;
    el.textContent = isDecimal ? val.toFixed(1) : Math.floor(val).toLocaleString();
    if (t < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
function initCounters() {
  gsap.utils.toArray('.counter-number').forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      scroller: '[data-scroll-container]',
      start: 'top 90%',
      once: true,
      onEnter: () => animateCounter(el)
    });
  });
}

/* ===== CHART ===== */
let chartInstance = null;
function initCharts() {
  const canvas = document.getElementById('production-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const colors = { grid: isDark ? 'rgba(212,165,116,0.08)' : 'rgba(92,58,33,0.08)', text: isDark ? '#d4a574' : '#5c3a21' };
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2019','2020','2021','2022','2023','2024'],
      datasets: [{
        label: 'Produksi (Ton)', data: [734,720,688,667,650,660],
        borderColor: '#c9956b',
        backgroundColor: (ctx) => { const g = ctx.chart.ctx.createLinearGradient(0,0,0,300); g.addColorStop(0,'rgba(201,149,107,0.3)'); g.addColorStop(1,'rgba(201,149,107,0)'); return g; },
        fill: true, tension: 0.4, pointBackgroundColor: '#c9956b',
        pointBorderColor: isDark ? '#1a0f0a' : '#faf0e6', pointBorderWidth: 3, pointRadius: 5, pointHoverRadius: 8, borderWidth: 3
      }]
    },
    options: {
      responsive: false, animation: {duration: 0},
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: colors.grid }, ticks: { color: colors.text, font: { family:'Inter', size:11 } } },
        y: { grid: { color: colors.grid }, ticks: { color: colors.text, font: { family:'Inter', size:11 }, callback: (v) => v + 'K' }, beginAtZero: false }
      },
      interaction: { intersect: false, mode: 'index' }
    }
  });
}

/* ===== INIT ===== */
renderProducts();
renderTimeline();
renderTestimonials();
renderFAQ();
