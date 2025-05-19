// fichier script.js
const bearsPictures = [
    "https://placebear.com/500/279",
    "https://placebear.com/500/280",
    "https://placebear.com/500/300",
    "https://placebear.com/500/302",
    "https://placebear.com/500/305",
  ];
  // À toi de jouer ici 👇 

  const picturesModified = document.querySelectorAll("img");
  for (let i = 0; i < picturesModified.length; i++) {
  picturesModified[i].src = bearsPictures[i];
}

// Ou sinon je fais une update version ternaire au cas où histoire de train le tout (à la maison)


