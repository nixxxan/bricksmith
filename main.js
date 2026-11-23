(function () {
  var cfg = window.BRICKSMITH || {};
  var links = cfg.BUY || {};
  var buttons = document.querySelectorAll('[data-buy]');
  for (var i = 0; i < buttons.length; i++) {
    var b = buttons[i], url = links[b.getAttribute('data-buy')] || '';
    if (/^https:\/\//.test(url)) { b.href = url; b.rel = 'noopener'; b.textContent = 'Choose ' + b.closest('.plan').querySelector('h3').textContent; }
    else { b.setAttribute('aria-disabled', 'true'); b.classList.add('soon'); b.addEventListener('click', function (e) { e.preventDefault(); }); }
  }
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
