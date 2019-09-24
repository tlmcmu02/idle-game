var wood = 0;
var stone = 0;
var iron = 0;
var redstone = 0;
var diamond = 0;
var craft = 0;
var stick = 0;
var explore = 0;

var title = new Title('Welcome to the Game'); // Create a title element

var gatherwood = new Button('Wood', btn1Press);   // Create a button element
var gatherstone = new Button('Stone', btn2Press);
var gatheriron = new Button('Iron', btn3Press);
var gatherredstone = new Button('Copper',btn4Press);
var gatherdiamond = new Button('Diamond', btn5Press);
var woodfarm = new Button('Wood Farm', btnPress);
var makecraft = new Button('Workbench', btn6Press);
var makestick = new Button('Stick', btn7Press);
var explorebutton = new Button('Explore', btn7Press);

var crft = new Text(craft);  
var wd = new Text(wood);                    // Create a text element
var stck = new Text(stick);
var stn = new Text(stone); 
var irn = new Text(iron);  
var rdstn = new Text(redstone); 
var dmnd = new Text(diamond); 

gatherstone.hide();
gatheriron.hide();
gatherredstone.hide();
gatherdiamond.hide();
woodfarm.hide();
makecraft.hide();
makestick.hide();

function btn1Press() {
  wood++;         // Increase the score
  wd.edit(wood); // Update the page with the new score
}

function btn7Press() {
  stick++;         // Increase the score
  stck.edit(stick); // Update the page with the new score
}


function btn6Press() {
  craft++;         // Increase the score
  crft.edit(craft); // Update the page with the new score
}

function btn2Press() {
  stone++;         // Increase the score
  stn.edit(stone); // Update the page with the new score
}

function btn3Press() {
  iron++;         // Increase the score
  irn.edit(iron); // Update the page with the new score
}

function btn4Press() {
  redstone++;         // Increase the score
  rdstn.edit(redstone); // Update the page with the new score
}

function btn5Press() {
  diamond++;         // Increase the score
  dmnd.edit(diamond); // Update the page with the new score
}

setInterval(checkstck, 100);
setInterval(checkwd, 100);
setInterval(checkcrft, 100);
setInterval(checkstn, 100);
setInterval(checkirn, 100);
setInterval(checkrdstn, 100);

function checkstck(){
  if (wood > 2){
    makestick.show();
  }
}

function checkwd(){
  if (wood > 4){
    makecraft.show();
  }
}

function checkcrft(){
  if (craft > 0){
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
  if (redstone > 49) {
  redstone = redstone - 50 
    setInterval(btn1Press, 1000);
    wd.edit(wood);
    rdstn.edit(redstone);
  }
}
