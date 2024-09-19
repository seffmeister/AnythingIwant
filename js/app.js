const textField0 = document.getElementById("text0");
textField0.innerHTML = showStylizedScore(7);



function showscore(inputNumber) {
  return inputNumber * 100;
}


function showStylizedScore(scoreInput) {
  return 'Your Score is bad:' + scoreInput * 100;
}
