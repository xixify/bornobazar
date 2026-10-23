/* product detail page — acharkingbd-style feature set in বর্ণবাজার design */
'use strict';
renderChrome('shop');

(function () {
  const params = new URLSearchParams(location.search);
  const p = findP(params.get('id'));
  if (!p) { location.replace('shop.html'); return; }
  const c = BB.config;

  document.title = `${p.name} — ${c.siteName}`;
  $('meta[name="description"]').setAttribute('content',
    `${p.name} (${p.nameEn || ''}) — ${c.siteName} থেকে অনলাইনে অর্ডার করুন। সারা দেশে ক্যাশ অন ডেলিভারি।`);

  let vi = 0; // selected variant index
  let qty = 1;

  /* ---------- rating helpers ---------- */
  const avgR = BB.reviews.reduce((s, r) => s + r.r, 0) / BB.reviews.length;
  const starsHTML = n => {
    let h = '';
    for (let i = 1; i <= 5; i++) h += i <= Math.round(n) ? icon('star') : icon('star', 'off');
    return `<span class="stars" aria-label="${n.toFixed(1)} out of 5">${h}</span>`;
  };

  /* ---------- breadcrumbs ---------- */
  $('#crumbs').innerHTML = `<a href="index.html">হোম</a> › <a href="shop.html">শপ</a> › <a href="shop.html?cat=${p.cat}">${catName(p.cat)}</a> › <span>${esc(p.name)}</span>`;

  /* ---------- gallery: vertical thumbs (desktop) · swipe carousel + dots (mobile) ---------- */
  $('#pd-gallery').innerHTML = `
    <div class="pd-gal-sticky">
      <div class="main-img">
        <div class="pd-slides" id="pd-slides">${p.images.map((s, i) =>
          `<img class="pd-slide${i === 0 ? ' active' : ''}" src="${s}" alt="${esc(p.name)}" ${i > 0 ? 'loading="lazy"' : ''}>`).join('')}</div>
        <div class="pd-dots" id="pd-dots">${p.images.map((_, i) =>
          `<button class="${i === 0 ? 'is-on' : ''}" data-i="${i}" aria-label="ছবি ${i + 1}"></button>`).join('')}</div>
      </div>
      <div class="pd-thumbs">${p.images.map((s, i) =>
        `<button class="${i === 0 ? 'active' : ''}" data-i="${i}"><img src="${s}" alt="${esc(p.name)} ${i + 1}" loading="lazy"></button>`).join('')}</div>
    </div>`;
  const slidesEl = $('#pd-slides'), dotsEl = $('#pd-dots');
  const slideLeft = i => slidesEl.children[i].offsetLeft - slidesEl.children[0].offsetLeft;
  let scrollT;
  const markSlide = i => {
    $$('.pd-slide').forEach((s, k) => s.classList.toggle('active', k === i));
    dotsEl.querySelectorAll('button').forEach((d, k) => d.classList.toggle('is-on', k === i));
    $$('.pd-thumbs button').forEach((b, k) => b.classList.toggle('active', k === i));
  };
  $('#pd-gallery').addEventListener('click', e => {
    const b = e.target.closest('.pd-thumbs button');
    if (!b) return;
    markSlide(+b.dataset.i);
    slidesEl.scrollTo({ left: slideLeft(+b.dataset.i), behavior: 'smooth' });
  });
  dotsEl.addEventListener('click', e => {
    const d = e.target.closest('button'); if (!d) return;
    slidesEl.scrollTo({ left: slideLeft(+d.dataset.i), behavior: 'smooth' });
  });
  slidesEl.addEventListener('scroll', () => {
    clearTimeout(scrollT);
    scrollT = setTimeout(() =>
      markSlide(Math.round(slidesEl.scrollLeft / Math.max(1, slidesEl.clientWidth))), 80);
  }, { passive: true });

  /* ---------- info column (goosebumps-style buy box) ---------- */
  const info = $('#pd-info');
  const enName = (p.nameEn || '').split('|').pop().trim();
  const descLines = (p.desc || p.ingredients || '')
    .split('\n').map(s => s.trim()).filter(Boolean)
    .filter(s => !(s.includes(p.name) && s.length < 45)); // drop title-repeat lines
  const shortDesc = descLines[0] || '';
  const aboutText = descLines.slice(0, 3).join('\n');
  /* ---------- bundle & save (goosebumps-style purchase options) ---------- */
  const komboSave = x => Math.max(...x.variants.map(v => Math.round((1 - v.price / v.regular) * 100)));
  const bundle = p.cat !== 'kombo'
    ? (BB.products.filter(x => x.cat === 'kombo').sort((a, b) => komboSave(b) - komboSave(a))[0] || null)
    : null;
  const bundleSave = bundle ? komboSave(bundle) : 0;
  let buyMode = 'single';

  info.innerHTML = `
    <div class="pd-brandline">${icon('leaf')} ${c.siteName} — ${c.tagline}</div>
    <h1>${esc(p.name)}</h1>
    <div class="pd-tagline">${esc(enName)}${p.bsti ? ' · BSTI অনুমোদিত (BDS:CAC-260)' : ' · খাঁটি সরিষার তেলে তৈরি'}</div>
    <div class="rating-row">${starsHTML(avgR)} <a href="#reviews">${avgR.toFixed(1)} <span>(${BB.reviews.length}টি রিভিউ)</span></a></div>
    <div class="pd-price" id="pd-price"></div>
    ${shortDesc ? `<p class="pd-short">${esc(shortDesc)}</p>` : ''}
    <div class="stock-line">
      <span class="ok">${icon('check-circle')} স্টকে আছে</span>
      <span class="fast">${icon('truck')} দ্রুত ডেলিভারি — সারা বাংলাদেশে</span>
    </div>
    <div class="pd-perks">
      <div>${icon('check-circle')} ১০০% নির্ভেজাল</div>
      <div>${icon('oil')} সরিষার তেলে তৈরি</div>
      <div>${icon('leaf')} ঘরোয়া মশলা</div>
    </div>
    <div class="opt-label">ওজন / সাইজ বাছুন</div>
    <div class="weight-chips" id="wchips"></div>
    ${bundle ? `
    <div class="pd-bundle" id="pd-bundle">
      <label class="pb-opt">
        <input type="radio" name="pbuy" value="single" checked>
        <span class="pb-dot"></span>
        <span class="pb-body"><b>একক পণ্য</b><span>১টি জার — আপনার বাছাই করা ওজন</span></span>
        <span class="pb-price" id="pb-single"></span>
      </label>
      <label class="pb-opt best">
        <input type="radio" name="pbuy" value="bundle">
        <span class="pb-dot"></span>
        <span class="pb-body"><b>বান্ডলে সাশ্রয় করুন <em class="pb-tag">সবচেয়ে জনপ্রিয়</em></b><span>${esc(bundle.name)} (${bundle.variants[0].w}) — একাধিক স্বাদ এক প্যাকে</span></span>
        <span class="pb-price">${fmt(bundle.variants[0].price)}<small>${bundleSave > 0 ? `−${String(bundleSave).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d])}% সাশ্রয়` : ''}</small></span>
      </label>
    </div>` : ''}
    <div class="qty-row">
      <div>
        <div class="opt-label" style="margin-top:0">পরিমাণ</div>
        <div class="qty">
          <button id="q-minus" aria-label="কমান">${icon('minus')}</button>
          <input id="qty" value="1" inputmode="numeric" aria-label="পরিমাণ">
          <button id="q-plus" aria-label="বাড়ান">${icon('plus')}</button>
        </div>
      </div>
    </div>
    <div class="pd-cta-grid">
      <button class="btn" id="add-cart">${icon('cart')} কার্টে যোগ করুন</button>
      <button class="btn gold" id="buy-now">${icon('bolt')} এখনই অর্ডার করুন</button>
      <button class="btn wa" id="buy-wa">${icon('whatsapp')} হোয়াটসঅ্যাপে অর্ডার</button>
    </div>
    <div class="pd-infobox">
      <div>${icon('money')}<div><b>ক্যাশ অন ডেলিভারি</b><span>পণ্য হাতে পেয়ে টাকা দিবেন — অগ্রিম পেমেন্ট লাগবে না</span></div></div>
      <div>${icon('truck')}<div><b>সারা বাংলাদেশে ডেলিভারি</b><span>ঢাকায় ১-২ কর্মদিবস · ঢাকার বাইরে ২-৪ কর্মদিবস</span></div></div>
      <div>${icon('refresh')}<div><b>ঝামেলাহীন রিটার্ন</b><span>ভাঙা বা ভুল পণ্য পেলে ২৪ ঘণ্টায় জানান — বদলে দেওয়া হবে</span></div></div>
      <div>${icon('chat')}<div><b>দ্রুত কাস্টমার সাপোর্ট</b><span>হোয়াটসঅ্যাপ ও হটলাইনে প্রতিদিন সকাল ৯টা — রাত ৯টা</span></div></div>
    </div>
    <div class="sku-line">${icon('tag')} প্রোডাক্ট কোড: <b>${esc(p.sku || '—')}</b> · প্রস্তুতকারক: <b>${c.siteName}</b>, ${c.address}</div>`;

  /* ---------- sticky add-to-cart bar (shows once main CTA scrolls out) ---------- */
  const stickyBar = document.createElement('div');
  stickyBar.className = 'pd-sticky';
  stickyBar.innerHTML = `
    <img src="${p.images[0]}" alt="">
    <div class="ps-info"><b>${esc(p.name)}</b><span id="ps-variant"></span></div>
    <div class="ps-price" id="ps-price"></div>
    <button class="btn" id="ps-add">${icon('cart')} কার্টে যোগ করুন</button>`;
  document.body.appendChild(stickyBar);
  $('#ps-add').onclick = () => { const t = buyTarget(); Cart.add(t.prod.id, t.v.w, qty); };
  let ctaPassed = false, footerNear = false;
  const isMobile = () => window.matchMedia('(max-width: 680px)').matches;
  document.body.classList.add('pd-sticky-on'); // mobile: reserve space so nothing hides behind the bar
  const syncBar = () => stickyBar.classList.toggle('show', isMobile() || (ctaPassed && !footerNear));
  new IntersectionObserver(es => es.forEach(e => {
    ctaPassed = e.boundingClientRect.top < 0 && !e.isIntersecting;
    syncBar();
  }), { threshold: 0 }).observe($('.pd-cta-grid'));
  new IntersectionObserver(es => es.forEach(e => { footerNear = e.isIntersecting; syncBar(); }),
    { rootMargin: '-40px 0px 0px 0px' }).observe($('#site-footer'));
  window.addEventListener('resize', syncBar);
  syncBar();

  /* price painting — respects bundle/single purchase mode */
  const buyTarget = () => buyMode === 'bundle' && bundle
    ? { prod: bundle, v: bundle.variants[0] }
    : { prod: p, v: p.variants[vi] };
  const pbSel = () => $('#pd-bundle')?.querySelector('input[value="bundle"]');

  function chipHTML(v, i) {
    return `<button class="wchip${i === vi ? ' active' : ''}" data-i="${i}">
      <b>${esc(v.w)}</b><span>${fmt(v.price)}</span></button>`;
  }
  const priceEl = $('#pd-price'), chipsEl = $('#wchips'), qtyEl = $('#qty');

  function paintPrice() {
    const { v } = buyTarget();
    const save = v.regular > v.price ? v.regular - v.price : 0;
    priceEl.innerHTML =
      `<span class="price">${fmt(v.price * qty)}</span>` +
      (save ? `<s>${fmt(v.regular * qty)}</s><span class="save-chip">সাশ্রয় ${fmt(save * qty)}</span>` : '');
    chipsEl.innerHTML = p.variants.map(chipHTML).join('');
    // single-mode widgets dim while the bundle option is active
    chipsEl.classList.toggle('dim', buyMode === 'bundle');
    chipsEl.closest('.pd-info')?.querySelector('.qty-row')?.classList.toggle('dim', buyMode === 'bundle');
    const singleP = document.getElementById('pb-single');
    if (singleP) singleP.textContent = fmt(p.variants[vi].price * qty);
    const psP = document.getElementById('ps-price');
    const psV = document.getElementById('ps-variant');
    if (psP) psP.textContent = fmt(v.price * qty);
    if (psV) psV.textContent = `${v.w} · ${String(qty).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d])}টি`;
  }
  $('#pd-bundle')?.addEventListener('change', e => { buyMode = e.target.value; paintPrice(); });
  chipsEl.addEventListener('click', e => {
    const ch = e.target.closest('.wchip'); if (!ch || buyMode === 'bundle') return;
    vi = +ch.dataset.i; paintPrice();
  });

  qtyEl.addEventListener('change', () => { qty = clampQty(+qtyEl.value || 1); paintPrice(); });
  $('#q-minus').onclick = () => { qty = clampQty(qty - 1); qtyEl.value = qty; paintPrice(); };
  $('#q-plus').onclick = () => { qty = clampQty(qty + 1); qtyEl.value = qty; paintPrice(); };
  function clampQty(n) { return Math.max(1, Math.min(99, n)); }

  $('#add-cart').onclick = () => { const t = buyTarget(); Cart.add(t.prod.id, t.v.w, qty); };
  $('#buy-now').onclick = () => {
    const t = buyTarget(); Cart.add(t.prod.id, t.v.w, qty);
    location.href = 'checkout.html';
  };
  $('#buy-wa').onclick = () => {
    const t = buyTarget(); Cart.add(t.prod.id, t.v.w, qty);
    const txt = `আসসালামু আলাইকুম! ${c.siteName}-এ অর্ডার করতে চাই:\n\n${t.prod.name} (${t.v.w}) × ${qty} = ${fmt(t.v.price * qty)}\nপ্রোডাক্ট কোড: ${t.prod.sku}\n\nপেমেন্ট: ক্যাশ অন ডেলিভারি`;
    window.open(`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(txt)}`, '_blank');
  };

  paintPrice();

  /* ---------- collapsible detail sections (right column, after SKU line) ---------- */
  const specsRows = [
    ['সাইজ অপশন', p.variants.map(v => v.w).join(', ')],
    ['ক্যাটাগরি', catName(p.cat)],
    ['প্রোডাক্ট কোড (SKU)', p.sku || '—'],
    ['সংরক্ষণ', p.cat === 'shutki' ? 'ফ্রিজে সংরক্ষণ করুন' : 'তেল ও মশলায় সংরক্ষিত'],
    ['প্রস্তুতকারক', `${c.siteName} — ${c.address}`],
  ];
  if (p.bsti) specsRows.splice(3, 0, ['সার্টিফিকেশন', 'BSTI অনুমোদিত (BDS:CAC-260)']);

  const sec = (title, body, open = false) =>
    `<details class="pd-sec"${open ? ' open' : ''}><summary><span class="sec-t">${title}</span></summary><div class="sec-body">${body}</div></details>`;

  const sections = [
    sec(`${icon('truck')} ডেলিভারি ও রিটার্ন পলিসি`, `
      <div class="rules-list">
        <div class="rule"><span class="n">১</span><span>ডেলিভারির সময় পার্সেল খুলে জার ভাঙা বা ছিদ্র আছে কি না দেখে নিন।</span></div>
        <div class="rule"><span class="n">২</span><span>খাবার পণ্য হওয়ায় জারের সিল খোলার পর ফেরতযোগ্য নয়।</span></div>
        <div class="rule"><span class="n">৩</span><span>ভাঙা বা ভুল পণ্য পেলে ২৪ ঘণ্টার মধ্যে ছবি/ভিডিও সহ জানান — বিক্রেতার খরচে বদলে দেওয়া হবে।</span></div>
      </div>`),
  ];
  if (p.ingredients) sections.push(sec(`${icon('bowl')} উপকরণ`, `<p>${esc(p.ingredients)}</p>`));
  if (p.desc) sections.push(sec(`${icon('clipboard')} পরিচিতি`, `<p>${esc(p.desc)}</p>`, true));
  sections.push(sec(`${icon('settings')} স্পেসিফিকেশন`,
    `<table class="specs">${specsRows.map(r => `<tr><td>${r[0]}</td><td>${esc(r[1])}</td></tr>`).join('')}</table>`));
  if (p.storage.length) sections.push(sec(`${icon('lock')} সংরক্ষণ বিধি`,
    `<ul>${p.storage.map(s => `<li>${esc(s)}</li>`).join('')}</ul>`));
  sections.push(sec(`${icon('factory')} প্রস্তুতকারক, মোড়কজাত ও বাজারজাতকারী`,
    `<p>${c.siteName} (${c.siteNameEn})\n${c.address}\n\nকাস্টমার কেয়ার সাপোর্ট: ${c.phone}${p.bsti ? '\n' + c.bsti : ''}</p>`));

  /* ---------- below-the-fold sections ---------- */
  const storageFaq = p.cat === 'shutki'
    ? 'খোলার পর ফ্রিজে রাখুন এবং ৩ মাসের মধ্যে ব্যবহার করুন।'
    : 'শুকনো-পরিষ্কার চামচ ব্যবহার করুন, মাঝে মাঝে রোদে দিন এবং প্রয়োজনে ফ্রিজে রাখুন।';

  const FAQS = [
    ['অর্ডার কীভাবে করবো?', `ওয়েবসাইটে পছন্দের পণ্য কার্টে যোগ করে চেকআউট করুন — ক্যাশ অন ডেলিভারিতে পণ্য হাতে পেয়ে টাকা দিবেন। চাইলে সরাসরি কল করুন ${c.phone} নম্বরে অথবা হোয়াটসঅ্যাপে মেসেজ দিন।`],
    ['ডেলিভারি চার্জ কত?', `ঢাকার ভিতরে ${fmt(c.deliveryInside)}, ঢাকার বাইরে ${fmt(c.deliveryOutside)}। পণ্যের পাশের "ডেলিভারি চার্জ যাচাই করুন" অপশনে জেলা বাছলে চার্জ দেখাবে।`],
    ['কতদিনে ডেলিভারি পাবো?', 'সাধারণত ঢাকার ভিতরে ১-২ কর্মদিবস এবং ঢাকার বাইরে ২-৪ কর্মদিবস সময় লাগে।'],
    ['পণ্য কি নির্ভেজাল?', `সব পণ্য খাঁটি সরিষার তেল, চিনি, লবণ ও ঘরোয়া মশলায় প্রাকৃতিকভাবে সংরক্ষিত — উপকরণ তালিকায় কোনো কৃত্রিম প্রিজারভেটিভ নেই।${p.bsti ? ` ${c.siteName} BSTI অনুমোদিত (${c.bsti})।` : ''}`],
    ['জার খোলার পর কতদিন ভালো থাকে?', storageFaq],
    ['ভাঙা বা ভুল পণ্য পেলে কী করবো?', 'ডেলিভারির সময় পার্সেল খুলে দেখে নিন। ভাঙা বা ভুল পণ্য পেলে ২৪ ঘণ্টার মধ্যে ছবি/ভিডিও সহ জানালে বিক্রেতার খরচে বদলে দেওয়া হবে।'],
  ];

  $('#pd-desc').innerHTML = `
    <div class="about-grid pd-about">
      <div class="imgbox"><img src="${p.images[1] || p.images[0]}" alt="${esc(p.name)} — বিস্তারিত" loading="lazy"></div>
      <div>
        <h2 style="margin:.3rem 0 .8rem">এই পণ্যটি সম্পর্কে</h2>
        <p style="color:var(--ink-soft);white-space:pre-line">${esc(aboutText)}</p>
        <ul class="about-checks">
          <li>${icon('check-circle')} খাঁটি সরিষার তেল ও ঘরোয়া মশলায় তৈরি</li>
          <li>${icon('check-circle')} কোনো কৃত্রিম রং, ফ্লেভার বা প্রিজারভেটিভ নয়</li>
          ${p.bsti ? `<li>${icon('check-circle')} BSTI অনুমোদিত মানে তৈরি (BDS:CAC-260)</li>` : ''}
          <li>${icon('check-circle')} ${p.variants.map(v => v.w).join(' · ')} — ওজন অপশন</li>
          <li>${icon('check-circle')} সারা দেশে ক্যাশ অন ডেলিভারি</li>
        </ul>
      </div>
    </div>
    <h2 style="margin-top:2.4rem">বিস্তারিত</h2>
    <div id="pd-sections"></div>
    <h2 style="margin-top:2.2rem">সচরাচর জিজ্ঞাসা</h2>
    ${FAQS.map(f => `<details class="faq"><summary>${f[0]}</summary><div class="fa-body">${f[1]}</div></details>`).join('')}
    <h2 id="reviews" style="margin-top:2.5rem">গ্রাহকদের মতামত</h2>
    <div class="white-card reviews-wrap">
      <div class="rev-avg">
        <div class="big">${avgR.toFixed(1)}</div>
        ${starsHTML(avgR)}
        <div class="cnt">${BB.reviews.length}টি ভেরিফায়েড রিভিউ</div>
        <div class="rev-bars">
          ${[5, 4, 3, 2, 1].map(st => {
            const n = BB.reviews.filter(r => r.r === st).length;
            const pct = Math.round(n / BB.reviews.length * 100);
            const bn = String(st).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
            return `<div class="rb-row"><span class="rb-l">${bn} তারা</span><div class="rb-track"><div class="rb-fill" style="width:${pct}%"></div></div><span class="rb-pct">${pct}%</span></div>`;
          }).join('')}
        </div>
        <div class="cnt" style="margin-top:.6rem">ডেলিভারি সম্পন্ন হলে গ্রাহকদের কাছ থেকে রিভিউ নেওয়া হয়</div>
      </div>
      <div class="rev-grid">
        ${BB.reviews.map(r => `
        <div class="rev-card">
          <div class="rev-top">
            <span class="rev-name">${esc(r.n.split(' ')[0])} ${esc(r.n.split(' ').slice(1).map(w => w[0] + '***').join(' '))}</span>
            <span class="rev-date">${esc(r.d)}</span>
          </div>
          <div class="rev-verified">${icon('check')} ভেরিফায়েড ক্রেতা</div>
          ${starsHTML(r.r)}
          <p class="rev-txt" style="margin-top:.35rem">${esc(r.t)}</p>
        </div>`).join('')}
      </div>
    </div>`;

  // বিস্তারিত accordions live inside #pd-desc now — fill after it exists
  $('#pd-sections').innerHTML = sections.join('');

  /* related */
  const rel = BB.products.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  if (rel.length) {
    $('#rel-wrap').innerHTML = `<h2 style="text-align:center;margin:1rem 0 .8rem">একসাথে অনেকেই নেন</h2><div class="grid">${rel.map(cardHTML).join('')}</div>`;
  }

  /* Instagram reel video wall — sits between reviews and related products */
  $('#rel-wrap').insertAdjacentHTML('beforebegin', videoStripHTML(false));
})();
