var wood = 0;
var stone = 0;
var item = 0;

var title = new Title('Welcome to the Game'); // Create a title element
var gatherwood = new Button('+1Wood', btnPress);   // Create a button element
var button2 = new Button('+1CPS', btn2Press);
var wd = new Text(wood);                    // Create a text element
var stn = new Text(stone);   

button2.hide();

function btnPress() {
  wood++;         // Increase the score
  wd.edit(wood); // Update the page with the new score
  postToPage(wood);
}



setInterval(check, 100);

function check(){
  if (redstone > 50){
    button2.show();
  }
}

function btn2Press() {
  if (score > 49){
    score = score - 50 
    setInterval(btnPress, 1000);
    postToPage(score);
  }
}
