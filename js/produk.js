/* ===== DATA PRODUK ===== */
const allProducts = [
  {
    id: 1, cat: 'dark',
    name: 'Dark Chocolate Excellence',
    desc: 'Cokelat hitam premium 70% kakao dari perkebunan Jawa Timur. Rasa bold dengan sentuhan buah dan rempah khas Indonesia.',
    price: 85000, priceLabel: 'Rp 85.000',
    img: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=80',
    badge: 'Best Seller', stars: 5,
    details: ['70% Kakao Premium', 'Tanpa pengawet', 'Dari petani Jawa Timur', 'Rasa bold & kompleks', 'Kemasan eksklusif']
  },
  {
    id: 2, cat: 'milk',
    name: 'Milk Chocolate Velvet',
    desc: 'Cokelat susu lembut dengan perpaduan kakao pilihan dan susu segar. Tekstur creamy dan rasa manis yang seimbang.',
    price: 75000, priceLabel: 'Rp 75.000',
    img: 'images/milk-chocholate-velvet.png',
    badge: null, stars: 5,
    details: ['34% Kakao & Susu Premium', 'Tekstur creamy', 'Rasa manis seimbang', 'Cocok untuk semua usia', 'Kemasan elegan']
  },
  {
    id: 3, cat: 'powder',
    name: 'Cocoa Powder Premium',
    desc: 'Bubuk kakao murni tanpa gula tambahan. Cocok untuk minuman cokelat, kue, dan kreasi kuliner premium.',
    price: 95000, priceLabel: 'Rp 95.000',
    img: 'images/cocoa-powder-premium.png',
    badge: 'Pilihan Chef', stars: 5,
    details: ['100% Kakao Murni', 'Tanpa gula tambahan', 'Kaya antioksidan', 'Serbaguna untuk masak & minum', 'Kemasan airtight premium']
  },
  {
    id: 4, cat: 'artisan',
    name: 'Artisan Chocolate',
    desc: 'Koleksi cokelat artisan dengan varian rasa Nusantara: Pala, Kayu Manis, Kelapa, dan Cabe Rawit. Pengalaman rasa unik.',
    price: 125000, priceLabel: 'Rp 125.000',
    img: 'images/artisan-chocolate.png',
    badge: 'Limited', stars: 5,
    details: ['Varian rasa Nusantara', 'Bahan alami pilihan', 'Produksi terbatas', 'Kreasi artisan', 'Bingkai hadiah premium']
  },
  {
    id: 5, cat: 'dark',
    name: 'Dark Chocolate 85% Sulawesi',
    desc: 'Intensitas tinggi dengan 85% kakao asal Sulawesi Selatan. Cocok untuk penikmat cokelat sejati yang menyukai rasa kuat.',
    price: 110000, priceLabel: 'Rp 110.000',
    img: 'images/darkchocolate.png',
    badge: 'New', stars: 4,
    details: ['85% Kakao Sulawesi', 'Single origin', 'Vegan friendly', 'Rasa intensif & earthy', 'Kemasan kraft premium']
  },
  {
    id: 6, cat: 'milk',
    name: 'White Chocolate Coconut',
    desc: 'Cokelat putih lembut dengan aroma kelapa muda Nusantara. Perpaduan manis dan segar yang unik.',
    price: 80000, priceLabel: 'Rp 80.000',
    img: 'images/white-chocolate-coconut.png',
    badge: null, stars: 4,
    details: ['Cokelat Putih Premium', 'Kelapa Nusantara', 'Tanpa pewarna buatan', 'Aroma segar alami', 'Kemasan elegan']
  },
  {
    id: 7, cat: 'artisan',
    name: 'Gift Box Nusantara Collection',
    desc: 'Hamper eksklusif berisi 4 varian cokelat premium dalam kotak hadiah mewah. Sempurna untuk kado dan perayaan.',
    price: 250000, priceLabel: 'Rp 250.000',
    img: 'images/gift-box-colloection-nusantara.png',
    badge: 'Eksklusif', stars: 5,
    details: ['4 varian cokelat premium', 'Kotak hadiah mewah', 'Kartu ucapan custom', 'Pita eksklusif', 'Gratis ongkir']
  },
  {
    id: 8, cat: 'powder',
    name: 'Drinking Chocolate Mix',
    desc: 'Campuran bubuk cokelat premium siap seduh dengan rasa yang kaya dan aroma cokelat yang menggugah selera.',
    price: 65000, priceLabel: 'Rp 65.000',
    img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80',
    badge: null, stars: 4,
    details: ['Siap seduh', 'Aroma cokelat kuat', 'Rendah gula', 'Cocok panas & dingin', 'Kemasan 250g']
  }
];

const catLabels = {
  dark: 'Dark Chocolate',
  milk: 'Milk & White',
  powder: 'Cocoa Powder',
  artisan: 'Artisan'
};

/* ===== STATE ===== */
let activeCategory = 'semua';
let searchQuery = '';
let sortOrder = 'default';
let currentPage = 1;
const itemsPerPage = 4;

/* ===== DOM ===== */
const navbar       = document.getElementById('navbar');
const navMenu      = document.getElementById('nav-menu');
const hamburger    = document.getElementById('hamburger');
const themeToggle  = document.getElementById('theme-toggle');
const scrollBarEl  = document.getElementById('scroll-bar');
const backToTop    = document.getElementById('back-to-top');
const produkGrid   = document.getElementById('produk-grid');
const modal        = document.getElementById('product-modal');
const modalBody    = document.getElementById('modal-body');
const modalClose   = document.getElementById('modal-close');
const searchInput  = document.getElementById('search-input');
const filterBtns   = document.querySelectorAll('.filter-btn');
const sortSelect   = document.getElementById('sort-select');
const countLabel   = document.getElementById('count-label');

/* ===== LOCOMOTIVE SCROLL ===== */
let locoScroll = null;

/* ===== THEME ===== */
const savedTheme = localStorage.getItem('choconesia-theme');
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.querySelector('i').className = 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
  const rect   = themeToggle.getBoundingClientRect();
  const cx     = rect.left + rect.width / 2;
  const cy     = rect.top + rect.height / 2;
  const diag   = Math.ceil(Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)) * 2;
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();

  const overlay = document.createElement('div');
  overlay.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;width:${diag}px;height:${diag}px;margin:-${diag/2}px 0 0 -${diag/2}px;border-radius:50%;background:${accent};pointer-events:none;z-index:99999;transform:scale(0)`;
  document.body.appendChild(overlay);

  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';

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

/* ===== HAMBURGER ===== */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

/* ===== FILTER, SEARCH, SORT ===== */
function getFiltered() {
  let result = [...allProducts];
  if (activeCategory !== 'semua') result = result.filter(p => p.cat === activeCategory);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
  }
  if (sortOrder === 'price-asc')  result.sort((a, b) => a.price - b.price);
  if (sortOrder === 'price-desc') result.sort((a, b) => b.price - a.price);
  if (sortOrder === 'name-asc')   result.sort((a, b) => a.name.localeCompare(b.name));
  if (sortOrder === 'name-desc')  result.sort((a, b) => b.name.localeCompare(a.name));
  return result;
}

function renderStars(n) {
  return Array.from({ length: 5 }, (_, i) =>
    `<i class="fas fa-star" style="opacity:${i < n ? 1 : 0.25}"></i>`
  ).join('');
}

function renderGrid() {
  const products = getFiltered();
  if (countLabel) countLabel.textContent = products.length;

  // Reset ke halaman 1 kalau filter/search berubah
  const totalPages = Math.ceil(products.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = 1;

  // Slice produk sesuai halaman aktif
  const start = (currentPage - 1) * itemsPerPage;
  const pageProducts = products.slice(start, start + itemsPerPage);

  if (!products.length) {
    produkGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>Produk tidak ditemukan</h3>
        <p>Coba kata kunci atau filter yang berbeda.</p>
      </div>`;
    renderPagination(0);
    return;
  }

  produkGrid.innerHTML = pageProducts.map(p => `
    <div class="product-card" data-id="${p.id}" data-tilt data-tilt-max="6" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.1">
      <div class="card-img-wrapper">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-category">${catLabels[p.cat]}</div>
        <h3>${p.name}</h3>
        <div class="card-stars">${renderStars(p.stars)}</div>
        <p class="product-desc">${p.desc}</p>
        <div class="card-footer">
          <span class="product-price">${p.priceLabel}</span>
          <button class="btn-detail" data-id="${p.id}">Lihat Detail</button>
        </div>
      </div>
    </div>
  `).join('');

  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'));
  }

  produkGrid.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(parseInt(btn.dataset.id));
    });
  });

  produkGrid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });

  renderPagination(totalPages);
  setTimeout(() => { if (locoScroll) locoScroll.update(); }, 100);
}

//======== render pagination ==========//
function renderPagination(totalPages) {
  let pagination = document.getElementById('pagination');
  if (!pagination) {
    pagination = document.createElement('div');
    pagination.id = 'pagination';
    pagination.className = 'pagination';
    produkGrid.parentNode.insertBefore(pagination, produkGrid.nextSibling);
  }

  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  let html = '';

  // Tombol prev
  html += `<button class="page-btn page-prev ${currentPage === 1 ? 'disabled' : ''}" ${currentPage === 1 ? 'disabled' : ''}>
    <i class="fas fa-chevron-left"></i>
  </button>`;

  // Nomor halaman
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn page-num ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }

  // Tombol next
  html += `<button class="page-btn page-next ${currentPage === totalPages ? 'disabled' : ''}" ${currentPage === totalPages ? 'disabled' : ''}>
    <i class="fas fa-chevron-right"></i>
  </button>`;

  pagination.innerHTML = html;

  pagination.querySelectorAll('.page-num').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = parseInt(btn.dataset.page);
      renderGrid();
      // Scroll ke atas grid
      if (locoScroll) locoScroll.scrollTo(document.querySelector('.produk-toolbar'));
      else document.querySelector('.produk-toolbar').scrollIntoView({ behavior: 'smooth' });
    });
  });

  pagination.querySelector('.page-prev')?.addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderGrid(); }
  });

  pagination.querySelector('.page-next')?.addEventListener('click', () => {
    if (currentPage < totalPages) { currentPage++; renderGrid(); }
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    currentPage = 1
    renderGrid();
  });
});

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim();
  currentPage = 1
  renderGrid();
});

sortSelect.addEventListener('change', () => {
  sortOrder = sortSelect.value;
  currentPage = 1
  renderGrid();
});

/* ===== MODAL ===== */
function openModal(id) {
  const p = allProducts.find(pr => pr.id === id);
  if (!p) return;
  modalBody.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p class="modal-price">${p.priceLabel}</p>
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
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ===== SCROLL & NAV ===== */
function onScroll(sy, limit) {
  navbar.classList.toggle('scrolled', sy > 50);
  scrollBarEl.style.width = Math.min((sy / limit) * 100, 100) + '%';
  backToTop.classList.toggle('visible', sy > 400);
}

backToTop.addEventListener('click', () => {
  if (locoScroll) locoScroll.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: 'smooth' });
});

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
  renderGrid();
});