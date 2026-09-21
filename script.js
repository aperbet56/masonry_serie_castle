const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
const masonryItems = document.querySelectorAll(".masonry-item");
const bodyElement = document.querySelector("body");

// Ouverture de la Lightbox au clic sur un élément de la grille
masonryItems.forEach((item) => {
  // Ecoute de  l'événement "click"
  item.addEventListener("click", () => {
    // Récupération des éléments HTML
    const img = item.querySelector("img");
    const caption = item.querySelector(".overlay h2");

    // Mise en place de l'image et de son titre
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption.textContent;

    // Ajout de la classe "active"
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    // Empêche le défilement de la page en arrière-plan
    bodyElement.style.overflow = "hidden";
  });
});

// Déclaration de la fonction closeLightbox qui va permettre de fermer la lightbox
const closeLightbox = () => {
  // Retrait de la classe "active"
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  // Rétablit le défilement
  bodyElement.style.overflow = "";
  // Nettoyage de la source et du texte alternatif après l'animation de fermeture
  setTimeout(() => {
    lightboxImg.src = "";
    lightboxImg.alt = "";
  }, 300);
};

// Ecoute de l'événement "click" sur le bouton et appel de la fonction closeLightbox
lightboxClose.addEventListener("click", closeLightbox);

// Fermer au clic à l'extérieur de l'image
lightbox.addEventListener("click", (e) => {
  // Se ferme UNIQUEMENT si on clique sur le conteneur principal arrière-plan et NON sur l'image ou ses légendes
  if (e.target === lightbox) {
    // Appel de la fonction closeLightbox()
    closeLightbox();
  }
});

// Ecoute de l'événement "keydown"
document.addEventListener("keydown", (e) => {
  // Fermeture de la lightbox avec la touche Échap du clavier
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    // Appel de la fonction closeLightBox()
    closeLightbox();
  }
});
