/* order success page */
'use strict';
renderChrome('cart');

(function () {
  const c = BB.config;
  const oid = new URLSearchParams(location.search).get('oid');
  let order = null;
  try { order = JSON.parse(localStorage.getItem('bb_last_order')); } catch {}
  if (!order || (oid && order.oid !== oid)) {
    $('#su-root').innerHTML = `<div class="empty"><div class="big">${icon('receipt')}</div>অর্ডার তথ্য পাওয়া যায়নি<br><br><a class="btn" href="shop.html">শপে ফিরে যান</a></div>`;
    return;
  }
  $('#su-root').innerHTML = `
  <div class="success-wrap white-card">
    <div class="success-ic">${icon('check')}</div>
    <h1 style="font-size:1.5rem">${icon('party')} অর্ডার সফল হয়েছে!</h1>
    <p style="color:var(--ink-soft);margin:.4rem 0">ধন্যবাদ <b>${esc(order.name)}</b>! আমাদের প্রতিনিধি শীঘ্রই <b>${esc(order.phone)}</b> নম্বরে কল দিয়ে অর্ডার কনফার্ম করবেন।</p>
    <div class="oid">অর্ডার আইডি: ${order.oid}</div>
    <div style="text-align:left;margin:1.2rem 0 .4rem">
      ${order.items.map(i => `<div class="sum-line"><span>${esc(i.name)} <small style="color:var(--ink-soft)">(${esc(i.w)}) × ${i.qty}</small></span><b>${fmt(i.line)}</b></div>`).join('')}
      <div class="sum-line"><span>ডেলিভারি (${order.zone})</span><b>${fmt(order.delivery)}</b></div>
      <div class="sum-line total"><span>সর্বমোট (COD)</span><span>${fmt(order.total)}</span></div>
    </div>
    <p style="font-size:1rem;color:var(--ink-soft)">ডেলিভারি ঠিকানা: ${esc(order.address)}</p>
    <div class="pd-cta" style="justify-content:center;margin-top:1.4rem">
      <a class="btn wa" href="${waOrderLink(order)}" target="_blank">${icon('whatsapp')} হোয়াটসঅ্যাপে অর্ডার পাঠান</a>
      <a class="btn ghost" href="tel:${c.phone}">${icon('phone')} ${c.phone}</a>
    </div>
    <p style="margin-top:1.2rem"><a href="shop.html" style="color:var(--red);font-weight:700">${icon('arrow-left')} শপিং চালিয়ে যান</a></p>
  </div>`;
})();
