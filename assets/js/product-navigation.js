/* Navigation enhancement only: product content and links do not require JS. */
(function () {
  var button = document.getElementById('arnHamburger');
  var menu = document.getElementById('arnMenu');
  if (!button || !menu) return;

  document.documentElement.classList.add('has-js');

  function setOpen(open) {
    menu.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('#arnNav')) setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) setOpen(false);
  });
})();
