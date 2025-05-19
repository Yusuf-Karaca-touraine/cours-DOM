const sayMyName = prompt("Quel est votre nom ?");
const title = document.querySelector(".title");
title.textContent = `Hello, ${sayMyName}!`;
