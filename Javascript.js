// Select elements and score display
let score = 0;
const scoreDisplay = document.getElementById("score");

// Function to update score
function updateScore(points) {
  score += points;
  scoreDisplay.innerText = score;
}

// Function to handle click events on elements
const elements = document.querySelectorAll(".element");

elements.forEach(element => {
  element.addEventListener("click", () => {
    const points = parseInt(element.getAttribute("data-points"));
    updateScore(points);
  });
});
