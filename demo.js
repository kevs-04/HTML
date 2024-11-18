let secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let attempts = 0;

function guessNumber() {
  let guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (guess === secretNumber) {
    document.getElementById("result").textContent =
      "Congratulations! You guessed the number in " + attempts + " attempts.";
  } else if (guess < secretNumber) {
    document.getElementById("result").textContent = "Too low! Try again.";
  } else {
    document.getElementById("result").textContent = "Too high! Try again.";
  }
}
