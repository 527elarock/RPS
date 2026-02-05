
let score = 0;


const buttons = document.querySelectorAll(".option-btn");


const scoreDisplay = document.getElementById("score");
const cpuChoiceDisplay = document.getElementById("cpu-choice");
const winnerPopup = document.getElementById("winner-popup");
const winnerText = document.getElementById("winner-text");


const isJediPage = document.body.classList.contains("jedi");
const glowColor = isJediPage ? "#00bfff" : "#ff4d4d";


const choices = ["blaster", "force", "saber"];
const beats = {
  blaster: "saber",   
  force: "blaster",  
  saber: "force"     
};


function showWinner(playerMove, computerMove, result) {
  winnerText.innerHTML = `
    You chose: <strong>${playerMove.toUpperCase()}</strong><br>
    Opponent chose: <strong>${computerMove.toUpperCase()}</strong><br>
    <strong>${result}</strong>
  `;

  winnerPopup.style.display = "block";
  winnerPopup.style.borderColor = glowColor;
  winnerPopup.style.boxShadow = `0 0 20px ${glowColor}, 0 0 40px ${glowColor} inset`;


  setTimeout(() => {
    winnerPopup.style.display = "none";
  }, 1500);
}


function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
  scoreDisplay.style.textShadow = `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`;

  if (cpuChoiceDisplay) {
    cpuChoiceDisplay.style.color = glowColor;
    cpuChoiceDisplay.style.textShadow = `0 0 10px ${glowColor}, 0 0 20px ${glowColor} inset`;
  }
}


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerMove = button.getAttribute("data-move");
    const computerMove = choices[Math.floor(Math.random() * choices.length)];


    if (cpuChoiceDisplay) {
      cpuChoiceDisplay.textContent = `CPU picked: ${computerMove.toUpperCase()}`;
    }

    let result = "";

    if (playerMove === computerMove) {
      result = "It's a Tie!";
    } else if (beats[playerMove] === computerMove) {
      result = "You Win!";
      score++;
    } else {
      result = "You Lose!";
      score = score > 0 ? score - 1 : 0;
    }


    updateScore();
    showWinner(playerMove, computerMove, result);
  });
});


updateScore();
