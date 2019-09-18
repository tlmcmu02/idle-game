var score = 0;
var item = 0;

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var scr = new Text(score);                    // Create a text element

createButton('Button', btnPress);
createButton('Button', btn2Press);
createButton('Button', btn3Press);
createButton('Button', btn4Press);
changeTitle('Clicker Game');



function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
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
