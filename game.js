
var userName;
var userWins = 0;
var computerWins = 0;
var roundNumber = 0;
var maxRounds = 5;

var choices = ["lightsaber", "blaster", "force"];

var winMessages = [
    "The Force is strong with you!",
    "Victory for the Jedi!",
    "You defeated the Empire!"
];

var loseMessages = [
    "The Dark Side wins...",
    "The Empire strikes back!",
    "You were defeated by the Sith!"
];



window.onload = function () {

    userName = prompt("Enter your Jedi name:");

    if (userName === null || userName === "") {
        userName = "Young Padawan";
    }

    document.getElementById("welcome").innerHTML =
        "Welcome, " + userName + "!";

    updateRoundDisplay();
};




function playGame(userChoice) {


  if (roundNumber === maxRounds) {
        return;
    }

    var computerChoice = getComputerChoice();

    showChoices(userChoice, computerChoice);

    decideWinner(userChoice, computerChoice);

    roundNumber = roundNumber + 1;

    updateRoundDisplay();

    if (roundNumber === maxRounds) {
        endGame();
    }
}




function getComputerChoice() {

    var randomNumber =
        Math.floor(Math.random() * 3);

    return choices[randomNumber];
}




function showChoices(userChoice, computerChoice) {

    document.getElementById("displayChoices").innerHTML =
        userName + " chose " + userChoice +
        " | Empire chose " + computerChoice;
}




function decideWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        document.getElementById("roundResult").innerHTML =
            "This round is a draw!";
    }

    else if (
        (userChoice === "lightsaber" && computerChoice === "blaster") ||
        (userChoice === "blaster" && computerChoice === "force") ||
        (userChoice === "force" && computerChoice === "lightsaber")
    ) {
        userWins = userWins + 1;

        document.getElementById("roundResult").innerHTML =
            userName + " wins this round!";
    }

    else {
        computerWins = computerWins + 1;

        document.getElementById("roundResult").innerHTML =
            "Empire wins this round!";
    }

    updateScore();
}




function updateScore() {

    document.getElementById("userScore").innerHTML =
        "Your Wins: " + userWins;

    document.getElementById("computerScore").innerHTML =
        "Empire Wins: " + computerWins;
}




function updateRoundDisplay() {

    document.getElementById("roundDisplay").innerHTML =
        "Round: " + roundNumber + " / " + maxRounds;
}




function endGame() {

    var randomWin =
        Math.floor(Math.random() * winMessages.length);

    var randomLose =
        Math.floor(Math.random() * loseMessages.length);

    if (userWins > computerWins) {

        document.getElementById("finalResult").innerHTML =
            userName + " wins the galaxy! " +
            winMessages[randomWin];
    }

    else if (computerWins > userWins) {

        document.getElementById("finalResult").innerHTML =
            "Empire wins the galaxy! " +
            loseMessages[randomLose];
    }

    else {

        document.getElementById("finalResult").innerHTML =
            "The galaxy remains in balance.";
    }

    document.getElementById("resetBtn").style.display =
        "inline-block";
}




function resetGame() {

    userWins = 0;
    computerWins = 0;
    roundNumber = 0;

    document.getElementById("userScore").innerHTML =
        "Your Wins: 0";

    document.getElementById("computerScore").innerHTML =
        "Empire Wins: 0";

    document.getElementById("displayChoices").innerHTML = "";
    document.getElementById("roundResult").innerHTML = "";
    document.getElementById("finalResult").innerHTML = "";

    document.getElementById("resetBtn").style.display =
        "none";

    updateRoundDisplay();
}
