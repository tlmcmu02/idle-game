var wood = 0;
var stone = 0;
var iron = 0;
var redstone = 0;
var diamond = 0;


var item = 0;

var title = new Title('Welcome to the Game'); // Create a title element

var gatherwood = new Button('Wood', btn1Press);   // Create a button element
var gatherstone = new Button('Stone', btn2Press);
var gatheriron = new Button('Iron', btn3Press);
var gatherredstone = new Button('Copper',btn4Press);
var gatherdiamond = new Button('Diamond', btn5Press);
var woodfarm = new Button('+1CPS', btnPress);

var wd = new Text(wood);                    // Create a text element
var stn = new Text(stone); 
var irn = new Text(iron);  
var rdstn = new Text(redstone); 
var dmnd = new Text(diamond); 

gatherstone.hide();
gatheriron.hide();
gatherredstone.hide();
gatherdiamond.hide();
woodfarm.hide();

function btn1Press() {
  wood++;         // Increase the score
  wd.edit(wood); // Update the page with the new score
  postToPage(wood);
}

function btn2Press() {
  stone++;         // Increase the score
  stn.edit(stone); // Update the page with the new score
  postToPage(stone);
}

function btn3Press() {
  iron++;         // Increase the score
  irn.edit(iron); // Update the page with the new score
  postToPage(iron);
}

function btn4Press() {
  redstone++;         // Increase the score
  rdstn.edit(redstone); // Update the page with the new score
  postToPage(redstone);
}

function btn5Press() {
  diamond++;         // Increase the score
  dmnd.edit(diamond); // Update the page with the new score
  postToPage(diamond);
}

setInterval(checkstn, 100);
setInterval(checkrdstn, 100);
setInterval(checkirn, 100);
setInterval(checkwd, 100);

function checkwd(){
  if (wood > 50){
    gatherstone.show();
  }
}

function checkstn(){
  if (stone > 50){
    gatheriron.show();
  }
}

function checkirn(){
  if (iron > 50){
    gatherredstone.show();
    gatherdiamond.show();
  }
}

function checkrdstn(){
  if (redstone > 50){
    woodfarm.show();
  }
}

function btnPress() {
  if (wood > 49){
    wood = wood - 50 
    setInterval(btn1Press, 1000);
    postToPage(wood);
  }
}
