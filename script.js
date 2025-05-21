const position= document.querySelector("#title-cursor-position");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  position.innerHTML = `Position de la souris : X=${x}, Y=${y}`;
});

