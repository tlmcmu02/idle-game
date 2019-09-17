var score = 0;

postToPage(score);

createButton('Button', btnPress);
createButton('Button', btn2Press);
createButton('Button', btn3Press);
createButton('Button', btn4Press);
changeTitle('Clicker Game');

setInterval(btnPress, 1000);

score--;

function btnPress() {
  score++;
  postToPage(score);
}

function btn2Press() {
  score--;
  postToPage(score);
}

if (score > 50){
  function btn3Press() {
    score++;
    postToPage(score);
  }
  
}

