//Document elements
const textField0 = document.getElementById("text0");
//textField0.innerHTML = showStylizedScore(7);
const textField1 = document.getElementById("text1");

//Internal variables
let score = 0;

increaseScoreByOne();


// Controllers
//function showscore(inputNumber) {
//  return inputNumber * 100;
//}
//function showStylizedScore(scoreInput) {
//  return 'Your Score is bad:' + scoreInput * 100;
//}

function inreaseScoreByOne() {
  score++;
  updateScoreText (score);
}

// View
function updateScoreText(newText) {
  textField0.innerHTML = newText;
}
function updateStatusText(newText) {
  textField1.innerHTML = newText;
}
