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
