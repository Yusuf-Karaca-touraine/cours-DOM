const input = document.querySelector(".dropdown-btn");

input.addEventListener("click", () => {
    const newClass = document.querySelector(".dropdown-menu-content");
    newClass.classList.toggle("visible");
});


