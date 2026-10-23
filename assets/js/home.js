/* home page — tabbed best sellers + combo offers strip */
'use strict';
if (typeof renderChrome === 'function') {
  renderChrome('home');
}

(function () {
  const bn = n => String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
  const stars5 = typeof icon === 'function' ? icon('star').repeat(5) : '★★★★★';

  /* ---------- best sellers with category tabs ---------- */
  const tabsEl = $('#home-tabs');
  const gridEl = $('#best-grid');
  if (tabsEl && gridEl && window.BB && Array.isArray(BB.products)) {
    let cur = 'all';
    const TABS = [{ id: 'all', name: 'সবচেয়ে পছন্দ' }, ...BB.categories];

    function paintBest() {
      tabsEl.innerHTML = TABS.map(t =>
        `<button class="tab${cur === t.id ? ' active' : ''}" data-cat="${t.id}">${t.name}</button>`).join('');
      const list = (cur === 'all' ? BB.products : BB.products.filter(p => p.cat === cur)).slice(0, 8);
      gridEl.innerHTML = list.map(cardHTML).join('');
    }
    tabsEl.addEventListener('click', e => {
      const b = e.target.closest('.tab'); if (!b) return;
      cur = b.dataset.cat;
      paintBest();
    });
    paintBest();
  }

  /* ---------- combo & bundle strip (bundle-first merchandising) ---------- */
  const comboGrid = $('#combo-grid');
  if (comboGrid && window.BB && Array.isArray(BB.products)) {
    const combos = BB.products.filter(p => p.cat === 'kombo');
    comboGrid.innerHTML = combos.map(p => {
      const maxSave = Math.max(...p.variants.map(v => Math.round((1 - v.price / v.regular) * 100)));
      return `
      <article class="combo-card">
        <a href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${esc(p.name)}" loading="lazy"></a>
        <span class="badge combo combo-tag">${icon('gift')} কম্বো সেট</span>
        ${maxSave > 0 ? `<span class="combo-save">সাশ্রয় −${bn(maxSave)}%</span>` : ''}
        <div class="combo-body">
          <h3><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
          <div class="combo-price"><small>শুরু</small> <b>${fmt(p.minPrice)}</b></div>
          <button class="btn" data-qb="${p.id}">${icon('bolt')} দ্রুত অর্ডার</button>
        </div>
      </article>`;
    }).join('');

    const comboPrev = $('#combo-prev');
    const comboNext = $('#combo-next');
    const comboThumb = $('#combo-thumb');

    function updateComboSlider() {
      if (!comboGrid || !comboThumb) return;
      const maxScroll = comboGrid.scrollWidth - comboGrid.clientWidth;
      if (maxScroll <= 0) {
        comboThumb.style.width = '100%';
        comboThumb.style.transform = 'translateX(0)';
        return;
      }
      const ratio = comboGrid.clientWidth / comboGrid.scrollWidth;
      const thumbWidth = Math.max(20, Math.round(ratio * 100));
      comboThumb.style.width = thumbWidth + '%';
      const scrollPercent = comboGrid.scrollLeft / maxScroll;
      const maxTranslate = 100 - thumbWidth;
      comboThumb.style.transform = `translateX(${scrollPercent * maxTranslate}%)`;
    }

    comboGrid.addEventListener('scroll', updateComboSlider, { passive: true });
    window.addEventListener('resize', updateComboSlider);
    setTimeout(updateComboSlider, 120);

    if (comboPrev) {
      comboPrev.addEventListener('click', () => {
        comboGrid.scrollBy({ left: -320, behavior: 'smooth' });
      });
    }
    if (comboNext) {
      comboNext.addEventListener('click', () => {
        comboGrid.scrollBy({ left: 320, behavior: 'smooth' });
      });
    }
  }

  /* ---------- optional bento (if element exists) ---------- */
  const bentoGrid = $('#bento-grid');
  if (bentoGrid && window.BB && Array.isArray(BB.categories)) {
    const catTile = ct => {
      const rep = BB.products.find(p => p.cat === ct.id);
      if (!rep) return '';
      return `
      <a class="b-tile" href="shop.html?cat=${ct.id}">
        <img src="${rep.images[0]}" alt="${ct.name}" loading="lazy">
        <span class="b-cap"><span>${ct.name}<small>${ct.en || ''}</small></span>${icon('arrow-right')}</span>
      </a>`;
    };
    const testi = r => `
      <div class="b-testi">
        <span class="stars" aria-label="5 out of 5">${stars5}</span>
        <p>"${esc(r.t)}"</p>
        <span class="who">${icon('check')} ${esc(r.n)}</span>
      </div>`;
    const testis = (BB.reviews || []).filter(r => r.r === 5 && r.t.length > 45).slice(0, 2);
    bentoGrid.innerHTML =
      catTile(BB.categories[0]) + catTile(BB.categories[1]) + (testis[0] ? testi(testis[0]) : '') +
      catTile(BB.categories[2]) + catTile(BB.categories[3]) + (testis[1] ? testi(testis[1]) : '');
  }

  /* ---------- optional reels (if element exists) ---------- */
  const reelsWrap = $('#reels-wrap');
  if (reelsWrap && typeof videoStripHTML === 'function') {
    reelsWrap.innerHTML = videoStripHTML(true);
  }

  /* ---------- hero banner slider (if elements exist) ---------- */
  const slides = $$('.hslide');
  const dots = $$('#hero-dots button');
  if (slides.length > 1) {
    let i = 0, t;
    const go = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('is-on', k === i));
      dots.forEach((d, k) => d.classList.toggle('is-on', k === i));
    };
    const arm = () => { clearInterval(t); t = setInterval(() => go(i + 1), 5000); };
    dots.forEach((d, k) => d.addEventListener('click', () => { go(k); arm(); }));
    arm();
  }
})();
