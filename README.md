## 🕵️‍♂️ CASTLE SERIE TV - GALERIE MASONRY & LIGHTBOX

## 🚀 Le challenge

Une galerie photo interactive de type **Maçonnerie (style Pinterest)** dédiée à la série télévisée policière **Castle**. Le projet arbore un design soigné.

Il intègre une présentation sémantique de la série et une **lightbox (fenêtre pop-up)** entièrement accessible pour visualiser les images en grand format.

Ce projet dispose de nombreuses fonctionnalités :

- **Grille Masonry Native** : Agencement fluide et responsive géré à 100% en CSS (`column-count`), sans espaces vides.
- **Thème "Bureau d'enquêteur"** : Palette colorimétrique élégante ( bleu nuit et touches d'or).
- **Lightbox interactive** : Ouverture des images au clic avec affichage dynamique du titre de l'overlay.
- **Expérience Utilisateur & Accessibilité (A11y)** :
  - Blocage du défilement de la page en arrière-plan lorsque la lightbox est ouverte.
  - Fermeture intelligente au clic sur l'arrière-plan (sans fermer si l'on clique sur l'image).
  - Gestion des attributs `aria-hidden`.
  - Fermeture rapide via la touche `Échap` du clavier.
- **Responsive Design** : Adaptation automatique du nombre de colonnes selon la taille de l'écran (3 colonnes sur PC, 2 sur tablette, 1 sur mobile).

## 📸 Démonstration

Lien vers le projet :

## 🛠️ Projet développé avec

- Utilisation des balises sémantiques HTML5
- CSS3
- Flexbox
- Animations css (transition, @keyframes)
- `column-count` & `column-gap` pour l'effet maçonnerie fluide.
- `display: inline-block` sur les items pour éviter les coupures de blocs entre les colonnes.
- Page web responsive
- Desktop first
- Commentaires HTML
- Commentaires CSS
- Importation d'un normaliseur : le fichier normalize
- Importation des polices "Cinzel" et "Inter"
- JavaScript (ES6)
- Code JavaScript commenté
- Manipulation dynamique du DOM.
- Gestionnaires d'événements (`click`, `keydown`).
- Nettoyage asynchrone des attributs (`setTimeout`) pour éviter les flashs visuels lors des animations.
