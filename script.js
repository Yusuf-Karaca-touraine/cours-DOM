const clickedImg = document.querySelector(".img-dogs");
clickedImg.addEventListener("click", function() {
    clickedImg.src = "https://placedog.net/499";
    clickedImg.alt = "another dog";
});

const hoveredTitle = document.querySelector(".title");
hoveredTitle.addEventListener("mouseover", () => { 
    hoveredTitle.style.color = "green";
});

const unhoveredTitle = document.querySelector(".title");
unhoveredTitle.addEventListener("mouseleave", () => {
    unhoveredTitle.style.color = "black";
});

// Ou sinon en plus condensé si jamais tu veux faire plus clean

/*
["mouseover", "mouseleave"].forEach(event =>
    document.querySelector(".title").addEventListener(event, e => {
      e.target.style.color = event === "mouseover" ? "green" : "black";
    })
  );
  */