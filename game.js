var score = 0;
var item = 0;

postToPage(score);

createButton('Button', btnPress);
createButton('Button', btn2Press);
createButton('Button', btn3Press);
createButton('Button', btn4Press);
changeTitle('Clicker Game');



function btnPress() {
  score++;
  postToPage(score);
}

function btn2Press() {
  score--;
  postToPage(score);
}

function btn3Press() {
  if (score > 49){
    score = score - 50
    score++;  
    item = 5
    postToPage(score);
  }
}

if (item = 5){
   score++;
}
