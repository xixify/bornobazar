/* shop page — filter, sort, search */
'use strict';
renderChrome('shop');

(function () {
  const params = new URLSearchParams(location.search);
  let cat = params.get('cat') || 'all';
  let q = (params.get('q') || '').trim().toLowerCase();
  let sort = 'default';

  const tabs = $('#tabs');
  tabs.innerHTML = `<button class="tab${cat === 'all' ? ' active' : ''}" data-cat="all">সব পণ্য <span>(${BB.products.length})</span></button>` +
    BB.categories.map(c => `<button class="tab${cat === c.id ? ' active' : ''}" data-cat="${c.id}">${c.name} <span>(${BB.products.filter(p => p.cat === c.id).length})</span></button>`).join('');

  const sortSel = $('#sort');
  const countEl = $('#result-count');
  const grid = $('#shop-grid');

  if (q) $('#shop-search').value = q;

  function apply() {
    let list = BB.products.slice();
    if (cat !== 'all') list = list.filter(p => p.cat === cat);
    if (q) list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.nameEn || '').toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)));
    if (sort === 'lo') list.sort((a, b) => a.minPrice - b.minPrice);
    if (sort === 'hi') list.sort((a, b) => b.minPrice - a.minPrice);
    if (sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name, 'bn'));

    countEl.textContent = `${list.length}টি পণ্য${cat !== 'all' ? ' — ' + catName(cat) : ''}${q ? ` — "${q}"` : ''}`;
    grid.innerHTML = list.length
      ? list.map(cardHTML).join('')
      : `<div class="empty" style="grid-column:1/-1"><div class="big">${icon('search')}</div>কোনো পণ্য পাওয়া যায়নি<br><a class="btn ghost sm" href="shop.html" style="margin-top:.8rem">সব পণ্য দেখুন</a></div>`;
  }

  tabs.addEventListener('click', e => {
    const t = e.target.closest('.tab'); if (!t) return;
    $$('.tab', tabs).forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    cat = t.dataset.cat;
    history.replaceState(null, '', cat === 'all' ? 'shop.html' : `shop.html?cat=${cat}`);
    apply();
  });

  sortSel.addEventListener('change', () => { sort = sortSel.value; apply(); });
  $('#shop-search').addEventListener('input', e => { q = e.target.value.trim().toLowerCase(); apply(); });

  apply();
})();
