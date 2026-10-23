/* বর্ণবাজার — shared app logic (cart, header/footer, helpers) */
'use strict';

/* ---------- helpers ---------- */
const fmt = n => Number(n).toLocaleString('en-IN') + '৳';
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const findP = id => BB.products.find(p => p.id === Number(id));
const catName = id => (BB.categories.find(c => c.id === id) || {}).name || '';

/* ---------- cart (localStorage) ---------- */
const Cart = {
  KEY: 'bb_cart',
  all() { try { return JSON.parse(localStorage.getItem(this.KEY)) || []; } catch { return []; } },
  save(items) { localStorage.setItem(this.KEY, JSON.stringify(items)); this.emit(); },
  add(pid, w, qty = 1) {
    const p = findP(pid);
    if (!p) return;
    const v = p.variants.find(x => x.w === w) || p.variants[0];
    const items = this.all();
    const ex = items.find(i => i.pid === p.id && i.w === v.w);
    if (ex) ex.qty += qty; else items.push({ pid: p.id, w: v.w, qty });
    this.save(items);
    toast(icon('check') + ' ' + esc(p.name) + ' (' + esc(v.w) + ') কার্টে যোগ হয়েছে');

    // Also sync to existing Bornobazar app cart if present
    if (window.Bornobazar && Array.isArray(window.Bornobazar.cart)) {
      try {
        const prod = window.Bornobazar.findProduct ? window.Bornobazar.findProduct(p.id) : null;
        if (prod) {
          const selectedWeight = v.w;
          const price = (prod.weight_pricing && prod.weight_pricing[selectedWeight])
                        ? prod.weight_pricing[selectedWeight]
                        : v.price;
          const existingIndex = window.Bornobazar.cart.findIndex(item => item.id === prod.id && item.weight === selectedWeight);
          if (existingIndex > -1) {
            window.Bornobazar.cart[existingIndex].qty += qty;
          } else {
            window.Bornobazar.cart.push({
              id: prod.id,
              name_bn: prod.name_bn || p.name,
              name_en: prod.name_en || p.nameEn,
              image: prod.primary_image || p.images[0],
              weight: selectedWeight,
              price: price,
              qty: qty
            });
          }
          if (typeof window.Bornobazar.saveCart === 'function') {
            window.Bornobazar.saveCart();
          }
        }
      } catch (err) {
        console.warn('Sync cart error:', err);
      }
    }
  },
  setQty(pid, w, qty) {
    let items = this.all();
    const it = items.find(i => i.pid === Number(pid) && i.w === w);
    if (!it) return;
    it.qty = Math.max(1, Math.min(99, qty));
    this.save(items);
  },
  remove(pid, w) { this.save(this.all().filter(i => !(i.pid === Number(pid) && i.w === w))); },
  clear() { this.save([]); },
  count() { return this.all().reduce((s, i) => s + i.qty, 0); },
  total() {
    return this.all().reduce((s, i) => {
      const p = findP(i.pid); if (!p) return s;
      const v = p.variants.find(x => x.w === i.w) || p.variants[0];
      return s + v.price * i.qty;
    }, 0);
  },
  lines() {
    return this.all().map(i => {
      const p = findP(i.pid); if (!p) return null;
      const v = p.variants.find(x => x.w === i.w) || p.variants[0];
      return { ...i, p, v, line: v.price * i.qty };
    }).filter(Boolean);
  },
  emit() { document.dispatchEvent(new CustomEvent('bb:cart')); },
};
document.addEventListener('bb:cart', updateCartBadge);

function updateCartBadge() {
  const count = Cart.count();
  $$('.cart-count').forEach(b => b.textContent = count);
  $$('.bb-cart-badge').forEach(b => b.textContent = count);
}

/* ---------- toast ---------- */
let _toastT;
function toast(msg) {
  let t = $('#toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = msg;
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(_toastT);
  _toastT = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- WhatsApp order text ---------- */
function waOrderLink(order) {
  const c = BB.config;
  const lines = [];
  lines.push(`আসসালামু আলাইকুম! ${c.siteName}-এ আমার অর্ডার:`);
  lines.push('');
  order.items.forEach((it, i) => {
    lines.push(`${i + 1}. ${it.name} (${it.w}) × ${it.qty} = ${fmt(it.line)}`);
  });
  lines.push('');
  lines.push(`সাব-টোটাল: ${fmt(order.subtotal)}`);
  lines.push(`ডেলিভারি (${order.zone}): ${fmt(order.delivery)}`);
  lines.push(`মোট: ${fmt(order.total)}`);
  lines.push('');
  lines.push(`নাম: ${order.name}`);
  lines.push(`মোবাইল: ${order.phone}`);
  lines.push(`ঠিকানা: ${order.address}`);
  if (order.note) lines.push(`নোট: ${order.note}`);
  lines.push('');
  lines.push(`অর্ডার আইডি: ${order.oid}`);
  return `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/* ---------- product card (minimal: image + title + price + quick-buy) ---------- */
function cardHTML(p) {
  const v0 = p.variants[0];
  const range = p.minPrice === p.maxPrice ? fmt(p.minPrice) : `${fmt(p.minPrice)} – ${fmt(p.maxPrice)}`;
  const maxSave = Math.max(...p.variants.map(v => Math.round((1 - v.price / v.regular) * 100)));
  const isCombo = p.cat === 'kombo';
  return `
  <article class="card" data-cat="${p.cat}">
    <div class="card-media">
      <div class="card-badges">
        ${isCombo ? `<span class="badge combo">${icon('gift')} কম্বো সেট</span>` : ''}
        ${p.onSale && maxSave > 0 ? `<span class="badge sale">অফার −${maxSave}%</span>` : ''}
      </div>
      <a href="product.html?id=${p.id}" aria-label="${esc(p.name)}">
        <img class="im-a" src="${p.images[0]}" alt="${esc(p.name)}" loading="lazy">
        ${p.images[1] ? `<img class="im-b" src="${p.images[1]}" alt="" loading="lazy">` : ''}
      </a>
      <button class="card-qb" data-qb="${p.id}" aria-label="দ্রুত অর্ডার — ${esc(p.name)}" title="দ্রুত অর্ডার">${icon('plus')}</button>
    </div>
    <div class="card-body">
      <h3 class="card-title"><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
      <div class="card-price">
        <span class="price">${range}</span>
      </div>
    </div>
  </article>`;
}

/* ---------- quick-buy sheet — pick variant/bundle instantly, no page jump ---------- */
let qbState = { p: null, vi: 0, qty: 1 };
function mountQuickBuy() {
  if ($('#qb-sheet')) return;
  const el = document.createElement('div');
  el.id = 'qb-sheet';
  el.innerHTML = `
    <div class="qb-backdrop" data-qb-close></div>
    <div class="qb-panel" role="dialog" aria-modal="true" aria-label="দ্রুত অর্ডার">
      <button class="qb-x" data-qb-close aria-label="বন্ধ করুন">${icon('close')}</button>
      <div class="qb-prod">
        <img id="qb-img" alt="">
        <div><b id="qb-name"></b><span id="qb-cat"></span></div>
      </div>
      <div class="opt-label" style="margin:.9rem 0 .5rem">ওজন / সাইজ বাছুন</div>
      <div class="weight-chips" id="qb-chips"></div>
      <div class="qb-row">
        <div class="qty">
          <button id="qb-minus" aria-label="কমান">${icon('minus')}</button>
          <input id="qb-qty" value="1" readonly aria-label="পরিমাণ">
          <button id="qb-plus" aria-label="বাড়ান">${icon('plus')}</button>
        </div>
        <div class="qb-total" id="qb-total"></div>
      </div>
      <div class="qb-cta">
        <button class="btn" id="qb-add">${icon('cart')} কার্টে যোগ করুন</button>
        <button class="btn gold" id="qb-buy">${icon('bolt')} এখনই অর্ডার</button>
      </div>
      <div class="qb-note">${icon('truck')} ক্যাশ অন ডেলিভারি · সারা দেশে ডেলিভারি · অগ্রিম পেমেন্ট নেই</div>
    </div>`;
  document.body.appendChild(el);
  el.addEventListener('click', e => {
    if (e.target.closest('[data-qb-close]')) { closeQuickBuy(); return; }
    const chip = e.target.closest('#qb-chips .wchip');
    if (chip) { qbState.vi = +chip.dataset.vi; paintQuickBuy(); return; }
    if (e.target.closest('#qb-minus')) { qbState.qty = Math.max(1, qbState.qty - 1); paintQuickBuy(); return; }
    if (e.target.closest('#qb-plus')) { qbState.qty = Math.min(99, qbState.qty + 1); paintQuickBuy(); return; }
    if (e.target.closest('#qb-add')) {
      Cart.add(qbState.p.id, qbState.p.variants[qbState.vi].w, qbState.qty);
      closeQuickBuy(); return;
    }
    if (e.target.closest('#qb-buy')) {
      Cart.add(qbState.p.id, qbState.p.variants[qbState.vi].w, qbState.qty);
      location.href = 'checkout.html';
    }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeQuickBuy(); });
}
function paintQuickBuy() {
  const { p, vi, qty } = qbState;
  const v = p.variants[vi];
  $('#qb-img').src = p.images[0];
  $('#qb-name').textContent = p.name;
  $('#qb-cat').textContent = catName(p.cat);
  $('#qb-chips').innerHTML = p.variants.map((x, i) =>
    `<button class="wchip${i === vi ? ' active' : ''}" data-vi="${i}"><b>${esc(x.w)}</b><span>${fmt(x.price)}</span></button>`).join('');
  $('#qb-qty').value = qty;
  $('#qb-total').textContent = fmt(v.price * qty);
}
function openQuickBuy(pid) {
  const p = findP(pid);
  if (!p) return;
  mountQuickBuy();
  qbState = { p, vi: 0, qty: 1 };
  paintQuickBuy();
  document.body.classList.add('qb-open');
}
function closeQuickBuy() { document.body.classList.remove('qb-open'); }

/* quick-buy triggers (cards, combo strip, anywhere with data-qb) */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-qb]');
  if (!b) return;
  e.preventDefault();
  openQuickBuy(b.dataset.qb);
});

/* ---------- Brand video reel wall (self-hosted, Alpino/Goosebumps-style) ---------- */
const BB_VIDEOS = [1, 2, 3, 4, 5, 6, 7, 8].map(n => ({ mp4: `assets/videos/reel-${n}.mp4`, jpg: `assets/videos/reel-${n}.jpg` }));
function initReelVideos() {
  const vids = $$('.reel video');
  if (!vids.length) return;
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) e.target.play().catch(() => {});
    else e.target.pause();
  }), { threshold: .55 });
  vids.forEach(v => {
    io.observe(v);
    v.addEventListener('click', () => {
      v.muted = !v.muted;
      v.closest('.reel').classList.toggle('sounding', !v.muted);
      if (!v.muted) v.play().catch(() => {});
    });
  });
}
/* wrap=true → own .container (body-level placement) · wrap=false → placed inside an existing container */
function videoStripHTML(wrap = true) {
  const body = `
      <div class="section-head">
        <h2>স্বাদের মুহূর্তগুলো দেখুন</h2>
        <p>আমাদের রান্নাঘর থেকে সোজা আপনার স্ক্রিনে — ভিডিওতে বর্ণবাজার</p>
      </div>
      <div class="reel-row">
        ${BB_VIDEOS.map(v => `
        <div class="reel">
          <video src="${v.mp4}" poster="${v.jpg}" muted loop playsinline preload="none"></video>
          <span class="reel-snd">${icon('volume-off')}<i>${icon('volume')}</i></span>
        </div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:.9rem">
        <a class="btn ghost" href="https://www.instagram.com/bornobazar/" target="_blank" rel="noopener">
          ${icon('instagram')} ইনস্টাগ্রামে আরও দেখুন
        </a>
      </div>`;
  setTimeout(initReelVideos, 60); // caller sets innerHTML synchronously before this fires
  return wrap
    ? `<section class="section reels-sec feat-strip"><div class="container">${body}</div></section>`
    : `<section class="section reels-sec" style="padding-top:1rem">${body}</section>`;
}

/* ---------- header & footer ---------- */
function renderChrome(active) {
  const c = BB.config;
  const siteHdr = $('#site-header');
  if (siteHdr) {
    siteHdr.innerHTML = `
  <div class="topstrip">
    <div class="container">
      <div><i class="ic" data-ic="truck"></i> সারা দেশে ক্যাশ অন ডেলিভারি<span class="dot">|</span><i class="ic" data-ic="bowl"></i> সরিষার তেল ও ঘরোয়া মশলায় তৈরি</div>
      <div><i class="ic" data-ic="phone"></i> হটলাইন: <a href="tel:${c.phone}">${c.phone}</a></div>
    </div>
  </div>
  <header class="hdr">
    <div class="container hdr-main">
      <button class="icon-btn menu-btn" id="menu-btn" aria-label="মেনু খুলুন">
        ${icon('menu')}
      </button>
      <a class="brand" href="index.html">
        <img src="assets/img/logo-circle.png" alt="${c.siteName} লোগো">
        <span><span class="brand-name">${c.siteName}</span><br><span class="brand-tag">${c.tagline}</span></span>
      </a>
      <div class="hdr-search">
        ${icon('search')}
        <input type="search" id="hdr-search" placeholder="আচার, ভর্তা, কম্বো খুঁজুন…" autocomplete="off">
      </div>
      <div class="hdr-actions">
        <a class="icon-btn" href="https://wa.me/${c.whatsapp}" target="_blank" rel="noopener" title="হোয়াটসঅ্যাপে অর্ডার">
          ${icon('whatsapp')}
        </a>
        <a class="icon-btn" href="cart.html" title="কার্ট">
          ${icon('cart')}
          <span class="cart-count">0</span>
        </a>
      </div>
      </div>
    </div>
  </header>
  <div class="drawer-backdrop" id="drawer-bg"></div>
  <aside class="drawer" id="drawer" aria-label="মোবাইল মেনু">
    <div class="drawer-head">
      <a class="brand" href="index.html">
        <img src="assets/img/logo-circle.png" alt="">
        <span><span class="brand-name">${c.siteName}</span></span>
      </a>
      <button class="icon-btn" id="drawer-close" aria-label="মেনু বন্ধ করুন">
        ${icon('close')}
      </button>
    </div>
    <div class="drawer-search">
      ${icon('search')}
      <input type="search" id="drawer-search" placeholder="পণ্য খুঁজুন…" autocomplete="off">
    </div>
    <nav class="drawer-links">
      <a href="index.html" data-nav="home">হোম</a>
      <a href="shop.html" data-nav="shop">সব পণ্য</a>
      ${BB.categories.map(ct => `<a href="shop.html?cat=${ct.id}" data-nav="cat-${ct.id}">${ct.name}</a>`).join('')}
      <div class="sep"></div>
      <a href="cart.html" data-nav="cart">কার্ট</a>
      <a href="about.html">আমাদের সম্পর্কে</a>
      <a href="contact.html">যোগাযোগ</a>
    </nav>
    <div class="drawer-foot">
      <a class="btn" href="tel:${c.phone}">${icon('phone')} ${c.phone}</a>
      <a class="btn wa" href="https://wa.me/${c.whatsapp}" target="_blank" rel="noopener">হোয়াটসঅ্যাপে অর্ডার</a>
    </div>
  </aside>`;
  }

  /* nav bar — body-level so it can stick on its own (desktop only) */
  const siteNav = $('#site-nav');
  if (siteNav) {
    siteNav.innerHTML = `
  <nav class="nav">
    <div class="container">
      <a href="index.html" data-nav="home">হোম</a>
      <a href="shop.html" data-nav="shop">সব পণ্য</a>
      ${BB.categories.map(ct => `<a href="shop.html?cat=${ct.id}" data-nav="cat-${ct.id}">${ct.name}</a>`).join('')}
      <a href="about.html" data-nav="about">আমাদের সম্পর্কে</a>
      <a href="contact.html" data-nav="contact">যোগাযোগ</a>
      <a href="cart.html" data-nav="cart">কার্ট</a>
    </div>
  </nav>`;
  }

  const siteFtr = $('#site-footer');
  if (siteFtr) {
    siteFtr.innerHTML = `
  <footer class="footer">
    <div class="container footer-main">
      <div class="f-brandcol">
        <div class="fbrand">
          <img src="assets/img/logo-circle.png" alt="">
          <span><b>${c.siteName}</b><span>${c.tagline}</span></span>
        </div>
        <p>সরিষার তেল ও ঘরোয়া মশলায় তৈরি নির্ভেজাল আচার, শুটকি ভর্তা, মিষ্টি ও পিনাট বাটার — বাড়ির স্বাদ, বাজারের সুবিধায়।</p>
        <div class="social">
          <a href="${c.facebook}" target="_blank" rel="noopener" title="ফেসবুক পেজ">${icon('facebook')}</a>
          <a href="https://www.instagram.com/bornobazar/" target="_blank" rel="noopener" title="ইনস্টাগ্রাম">${icon('instagram')}</a>
          <a href="https://wa.me/${c.whatsapp}" target="_blank" rel="noopener" title="হোয়াটসঅ্যাপ">${icon('whatsapp')}</a>
        </div>
        <div class="f-news">
          <h4>${icon('mail')} অফারের খবর সবার আগে পান</h4>
          <div class="fn-row">
            <input type="email" id="fn-email" placeholder="আপনার ইমেইল লিখুন" autocomplete="email">
            <button class="btn gold" id="fn-sub">${icon('send')} যুক্ত হোন</button>
          </div>
          <small>নতুন পণ্য ও কম্বো অফারের আপডেট — স্প্যাম নয়, শুধু স্বাদের খবর!</small>
        </div>
      </div>
      <div>
        <h4>ক্যাটাগরি</h4>
        <ul>${BB.categories.map(ct => `<li><a href="shop.html?cat=${ct.id}">${ct.name}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>দরকারি লিঙ্ক</h4>
        <ul>
          <li><a href="shop.html">সব পণ্য</a></li>
          <li><a href="cart.html">কার্ট ও চেকআউট</a></li>
          <li><a href="about.html">আমাদের সম্পর্কে</a></li>
          <li><a href="contact.html">যোগাযোগ</a></li>
        </ul>
      </div>
      <div>
        <h4>যোগাযোগ</h4>
        <ul>
          <li><i class="ic" data-ic="location"></i> ${c.address}</li>
          <li><i class="ic" data-ic="phone"></i> <a class="gold" href="tel:${c.phone}">${c.phone}</a></li>
          <li><i class="ic" data-ic="mobile"></i> <a class="gold" href="tel:${c.phone2.replace(/[^+\d]/g, '')}">${c.phone2}</a></li>
          <li><i class="ic" data-ic="globe"></i> <a class="gold" href="${c.website}" target="_blank" rel="noopener">bornobazar.com</a></li>
          <li><i class="ic" data-ic="clock"></i> প্রতিদিন সকাল ৯টা — রাত ৯টা</li>
        </ul>
      </div>
    </div>

    <div class="footer-ing">
      <div class="container fi-head">
        <b>খাঁটি উপকরণে, দাদি-নানিদের পদ্ধতিতে</b>
        <span>প্রতিটি জারে সরিষার তেল, টাটকা মশলা আর নিখাদ ভালোবাসা</span>
      </div>
      <div class="container fi-strip">
        <figure><img src="assets/img/ing-mustard.jpg" alt="কাঁচাপাতায় ঘরোয়া আচার" loading="lazy"><figcaption>পাতায় মোড়া স্বাদ</figcaption></figure>
        <figure><img src="assets/img/ing-chili.jpg" alt="শুকনো মরিচ" loading="lazy"><figcaption>শুকনো মরিচ</figcaption></figure>
        <figure><img src="assets/img/ing-garlic.jpg" alt="রসুন" loading="lazy"><figcaption>রসুন</figcaption></figure>
        <figure><img src="assets/img/ing-spice.jpg" alt="ঘরোয়া মশলা" loading="lazy"><figcaption>ঘরোয়া মশলা</figcaption></figure>
        <figure><img src="assets/img/ing-bowl.jpg" alt="সরিষার তেলে তৈরি আচার" loading="lazy"><figcaption>সরিষার তেলে তৈরি</figcaption></figure>
        <figure><img src="assets/img/ing-jar.jpg" alt="জারে ভরা আচার" loading="lazy"><figcaption>জারে ভরা স্বাদ</figcaption></figure>
      </div>
    </div>

    <div class="footer-trust">
      <div class="container ft-row">
        <div>${icon('money')} ক্যাশ অন ডেলিভারি</div>
        <div>${icon('truck')} সারা বাংলাদেশে ডেলিভারি</div>
        <div>${icon('award')} ${c.bsti}</div>
        <div>${icon('chat')} দ্রুত কাস্টমার সাপোর্ট</div>
      </div>
    </div>

    <div class="footer-bottom container">
      <div>© ${new Date().getFullYear()} ${c.siteName} (${c.siteNameEn}) — সর্বস্বত্ব সংরক্ষিত</div>
      <div>${c.tagline}</div>
    </div>
  </footer>`;
  }

  // newsletter → WhatsApp handoff
  const fnBtn = $('#fn-sub');
  if (fnBtn) fnBtn.addEventListener('click', () => {
    const inp = $('#fn-email');
    const v = (inp.value || '').trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { inp.focus(); inp.style.borderColor = 'var(--red)'; return; }
    inp.style.borderColor = '';
    const txt = `আসসালামু আলাইকুম! ${c.siteName}-এর অফার ও আপডেট পেতে যুক্ত হতে চাই। ইমেইল: ${v}`;
    window.open(`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(txt)}`, '_blank');
    toast(icon('check') + ' ধন্যবাদ! হোয়াটসঅ্যাপে সংযুক্ত হচ্ছে…');
  });

  // active nav
  $$('[data-nav]').forEach(a => {
    if (a.dataset.nav === active) a.classList.add('active');
  });

  // header search -> shop
  const hs = $('#hdr-search');
  if (hs) hs.addEventListener('keydown', e => {
    if (e.key === 'Enter' && hs.value.trim()) location.href = `shop.html?q=${encodeURIComponent(hs.value.trim())}`;
  });

  // mobile drawer
  const drawer = $('#drawer');
  const menuBtn = $('#menu-btn');
  const drawerClose = $('#drawer-close');
  const drawerBg = $('#drawer-bg');
  if (drawer && menuBtn) {
    const openDrawer = () => { document.body.classList.add('drawer-open'); document.body.style.overflow = 'hidden'; };
    const closeDrawer = () => { document.body.classList.remove('drawer-open'); document.body.style.overflow = ''; };
    menuBtn.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerBg) drawerBg.addEventListener('click', closeDrawer);
    drawer.addEventListener('click', e => { if (e.target.closest('a')) closeDrawer(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
    const ds = $('#drawer-search');
    if (ds) {
      ds.addEventListener('keydown', e => {
        if (e.key === 'Enter' && ds.value.trim()) location.href = `shop.html?q=${encodeURIComponent(ds.value.trim())}`;
      });
    }
  }

  // swap any data-ic placeholders rendered above (topstrip, footer …)
  renderIcons(document);

  updateCartBadge();
}
