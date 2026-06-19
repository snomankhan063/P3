const getComputerChoice = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) return "rock";
  if (random === 1) return "paper";
  return "scissors";
};

const determineWinner = (user, computer) => {
  if (user === computer) return "Tie!";

  if (user === "rock")
    return computer === "paper" ? "Computer wins" : "You win";

  if (user === "paper")
    return computer === "scissors" ? "Computer wins" : "You win";

  if (user === "scissors")
    return computer === "rock" ? "Computer wins" : "You win";
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();

  const result = determineWinner(userChoice, computerChoice);

  document.getElementById("result").innerHTML =
    `You: ${userChoice} <br> Computer: ${computerChoice} <br><b>${result}</b>`;
};