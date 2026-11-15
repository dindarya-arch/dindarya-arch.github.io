# École Celtique — audit SEO technique et plan de corrections
Date : 2026-11-15
Source : export Google Search Console du 15 novembre 2026 et lecture du dépôt dindarya-arch/dindarya-arch.github.io (branche main).

## Constats vérifiés dans le HTML
- `index.html` : title et meta description présents ; balises Open Graph et Twitter présentes ; aucune balise canonical dans l'en-tête examiné.
- `papers/le-deuxieme-sceau.html` : title, description, canonical, Open Graph, métadonnées citation_* et Dublin Core présents.
- `papers/le-troisieme-sceau.html` : mêmes familles de métadonnées présentes.
- `papers/le-quatrieme-sceau.html` : mêmes familles de métadonnées présentes.
- `sitemap.xml` : les trois Sceaux et l'accueil sont référencés. Les dates lastmod ne doivent pas être avancées sans modification réelle.

## Priorités GSC
1. Deuxième Sceau : 189 impressions, 0 clic, position moyenne 16,42. Examiner les requêtes et renforcer les liens internes contextuels.
2. Troisième Sceau : 105 impressions, 1 clic, position moyenne 7,77. Tester des titres/descriptions mieux alignés sur les requêtes.
3. Quatrième Sceau : 249 impressions, 5 clics, position moyenne 6,31. Analyser le CTR par requête, notamment Testimonium Flavianum.

## Recommandations prudentes
- Préserver intégralement le texte scientifique, les métadonnées Google Scholar, les PDF, les dates de publication et le style éditorial.
- Vérifier sur l'ensemble du site la présence d'une canonical cohérente, en commençant par l'accueil.
- Vérifier les liens internes existants avant tout ajout, pour éviter les doublons.
- Vérifier les URL PDF référencées par citation_pdf_url avant toute modification.
- Ne pas modifier le sitemap uniquement pour simuler une fraîcheur.
- Mesurer sur 28 et 90 jours après déploiement : impressions, clics, CTR et position par page/requête.

## Limites
Cet audit ne constitue pas un test de crawl complet ni une validation des Core Web Vitals. Les suggestions de nouveaux titres nécessitent une vérification sémantique approfondie avant publication.

## Publication
Document de préparation SEO ; aucune modification du contenu scientifique ni déploiement en production n'est autorisé par ce rapport seul.
