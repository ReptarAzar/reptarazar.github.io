(function () {
  var el = document.getElementById('hero-daily-img');
  if (!el) return;
  var wrap = document.querySelector('.hero-image-wrap');
  var enter = document.querySelector('.hero-enter');
  if (!wrap || !enter) return;

  function positionEnter() {
    var img = document.getElementById('hero-daily-img');
    if (!img || !wrap || !enter) return;
    var wrapRect = wrap.getBoundingClientRect();
    var imgRect = img.getBoundingClientRect();
    var wrapHeight = wrapRect.height;
    var imgHeight = imgRect.height;
    var bottomPx = (wrapHeight - imgHeight) / 2 + 15;
    enter.style.bottom = bottomPx + 'px';
  }

  var startOfYear = new Date(new Date().getFullYear(), 0, 0);
  var dayOfYear = Math.floor((Date.now() - startOfYear) / (24 * 60 * 60 * 1000));
  var index = 1 + (dayOfYear % 9);
  el.src = 'img/' + index + '.jpg';

  el.addEventListener('load', positionEnter);
  positionEnter();
  window.addEventListener('resize', positionEnter);
})();
