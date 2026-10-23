/* checkout page — form + COD order + WhatsApp handoff */
'use strict';
renderChrome('cart');

(function () {
  const c = BB.config;
  let zone = localStorage.getItem('bb_zone') || 'inside';

  function render() {
    const lines = Cart.lines();
    const wrap = $('#co-root');
    // keep typed form values across re-renders (e.g. zone change)
    const prev = {};
    ['f-name', 'f-phone', 'f-addr', 'f-note'].forEach(id => {
      const el = document.getElementById(id);
      if (el) prev[id] = el.value;
    });
    if (!lines.length) {
      wrap.innerHTML = `<div class="empty"><div class="big">${icon('basket')}</div><b>চেকআউট করতে কার্টে পণ্য যোগ করুন</b><br><br><a class="btn" href="shop.html">শপিং শুরু করুন</a></div>`;
      return;
    }
    const subtotal = Cart.total();
    const delivery = zone === 'inside' ? c.deliveryInside : c.deliveryOutside;
    wrap.innerHTML = `
    <div class="co-grid">
      <form class="white-card" id="co-form" novalidate>
        <h2 style="margin-bottom:1rem">ডেলিভারি তথ্য</h2>
        <div class="f-grid">
          <div class="field"><label for="f-name">আপনার নাম *</label>
            <input id="f-name" name="name" autocomplete="name" placeholder="পুরো নাম লিখুন">
            <div class="err">নাম লিখুন</div></div>
          <div class="field"><label for="f-phone">মোবাইল নম্বর *</label>
            <input id="f-phone" name="phone" inputmode="tel" autocomplete="tel" placeholder="01XXXXXXXXX">
            <div class="err">সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন</div></div>
          <div class="field full"><label for="f-addr">সম্পূর্ণ ঠিকানা *</label>
            <textarea id="f-addr" name="address" rows="3" placeholder="বাসা/হোল্ডিং, রোড, এলাকা, থানা, জেলা"></textarea>
            <div class="err">ঠিকানা লিখুন</div></div>
          <div class="field full"><label for="f-note">অর্ডার নোট (ঐচ্ছিক)</label>
            <textarea id="f-note" name="note" rows="2" placeholder="ডেলিভারি নিয়ে বিশেষ কোনো নির্দেশনা থাকলে লিখুন"></textarea></div>
        </div>
        <div class="opt-label">ডেলিভারি এলাকা</div>
        <div class="deliver-opt">
          <label><input type="radio" name="zone" value="inside" ${zone === 'inside' ? 'checked' : ''}>
            <span><b>ঢাকার ভিতরে</b><span>ডেলিভারি ফি ${fmt(c.deliveryInside)}</span></span></label>
          <label><input type="radio" name="zone" value="outside" ${zone === 'outside' ? 'checked' : ''}>
            <span><b>ঢাকার বাইরে</b><span>ডেলিভারি ফি ${fmt(c.deliveryOutside)}</span></span></label>
        </div>
        <div class="pay-note">
          ${icon('money')}
          <div><b>ক্যাশ অন ডেলিভারি (COD)</b><br>পণ্য হাতে পেয়ে টাকা পরিশোধ করবেন। অগ্রিম পেমেন্ট লাগবে না।</div>
        </div>
      </form>
      <div class="white-card">
        <h2 style="margin-bottom:.6rem">অর্ডার সারাংশ</h2>
        ${lines.map(l => `<div class="sum-line"><span>${esc(l.p.name)} <small style="color:var(--ink-soft)">(${esc(l.w)}) × ${l.qty}</small></span><b>${fmt(l.line)}</b></div>`).join('')}
        <div class="sum-line"><span>সাব-টোটাল</span><b>${fmt(subtotal)}</b></div>
        <div class="sum-line"><span>ডেলিভারি (${zone === 'inside' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে'})</span><b>${fmt(delivery)}</b></div>
        <div class="sum-line total"><span>সর্বমোট</span><span>${fmt(subtotal + delivery)}</span></div>
        <button class="btn" id="place-order" style="width:100%;margin-top:1.1rem">${icon('check-circle')} অর্ডার কনফার্ম করুন</button>
        <p style="font-size:1rem;color:var(--ink-soft);margin-top:.8rem;text-align:center">অর্ডার কনফার্ম করলে হোয়াটসঅ্যাপে অর্ডার বিবরণ পাঠানো হবে</p>
      </div>
    </div>`;
    Object.entries(prev).forEach(([id, v]) => {
      const el = document.getElementById(id);
      if (el) el.value = v;
    });
  }

  $('#co-root').addEventListener('change', e => {
    if (e.target.name === 'zone') { zone = e.target.value; localStorage.setItem('bb_zone', zone); render(); }
  });

  $('#co-root').addEventListener('click', e => {
    if (!e.target.closest('#place-order')) return;
    const form = $('#co-form');
    const name = form.name.value.trim();
    const phone = form.phone.value.replace(/[\s-]/g, '');
    const address = form.address.value.trim();
    const note = form.note.value.trim();

    let ok = true;
    const mark = (id, bad) => { $(id).closest('.field').classList.toggle('invalid', bad); if (bad) ok = false; };
    mark('#f-name', !name);
    mark('#f-phone', !/^01\d{9}$/.test(phone));
    mark('#f-addr', address.length < 8);
    if (!ok) { $('.field.invalid input, .field.invalid textarea')?.focus(); return; }

    const lines = Cart.lines();
    const subtotal = Cart.total();
    const delivery = zone === 'inside' ? c.deliveryInside : c.deliveryOutside;
    const oid = 'BB-' + Date.now().toString().slice(-8);
    const order = {
      oid, date: new Date().toISOString(), name, phone, address, note,
      zone: zone === 'inside' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে',
      delivery, subtotal, total: subtotal + delivery,
      items: lines.map(l => ({ name: l.p.name, w: l.w, qty: l.qty, line: l.line })),
    };
    const orders = JSON.parse(localStorage.getItem('bb_orders') || '[]');
    orders.push(order);
    localStorage.setItem('bb_orders', JSON.stringify(orders));
    localStorage.setItem('bb_last_order', JSON.stringify(order));
    Cart.clear();
    window.open(waOrderLink(order), '_blank');
    location.href = `success.html?oid=${oid}`;
  });

  document.addEventListener('bb:cart', render);
  render();
})();
