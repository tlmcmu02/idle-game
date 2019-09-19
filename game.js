var score = 0;
var item = 0;

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('+1', btnPress);   // Create a button element
var button2 = new Button('-1', btn2Press);
var button3 = new Button('+1CPS', btn3Press);
var scr = new Text(score);                    // Create a text element
var scr2 = new Text(score2);   

changeTitle('Clicker Game');




function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  postToPage(score);
}

function btn2Press() {
  score--;
  postToPage(score);
}

setInterval(check, 100);

function check(){
  if (score > 9){
    button3.show();
  }
  if (score < 10) {
    button3.hide();
  }
}
function btn3Press() {
  if (score > 10){
    score = score - 10 
    setInterval(btnPress, 1000);
    postToPage(score);
  }
}
