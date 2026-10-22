/* École Celtique — navigation documentaire complémentaire.
   Les liens éditoriaux essentiels restent présents dans le HTML statique. */
(() => {
  'use strict';
  const pages = [
    ['/papers/le-deuxieme-sceau.html', 'Deuxième Sceau — Pline le Jeune et l’Évangile de Pierre'],
    ['/papers/le-troisieme-sceau.html', 'Troisième Sceau — Apocalypses de Pierre et de Jean'],
    ['/papers/le-quatrieme-sceau.html', 'Quatrième Sceau — Testimonium Flavianum'],
    ['/evangile-pierre.html', 'Évangile de Pierre — étude historique']
  ];
  function init() {
    const current = window.location.pathname;
    if (!pages.some(([path]) => path === current) || document.getElementById('ec-nav-seo')) return;
    const nav = document.createElement('nav');
    nav.id = 'ec-nav-seo';
    nav.setAttribute('aria-label', 'Autres publications');
    nav.style.cssText = 'max-width:960px;margin:2rem auto;padding:1.2rem;border:1px solid #ccc;font-family:Georgia,serif;line-height:1.6';
    const title = document.createElement('h2');
    title.textContent = 'Autres publications';
    title.style.cssText = 'font-size:1.15rem;text-align:left;margin:0 0 .6rem';
    nav.appendChild(title);
    const ul = document.createElement('ul');
    ul.style.paddingLeft = '1.4rem';
    for (const [path, label] of pages) {
      if (path === current) continue;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = path;
      a.textContent = label;
      li.appendChild(a); ul.appendChild(li);
    }
    nav.appendChild(ul);
    const footer = document.querySelector('footer');
    if (footer) footer.before(nav); else document.body.appendChild(nav);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
