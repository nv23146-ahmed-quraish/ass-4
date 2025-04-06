function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 1/3) {
    return "rock";
  } else if (randomNum < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log("Computer Choice:", getComputerChoice());

function getHumanChoice() {
  const userInput = prompt("Enter Rock, Paper, or Scissors:");
  return userInput.toLowerCase();
}

console.log("Human Choice:", getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice;

  if (human === computer) {
    console.log("It's a tie!");
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    console.log(`You win! ${human} beats ${computer}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computer} beats ${human}`);
    computerScore++;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice;

    if (human === computer) {
      console.log("It's a tie!");
    } else if (
      (human === "rock" && computer === "scissors") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissors" && computer === "paper")
    ) {
      console.log(`You win! ${human} beats ${computer}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computer} beats ${human}`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  }

  console.log("Final Results:");
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}


playGame();
