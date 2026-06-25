# Portfolio 2026 – Clara Many

## À propos

Ce projet est un portfolio personnel réalisé dans le cadre du Master Cultures et Métiers du Web (CMW) à l'Université Gustave Eiffel.

L'objectif de ce site est de présenter mon profil, mes compétences et une sélection de projets professionnels, universitaires et personnels en lien avec mon projet professionnel dans le domaine de l'UX/UI Design et de l'accessibilité.

Le site est développé en HTML, CSS et JavaScript et est hébergé sur GitHub Pages.

---

## Technologies utilisées

* HTML
* CSS
* JavaScript
* JSON
* Git & GitHub
* GitHub Pages

---

## Accessibilité

Une attention particulière a été portée à l'accessibilité du site :

* conservation d'un <h1> sur la page d'accueil, masqué visuellement à l'aide d'une classe dédiée (.visually-hidden), afin de préserver une hiérarchie de titres cohérente et de faciliter la navigation des utilisateurs de lecteurs d'écran ;
Plus d'informations dans cet article sur Medium : https://medium.com/web-dev-survey-from-kyoto/the-visually-hidden-technique-303f8e2bd409
* ajout de l'attribut ARIA (`aria-hidden="true"`) afin que les textes alternatives des images décoratives ne soient pas annoncées par les lecteurs d'écran ;
* ajout de l'attribut ARIA `aria-label` sur les éléments interactifs qui n'ont pas d'intitulé explicite afin de permettre aux technologies d'assistance d'identifier leur fonction ;
* rédaction de liens explicites afin que leur fonction et leur destination soit compréhensible hors contexte ;
* indication de l'ouverture d'un lien dans une nouvelle fenêtre grâce à un texte accessible réservé aux lecteurs d'écran (`.sr-only`) ;
* utilisation d'une structure HTML sémantique (`header`, `main`, `nav`, `footer`) pour faciliter la navigation ;
* vérification de la navigation au clavier et des états de focus sur les éléments interactifs. ;
* contrastes de couleurs vérifiés ;
* information structurée par l’utilisation appropriée de titres (`h1`, `h2`, `h3`)

---

## Licence

Ce projet est réalisé à des fins pédagogiques.

Les contenus (textes, visuels, maquettes, vidéos et projets) restent la propriété de leur auteur et ne peuvent être réutilisés sans autorisation.

---

## Lien

Le portfolio est accessible à l'adresse suivante :
https://claramy.github.io/portfolio-2026/