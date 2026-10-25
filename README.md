# École Celtique

Site de recherche indépendante de **Din d'Arya** : philologie, épigraphie et histoire ancienne.
Publié sur **[ecole-celtique.fr](https://ecole-celtique.fr/)** via GitHub Pages.

- ORCID : [0009-0004-9915-5893](https://orcid.org/0009-0004-9915-5893)
- HAL : [hal-05610636](https://hal.science/hal-05610636)
- Fiche auteur (Zenodo) : [10.5281/zenodo.20039268](https://doi.org/10.5281/zenodo.20039268)
- H-Commons : [hcommons.org/members/dindarya](https://hcommons.org/members/dindarya/)

## Méthode

Les études appliquent une **datation par contextualisation externe et convergence d'intérêts** : un document est daté par le contexte politique qui avait intérêt à le produire, croisé avec la philologie, l'épigraphie et la cryptanalyse des textes.

## Publications

### Les sceaux

| Étude | Page |
| --- | --- |
| Le premier sceau : l'Évangile de Pierre, un faux de Pline le Jeune (vers 112 CE) | [`evangile-pierre.html`](https://ecole-celtique.fr/evangile-pierre.html) |
| Le deuxième sceau : Pline le Jeune, écrivain de chancellerie pour Rome | [`papers/le-deuxieme-sceau.html`](https://ecole-celtique.fr/papers/le-deuxieme-sceau.html) |
| Le troisième sceau : l'aveu de la Bête aux sept têtes | [`papers/le-troisieme-sceau.html`](https://ecole-celtique.fr/papers/le-troisieme-sceau.html) |
| Le quatrième sceau : le *falsum* qui écrase le paragraphe originel | [`papers/le-quatrieme-sceau.html`](https://ecole-celtique.fr/papers/le-quatrieme-sceau.html) |

### Corpus Tel Dan

| Étude | Page |
| --- | --- |
| La Stèle de Tel Dan, un faux du Ier siècle avant notre ère (bibliographie du corpus) | [`bibliography-teldan.html`](https://ecole-celtique.fr/bibliography-teldan.html) |
| Le fragment de Tel Affis complète la Stèle de Tel Dan | [`papers/tell-afis.html`](https://ecole-celtique.fr/papers/tell-afis.html) |
| Frontière, Demsky, koinè, Hazaël, Psaumes de Salomon (FR / EN) | dossier [`papers/`](papers/) |

### Zodiaque géodésique

| Étude | Page |
| --- | --- |
| Zodiac — Le ciel posé sur la Terre : le zodiaque géodésique à 13 signes | [`papers/zodiac/`](https://ecole-celtique.fr/papers/zodiac/) |

Les treize constellations de l'écliptique, Ophiuchus compris, à leurs largeurs réelles, déroulées sur les méridiens du globe, calées sur la Terre par moindres carrés : Spica sur Ouessant. Synthèse PDF et données dans [`papers/zodiac/`](papers/zodiac/).

### En cours

- Le Livre d'Isaïe, document hasmonéen du Ier siècle avant notre ère.
- Le Livre de Jérémie, chronique politique hérodienne codée.

## Organisation du dépôt

```
/                     page d'accueil, profils auteur (FR/EN), Évangile de Pierre, bibliographies
├── papers/           études publiées (HTML et PDF), images associées
│   └── zodiac/       essai Zodiac : index.html, zodiac.js (roue), D3, TopoJSON, image de partage, synthèse PDF, classeur
├── assets/           ressources communes à tout le site : site.css (feuille de style unique),
│                     head-frame.js (cadre commun), nav-seo.js
├── docs/             documentation technique (audit SEO…)
├── CNAME             domaine ecole-celtique.fr
├── sitemap.xml       plan du site pour les moteurs de recherche
├── sitemap.txt       liste simple des adresses
└── robots.txt
```

## Publication

Le site est servi par **GitHub Pages** depuis la branche `main`, sous le domaine déclaré dans `CNAME`. Toute modification poussée sur `main` est publiée automatiquement.

Pour ajouter une étude :

1. Déposer la page HTML (et son PDF) dans `papers/`.
2. Ajouter sa carte sur `index.html`.
3. Ajouter son adresse dans `sitemap.xml` et `sitemap.txt`.
4. Commit et push sur `main`.

Pour prévisualiser en local :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

Les liens du site sont absolus (`/papers/…`) : ouvrir les fichiers directement depuis le disque ne suffit pas, il faut un petit serveur local.

## Copie de travail

Ce dépôt est cloné directement dans Google Drive (`Ecole-Celtique/site-github`) et publié avec GitHub Desktop : Commit to main, puis Push origin. **La branche `main` de GitHub fait foi pour la publication.**
