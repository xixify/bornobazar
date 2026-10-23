/* বর্ণবাজার — inline SVG icon set (no emoji, no icon-font, no external sprite)
   Use in JS templates:            icon('cart')
   Use in static markup:           <i class="ic" data-ic="cart"></i>
   (placeholders are swapped for real <svg> by renderIcons()) */
'use strict';

(function (global) {
  const S = 'fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';

  /* name -> inner svg markup */
  const PATHS = {
    cart: '<circle cx="9" cy="20" r="1.6"/><circle cx="17" cy="20" r="1.6"/><path d="M3 3h2l2.6 12.4a1.5 1.5 0 0 0 1.5 1.1h7.9a1.5 1.5 0 0 0 1.5-1.2L20.5 8H6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mobile: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18.5h2"/>',
    sparkle: '<path d="M12 3.2 13.6 8l4.8 1.6-4.8 1.6L12 16l-1.6-4.8L5.6 9.6 10.4 8z"/><path d="M18.6 14.4l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
    check: '<path d="m4.5 12.5 5 5 10-11"/>',
    'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8 12.3 2.7 2.7L16.2 9.5"/>',
    truck: '<path d="M2.5 6.5h11.5v9.5H2.5z"/><path d="M14 10h3.4l4 3.4v2.6h-7.4z"/><circle cx="6.5" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    oil: '<path d="M8 3h8"/><path d="M9 3v2.2c0 .5-.2 1-.6 1.4A3 3 0 0 0 7.6 8.4v9.2a3 3 0 0 0 3 3h2.8a3 3 0 0 0 3-3V8.4a3 2 0 0 0-.8-1.8 1.8 1.8 0 0 1-.6-1.4V3"/><path d="M8 11h8"/>',
    gift: '<rect x="3" y="8.5" width="18" height="4" rx="1"/><path d="M4.5 12.5V19a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6.5"/><path d="M12 8.5v12.5"/><path d="M12 8.5S10.6 3 8.2 3a2.4 2.4 0 0 0 0 5.5z"/><path d="M12 8.5S13.4 3 15.8 3a2.4 2.4 0 0 1 0 5.5z"/>',
    bowl: '<path d="M3 11h18a9 9 0 0 1-18 0Z"/><path d="M6.5 17.5h11"/><path d="M12 3v2.5M9 4.5V7M15 4.5V7"/>',
    fish: '<path d="M2.5 12c3.2-4.4 6.9-6.6 10.4-6.6 3.7 0 6.7 2.4 8.6 6.6-1.9 4.2-4.9 6.6-8.6 6.6-3.5 0-7.2-2.2-10.4-6.6Z"/><path d="M17.5 8.5 22 12l-4.5 3.5"/><circle cx="8" cy="10.5" r=".9"/>',
    sweet: '<circle cx="12" cy="14.5" r="4.5"/><path d="M12 10V3.5"/><path d="M9.5 3.5h5"/>',
    peanut: '<ellipse cx="9.5" cy="15.5" rx="3.6" ry="5.6" transform="rotate(-18 9.5 15.5)"/><ellipse cx="15" cy="8.5" rx="3.6" ry="5.6" transform="rotate(-18 15 8.5)"/>',
    jar: '<path d="M6.5 3.5h11v2.6c0 .7-.3 1.3-.8 1.8l-.2.2v11a2 2 0 0 1-2 2H9.5a2 2 0 0 1-2-2v-11l-.2-.2a2.6 2.6 0 0 1-.8-1.8z"/><path d="M7.5 12h9"/>',
    location: '<path d="M20 10.2c0 5.6-8 11.8-8 11.8s-8-6.2-8-11.8a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.8"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z"/>',
    money: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.01M18 12h.01"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"/>',
    clipboard: '<path d="M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/><rect x="9" y="2.5" width="6" height="3.5" rx="1"/><path d="M9 11h6M9 15h4"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M4.3 4.3l2.1 2.1M17.6 17.6l2.1 2.1M2.5 12h3M18.5 12h3M4.3 19.7l2.1-2.1M17.6 6.4l2.1-2.1"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    factory: '<path d="M3 21V11l5.5 3.5V11l5.5 3.5V6.5L20 10v11z"/><path d="M3 21h18"/><path d="M7 18h.01M12 18h.01M17 18h.01"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    basket: '<path d="M4 9h16l-1.6 10.2a2 2 0 0 1-2 1.8H7.6a2 2 0 0 1-2-1.8Z"/><path d="M8.5 9 11 3.5M15.5 9 13 3.5"/>',
    receipt: '<path d="M5.5 3h13v18l-2.2-1.5-2.2 1.5-2.1-1.5L9.9 21l-2.2-1.5L5.5 21z"/><path d="M9 8h6M9 12h6"/>',
    party: '<path d="M3 21 9.5 9.5 15 15z"/><path d="M18 3v4M21.5 6.5h-4M16 7.5l2 2M20 9l-2 2"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    'arrow-left': '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14.2-1.4 7 4.9-2.6 4.9 2.6-1.4-7"/>',
    whatsapp: '<path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5a11 11 0 0 1-4.2-3.7c-.3-.4-.8-1.2-.8-2.2s.5-1.6.7-1.8c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 1.9c.1.2.1.4 0 .6l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.4.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z"/>',
    facebook: '<path fill="currentColor" stroke="none" d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.2-1.5 1.5-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.7v8h3.2Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    star: '<path fill="currentColor" stroke="none" d="m12 3.1 2.65 5.6 6.05.83-4.4 4.24 1.06 6.13L12 17.15 6.64 19.9l1.06-6.13L3.3 9.53l6.05-.83z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.2V12l3.2 2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/>',
    user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.8 20a7.2 7.2 0 0 1 14.4 0"/>',
    users: '<circle cx="9" cy="8" r="3.4"/><path d="M2.8 19.5a6.4 6.4 0 0 1 12.4 0"/><path d="M16.5 5.2a3.4 3.4 0 0 1 0 6"/><path d="M18 13.6a6.4 6.4 0 0 1 3.2 5.9"/>',
    send: '<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4z"/>',
    heart: '<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1l8.8 8.8 8.8-8.8a5 5 0 0 0 0-7.1z"/>',
    package: '<path d="m12 2.6 9 4.9v9l-9 4.9-9-4.9v-9z"/><path d="m3 7.5 9 4.9 9-4.9"/><path d="M12 12.4v8.9"/>',
    tag: '<path d="M3 11.6V4.5a1.5 1.5 0 0 1 1.5-1.5h7.1a2 2 0 0 1 1.4.6l8 8a2 2 0 0 1 0 2.8l-6.6 6.6a2 2 0 0 1-2.8 0l-8-8a2 2 0 0 1-.6-1.4z"/><circle cx="7.8" cy="7.8" r="1.4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11.2V16.5M12 7.8h.01"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 0 1 4.9.6c0 1.7-2.5 2.5-2.5 2.5"/><path d="M12 16.6h.01"/>',
    scale: '<path d="M12 3.5v17M7 20.5h10M4 8h16M4 8l-2.5 6a3 3 0 0 0 5 0zM20 8l2.5 6a3 3 0 0 1-5 0z"/>',
    percent: '<path d="M19 5 5 19"/><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/>',
    home: '<path d="m3 10.5 9-7 9 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M9.8 20v-5.5h4.4V20"/>',
    refresh: '<path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1"/><path d="M20.8 4.4v5h-5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"/><path d="M8.5 9.5h7M8.5 13h4.5"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1.15"/>',
    'volume-off': '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="m16 9 5 5M21 9l-5 5"/>',
    volume: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.4 5.6a9 9 0 0 1 0 12.8"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5z"/>',
  };

  /* standalone <svg> markup for a named icon */
  function icon(name, cls) {
    const p = PATHS[name];
    if (!p) return '';
    return `<svg class="ic${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" ${S} aria-hidden="true" focusable="false">${p}</svg>`;
  }

  /* swap <i class="ic" data-ic="name"> placeholders for real <svg> */
  function renderIcons(root) {
    (root || document).querySelectorAll('[data-ic]').forEach(el => {
      const svg = icon(el.dataset.ic);
      if (!svg) return;
      const holder = document.createElement('span');
      holder.innerHTML = svg;
      const node = holder.firstElementChild;
      if (!node) return;
      const keep = [...el.classList].filter(c => c !== 'ic');
      if (keep.length) node.classList.add(...keep);
      el.replaceWith(node);
    });
  }

  global.BBIcons = { icon, renderIcons, names: () => Object.keys(PATHS) };
  global.icon = icon;
  global.renderIcons = renderIcons;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderIcons(document));
  } else {
    renderIcons(document);
  }
})(window);
