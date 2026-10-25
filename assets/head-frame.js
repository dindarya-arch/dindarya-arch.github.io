/* École Celtique — cadre commun v1.0 — 25 octobre 2026
   Dans la page :
     <div id="site-head" data-trail="Essais|/papers/;Zodiac"></div>
     <script src="/assets/head-frame.js"></script>
     ...
     <div id="site-foot" data-links="Zodiac|/papers/zodiac/"></div>
   data-trail : fil d'Ariane, éléments séparés par « ; », lien facultatif après « | ».
   data-links : liens propres à la page, ajoutés avant « Essais » et « Accueil ». */
(function(){
  'use strict';
  var esc = function(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };
  var items = function(attr){
    return (attr || '').split(';').map(function(x){ return x.trim(); }).filter(Boolean).map(function(x){
      var p = x.split('|'); return {label: p[0].trim(), href: (p[1] || '').trim()};
    });
  };
  var link = function(it){ return it.href ? '<a href="' + esc(it.href) + '">' + esc(it.label) + '</a>' : esc(it.label); };

  var head = document.getElementById('site-head');
  if (head) {
    var trail = items(head.getAttribute('data-trail')).map(link).join(' · ');
    head.innerHTML =
      '<div class="ec-hero">' +
        '<img class="ec-hero-bg" src="/bandeau.jpg" alt="Jérusalem — Proche-Orient ancien" width="1600" height="400">' +
        '<div class="ec-hero-overlay"><p class="ec-hero-tagline">Pour un regard antérieur celtique sur l\'histoire de l\'Orient</p></div>' +
      '</div>' +
      '<nav class="ec-nav" aria-label="Navigation principale">' +
        '<a class="nav-back" href="/index.html"><img class="nav-logo" src="/Logo.jpg" alt="École Celtique" width="36" height="36">← Din d\'Arya — École Celtique</a>' +
        (trail ? '<span class="nav-label">' + trail + '</span>' : '') +
      '</nav>';
  }

  var foot = function(){
    var el = document.getElementById('site-foot');
    if (!el) return;
    var extra = items(el.getAttribute('data-links')).map(link);
    var links = [
      '<a href="https://orcid.org/0009-0004-9915-5893" target="_blank" rel="noopener">ORCID 0009-0004-9915-5893</a>',
      '<a href="https://hal.science/hal-05610636" target="_blank" rel="noopener">HAL</a>',
      '<a href="https://hcommons.org/members/dindarya/" target="_blank" rel="noopener">H-Commons</a>'
    ].concat(extra, ['<a href="/papers/">Essais</a>', '<a href="/index.html">← Accueil</a>']);
    el.innerHTML = '<div class="ec-footer"><span>Din d\'Arya · École Celtique · ' + new Date().getFullYear() + '</span><span>' + links.join(' · ') + '</span></div>';
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', foot, {once: true}); else foot();
})();
