/* cart page */
'use strict';
renderChrome('cart');

(function () {
  const c = BB.config;
  let zone = localStorage.getItem('bb_zone') || 'inside';

  /* Alpino-style "rock bottom" CRO bar — appears near page bottom when cart has items */
  const rb = document.createElement('div');
  rb.className = 'rock-bottom';
  rb.innerHTML = `${icon('party')}
    <div class="rb-txt"><b>একদম নিচে চলে এসেছেন!</b><span>অর্ডারটা সম্পূর্ণ করে ফেলুন — ক্যাশ অন ডেলিভারিতে পণ্য হাতে পাবেন</span></div>
    <a class="btn gold" href="checkout.html">${icon('arrow-right')} চেকআউট করুন</a>`;
  document.body.appendChild(rb);
  const syncRock = () => {
    const nearEnd = window.innerHeight + window.scrollY > document.body.scrollHeight - 260;
    rb.classList.toggle('show', Cart.count() > 0 && nearEnd);
  };
  window.addEventListener('scroll', syncRock, { passive: true });

  function render() {
    const lines = Cart.lines();
    const wrap = $('#cart-root');
    if (!lines.length) {
      wrap.innerHTML = `<div class="empty"><div class="big">${icon('cart')}</div><b>আপনার কার্ট খালি</b><br><br><a class="btn" href="shop.html">শপিং শুরু করুন</a></div>`;
      return;
    }
    const subtotal = Cart.total();
    const delivery = zone === 'inside' ? c.deliveryInside : c.deliveryOutside;
    wrap.innerHTML = `
    <div class="co-grid">
      <div class="white-card">
        <h2 style="margin-bottom:.4rem">আপনার কার্ট (${Cart.count()} আইটেম)</h2>
        ${lines.map(l => `
        <div class="cart-row">
          <a href="product.html?id=${l.p.id}"><img src="${l.p.images[0]}" alt="${esc(l.p.name)}"></a>
          <div>
            <div class="nm"><a href="product.html?id=${l.p.id}">${esc(l.p.name)}</a></div>
            <div class="vt">${esc(l.w)} · ${fmt(l.v.price)} প্রতি ইউনিট</div>
            <div class="qty mini">
              <button data-a="minus" data-pid="${l.pid}" data-w="${esc(l.w)}" aria-label="কমান">${icon('minus')}</button>
              <input value="${l.qty}" readonly>
              <button data-a="plus" data-pid="${l.pid}" data-w="${esc(l.w)}" aria-label="বাড়ান">${icon('plus')}</button>
            </div>
          </div>
          <div>
            <div class="row-price">${fmt(l.line)}</div>
            <button class="rm" data-a="rm" data-pid="${l.pid}" data-w="${esc(l.w)}">${icon('close')} মুছুন</button>
          </div>
        </div>`).join('')}
        <div style="display:flex;justify-content:space-between;margin-top:1rem;gap:1rem;flex-wrap:wrap">
          <a class="btn ghost sm" href="shop.html">${icon('arrow-left')} আরও কিনুন</a>
          <button class="btn ghost sm" id="clear-cart">কার্ট খালি করুন</button>
        </div>
      </div>
      <div class="white-card">
        <h2 style="margin-bottom:.6rem">অর্ডার সারাংশ</h2>
        <div class="sum-line"><span>সাব-টোটাল</span><b>${fmt(subtotal)}</b></div>
        <div class="opt-label" style="margin:.6rem 0 .3rem">ডেলিভারি এলাকা</div>
        <div class="deliver-opt">
          <label><input type="radio" name="zone" value="inside" ${zone === 'inside' ? 'checked' : ''}>
            <span><b>ঢাকার ভিতরে</b><span>ডেলিভারি ফি ${fmt(c.deliveryInside)}</span></span></label>
          <label><input type="radio" name="zone" value="outside" ${zone === 'outside' ? 'checked' : ''}>
            <span><b>ঢাকার বাইরে</b><span>ডেলিভারি ফি ${fmt(c.deliveryOutside)}</span></span></label>
        </div>
        <div class="sum-line"><span>ডেলিভারি চার্জ</span><b>${fmt(delivery)}</b></div>
        <div class="sum-line total"><span>সর্বমোট</span><span>${fmt(subtotal + delivery)}</span></div>
        <a class="btn" href="checkout.html" style="width:100%;margin-top:1rem">চেকআউট করুন ${icon('arrow-right')}</a>
        <p style="font-size:1rem;color:var(--ink-soft);margin-top:.8rem;text-align:center">পেমেন্ট: ক্যাশ অন ডেলিভারি (COD)</p>
      </div>
    </div>`;
    syncRock();
  }

  $('#cart-root').addEventListener('click', e => {
    const b = e.target.closest('[data-a]'); if (!b) return;
    const { a, pid, w } = b.dataset;
    if (a === 'rm') Cart.remove(pid, w);
    if (a === 'plus') Cart.setQty(pid, w, +b.closest('.qty').querySelector('input').value + 1);
    if (a === 'minus') Cart.setQty(pid, w, +b.closest('.qty').querySelector('input').value - 1);
    render();
  });
  $('#cart-root').addEventListener('change', e => {
    if (e.target.name === 'zone') {
      zone = e.target.value;
      localStorage.setItem('bb_zone', zone);
      render();
    }
  });
  $('#cart-root').addEventListener('click', e => {
    if (e.target.closest('#clear-cart')) { Cart.clear(); render(); }
  });
  document.addEventListener('bb:cart', render);

  render();
  syncRock();
})();
