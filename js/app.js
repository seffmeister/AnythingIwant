//Document elements
const textField0 = document.getElementById("text0");
//textField0.innerHTML = showStylizedScore(7);
const textField1 = document.getElementById("text1");

const increaseScoreButton = document.getElementById("button0");
const decreaseScoreButton = document.getElementById("button1");

//Internal variables
let score = 0;


//Process (what is going to happen in what sequence)
increaseScoreButton.addEventListener("click", function() {
increaseScoreByOne ();
});
decreaseScoreButton.addEventListener("click", function() {
  decreaseScoreByOne ();
});

// Controllers
//function showscore(inputNumber) {
//  return inputNumber * 100;
//}
//function showStylizedScore(scoreInput) {
//  return 'Your Score is bad:' + scoreInput * 100;
//}

function increaseScoreByOne() {
  score++;
  updateScoreText (score);
}
function decreaseScoreByOne() {
  score--;
  updateScoreText (score);
}
function checkScoreForSeven () {
  if (score >= 7) {
    changeScoreColorToGreen();
  }
}


// View
function updateScoreText(newText) {
  textField0.innerHTML = newText;
}
function updateStatusText(newText) {
  textField1.innerHTML = newText;
}
