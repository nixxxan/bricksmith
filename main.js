(function () {
  var cfg = window.BRICKSMITH || {};
  var url = /^https:\/\//.test(cfg.BUY_URL || '') ? cfg.BUY_URL : '';
  var buy = document.querySelectorAll('[data-buy]');
  for (var i = 0; i < buy.length; i++) {
    if (url) { buy[i].href = url; buy[i].textContent = 'Buy Bricksmith'; buy[i].rel = 'noopener'; }
    else { buy[i].setAttribute('aria-disabled', 'true'); buy[i].classList.add('soon'); buy[i].addEventListener('click', function (e) { e.preventDefault(); }); }
  }
  var links = document.querySelectorAll('[data-buy-link]');
  for (var j = 0; j < links.length; j++) if (url) { links[j].href = url; links[j].rel = 'noopener'; }
  var price = document.querySelector('[data-price]');
  if (price && cfg.PRICE) price.textContent = cfg.PRICE;
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
