# Zodiac — intégration locale du 24 octobre 2026

Statut : contenu éditorial validé par l’utilisateur le 24 octobre 2026, avec autorisation de commit et de push. La publication dépend du processus de déploiement du dépôt.

- Page : `/papers/zodiac/` (fichier `papers/zodiac/index.html` depuis le 25 octobre 2026 ; l'ancienne adresse `/papers/zodiac.html` redirige), nouvel essai « Zodiac — Le Ciel posé sur la Terre ».
- Source : présentation HTML fournie dans le dossier Drive local `papers/zodiac`. Texte et données repris de cette présentation ; cette intégration ne constitue pas une vérification scientifique des affirmations.
- Thème propre conservé : fond nocturne, accents laiton, roue polaire interactive.
- Styles et scripts (25 octobre 2026) : styles dans `/assets/site.css` et cadre dans `/assets/head-frame.js`, communs au site ; script `zodiac.js`, image de partage et bibliothèques D3 7.8.5 et TopoJSON 3.0.2 locales avec leurs licences, rangés dans `/papers/zodiac/`. La carte est incluse dans le script ; aucune requête cartographique externe. Les polices Google restent facultatives, avec des polices de remplacement.
- Documents dans `/papers/zodiac/` : synthèse PDF (10 pages, refaite le 25 octobre 2026 : angle présenté comme l'équilibre par moindres carrés de 26 couples ciel – terre, Sphinx compris ; chapitre « Les treize terres » : part de mer et de terre par secteur, traditions locales de chaque signe) ; classeur Excel avec un onglet « Moindres carrés » qui recalcule l'angle optimal à partir de la phase.
- Liens entrants : accueil et index `/papers/`. Navigation de retour, sommaire et liens vers d’autres essais.
- SEO : title, description, canonical, Open Graph, Twitter Card, un H1, sections H2, JSON-LD Article et BreadcrumbList, deux sitemaps. Pas de hreflang : aucune traduction distincte fournie. Aucune date de publication ni référence DOI inventée.

Contrôles locaux : largeurs 390 et 1440 px, aucun débordement global, 13 secteurs affichés, roue et sélection des secteurs fonctionnelles, aucun échec JavaScript, ancres et destinations internes disponibles. Contrôle effectué en bloquant les requêtes externes ; les interactions restent opérationnelles. Captures et résultats conservés dans les dossiers de travail hors dépôt.

Observation signalée avant validation : la présentation annonce 26 étoiles, mais ses données produisent 27 lignes dans le tableau. L’utilisateur a validé l’intégration en l’état ; les données sources sont conservées. Les liens Google Drive/Sheets et les affirmations historiques ou statistiques n’ont pas fait l’objet d’une validation de fond.
