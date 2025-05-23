const words = ["secret", "object", "planet", "purple", "flower"];
let currentWord = "";
let scrambled = [];
let selectedLetters = [];
let errors = 0;
let maxErrors = 5;

function shuffle(word) {
  return word.split("").sort(() => 0.5 - Math.random());
}

function getRandomWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  scrambled = shuffle(currentWord);
  selectedLetters = Array(currentWord.length).fill("");
  errors = 0;
  updateUI();
}

function updateUI() {
    const answerBox = document.getElementById("answerBox");
    answerBox.innerHTML = "";
    selectedLetters.forEach((letter, index) => {
      const box = document.createElement("div");
      box.classList.add("answer-box");
      box.setAttribute("data-index", index);
      box.textContent = letter;
  
      box.addEventListener("dragover", e => e.preventDefault());
      box.addEventListener("drop", handleDrop);
  
      box.addEventListener("click", () => {
        if (selectedLetters[index]) {
          selectedLetters[index] = "";
          updateUI();
        }
      });
  
      answerBox.appendChild(box);
    });
  
    const letterButtons = document.getElementById("letterButtons");
    letterButtons.innerHTML = "";
    scrambled.forEach(letter => {
      const usedCount = selectedLetters.filter(l => l === letter).length;
      const availableCount = currentWord.split(letter).length - 1;
  
      if (usedCount < availableCount) {
        const btn = document.createElement("button");
        btn.textContent = letter;
        btn.setAttribute("draggable", true);
        btn.addEventListener("dragstart", e => {
          e.dataTransfer.setData("text/plain", letter);
        });
        letterButtons.appendChild(btn);
      }
    });
  
    document.getElementById("tries").textContent = `${errors}/${maxErrors}`;
  }
  

function handleDrop(e) {
  const box = e.target;
  const index = parseInt(box.getAttribute("data-index"));
  const letter = e.dataTransfer.getData("text/plain");

  if (selectedLetters[index]) return;

  selectedLetters[index] = letter;
  const expected = currentWord[index];

  if (letter !== expected) {
    errors++;
    box.classList.add("error");
    setTimeout(() => box.classList.remove("error"), 500);
  }

  updateUI();

  if (errors >= maxErrors) {
    setTimeout(() => {
      alert("Trop d'erreurs ! Le mot était : " + currentWord);
      getRandomWord();
    }, 100);
  } else if (selectedLetters.join("") === currentWord) {
    setTimeout(() => {
      alert("Bravo ! Tu as trouvé le mot !");
      getRandomWord();
    }, 100);
  }
}

function resetGame() {
  selectedLetters = Array(currentWord.length).fill("");
  errors = 0;
  updateUI();
}

document.getElementById("randomBtn").addEventListener("click", getRandomWord);
document.getElementById("resetBtn").addEventListener("click", resetGame);

getRandomWord();



