/* MedLingo — minimal vanilla JS: mobile nav + footer year */
(function () {
  'use strict';

  // Mobile navigation toggle
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.getAttribute('data-open') === 'true';
      links.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    });

    // Close the menu after tapping a link (mobile)
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // Current year in footer
  var year = document.getElementById('year');
  if (year) { year.textContent = String(new Date().getFullYear()); }

  // Hero live-preview iframe: fade in on load, fall back to the static image
  // if the frame never loads (e.g. framing blocked or offline).
  var frame = document.querySelector('.device__frame');
  if (frame) {
    var device = frame.closest('.device--live');
    var settled = false;
    frame.addEventListener('load', function () {
      settled = true;
      if (device) { device.classList.add('frame-loaded'); }
    });
    frame.addEventListener('error', function () {
      if (device) { device.classList.add('frame-failed'); }
    });
    // Safety net: if nothing loaded after 9s, keep the static fallback.
    setTimeout(function () {
      if (!settled && device) { device.classList.add('frame-failed'); }
    }, 9000);
  }
})();
