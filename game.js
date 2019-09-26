var wood = 0;
var stone = 0;
var iron = 0;
var redstone = 0;
var diamond = 0;
var craft = 0;
var stick = 0;
var explore = 0;
//var biome = 0;
var pickaxedurability = -1;
var stonepickaxe = 0;
var ironpickaxe = 0;
var diamondpickaxe = 0;

//var biome = ['mush', 'jung', 'village', 'ocean'];

var title = new Title('Welcome to the Game'); // Create a title element

var gatherwood = new Button('Wood', btn1Press);   // Create a button element
var makestick = new Button('Stick', btn7Press);
var pickaxe = new Button('Pickaxe', btn9Press);
var gatherstone = new Button('Stone', btn2Press);
var gatheriron = new Button('Iron', btn3Press);
var gatherredstone = new Button('Copper',btn4Press);
var gatherdiamond = new Button('Diamond', btn5Press);
var woodfarm = new Button('Wood Farm', btnPress);
var makecraft = new Button('Workbench', btn6Press);
var stonepick = new Button('Upgrade Pickaxe To Stone', btn10Press)
var ironpick = new Button('Upgrade Pickaxe To Iron', btn11Press)
var diamondpick = new Button('Upgrade Pickaxe To Diamond', btn12Press);
//var explorebutton = new Button('Explore', btn8Press);

var crft = new Text(craft);  
var pck = new Text('Durability ' + pickaxedurability);
var stnpck = new Text(stonepickaxe);
var irnpck = new Text(ironpickaxe);
var dmndpck = new Text(diamondpickaxe);
var wd = new Text('Wood ' + wood);                    // Create a text element
var stck = new Text('Stick ' + stick);
var stn = new Text('Stone ' + stone); 
var irn = new Text('Iron ' + iron);  
var rdstn = new Text('Copper ' + redstone); 
var dmnd = new Text('Diamond ' + diamond); 


gatherstone.hide();
gatheriron.hide();
gatherredstone.hide();
gatherdiamond.hide();
woodfarm.hide();
makecraft.hide();
makestick.hide();
pickaxe.hide();
stonepick.hide();
ironpick.hide();
diamondpick.hide();

function btn1Press() {
  wood++;         // Increase the score
  wd.edit('Wood ' + wood); // Update the page with the new score
}

function btn12Press() {
  if (diamond > 2) {
    if (stick > 1) {
      diamondpickaxe = 1
      diamond = diamond - 3
      stick = stick - 2
      dmnd.edit('Diamond ' + diamond);
      stck.edit('Stick ' + stick);
      pickaxedurability = pickaxedurability + 100
      pck.edit('Durability ' + pickaxedurability);
    }
  }
}

function btn11Press() {
  if (iron > 2) {
    if (stick > 1) {
      ironpickaxe = 1
      iron = iron - 3
      stick = stick - 2
      irn.edit('Iron ' + iron);
      stck.edit('Stick ' + stick);
      pickaxedurability = pickaxedurability + 50
      pck.edit('Durability ' + pickaxedurability);
    }
  }
}

function btn10Press() {
  if (stone > 2) {
    if (stick > 1) {
      stonepickaxe = 1
      stone = stone - 3
      stick = stick - 2
      stn.edit('Stone ' + stone);
      stck.edit('Stick ' + stick);
      pickaxedurability = pickaxedurability + 20
      pck.edit('Durability ' + pickaxedurability);
    }
  }
}
//function btn8Press() {
  //let index = random(0, 4);
  //biomevar = biome[index];        
  //dmnd.edit(diamond); 
//}

function btn7Press() {
  if (wood > 1){
  stick++;         // Increase the score
  stck.edit('Stick ' + stick); // Update the page with the new score
  wood = wood - 2
  wd.edit('Wood ' + wood);
  }
}

function btn9Press() {
  if (wood > 2){
    if (stick > 1){
      pickaxedurability = pickaxedurability + 10
      pck.edit('Durability ' + pickaxedurability);
      wood = wood - 3
      stick = stick - 2
      stck.edit('Stick ' + stick);
      wd.edit('Wood ' + wood);
    }
  }
}

function btn6Press() {
  if (wood > 3){
  craft++;         // Increase the score
  wood = wood - 4
  wd.edit('Wood ' + wood);
  }
}

function btn2Press() {
  if (pickaxedurability > 0){
  stone++;         // Increase the score
  stn.edit('Stone ' + stone); // Update the page with the new score
  pickaxedurability--;
  pck.edit('Durability ' + pickaxedurability);
  }
}

function btn3Press() {
  if (stonepickaxe > 0){
    if (pickaxedurability > 0){
      iron++;         // Increase the score
      irn.edit('Iron ' + iron); // Update the page with the new score
      pickaxedurability--;
      pck.edit('Durability ' + pickaxedurability);
    }
  }
}

function btn4Press() {
  if (ironpickaxe > 0) {
    if (pickaxedurability > 0) {
      redstone++;         // Increase the score
      rdstn.edit('Copper ' + redstone); // Update the page with the new score
      pickaxedurability--;
      pck.edit('Durability ' + pickaxedurability);
    }
  }
}

function btn5Press() {
  if (ironpickaxe > 0) {
    if (pickaxedurability > 0) {
      diamond++;         // Increase the score
      dmnd.edit('Diamond ' + diamond); // Update the page with the new score
      pickaxedurability--;
      pck.edit('Durability ' + pickaxedurability);
    }
  }
}

setInterval(checkstck, 100);
setInterval(checkwd, 100);
setInterval(checkcrft, 100);
setInterval(checkstn, 100);
setInterval(checkirn, 100);
setInterval(checkrdstn, 100);
setInterval(checkpick, 100);
setInterval(checkstnpick, 100);
setInterval(checkirnpick, 100);
setInterval(checkdmndpick, 100);
setInterval(check69, 1)
setInterval(checkLose, 1);

function checkstck(){
  if (wood > 1){
    makestick.show();
  }
}

function checkpick(){
  if (wood > 2){
    if (stick > 1){
      if(craft > 0){
        pickaxe.show();
      }
    }
  }
}

function checkstnpick(){
  if (stone > 2){
    if (stick > 1){
      if(craft > 0){
        stonepick.show();
      }
    }
  }
}

function checkirnpick(){
  if (iron > 2){
    if (stick > 1){
      if(craft > 0){
        ironpick.show();
      }
    }
  }
}

function checkdmndpick(){
  if (diamond > 2){
    if (stick > 1){
      if(craft > 0){
        diamondpick.show();
      }
    }
  }
}

function checkwd(){
  if (wood > 3){
    makecraft.show();
  }
}

function checkcrft(){
  if (pickaxedurability > 0){
    gatherstone.show();
  }
}

function checkstn(){
  if (stonepickaxe > 0){
    gatheriron.show();
  }
}

function checkirn(){
  if (ironpickaxe > 0){
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
    wd.edit('Wood ' + wood);
    rdstn.edit(redstone);
  }
}

function checkLose(){
  if (pickaxedurability == 0) {
   wd.edit('You Lost');
    stn.edit('You Lost');
   irn.edit('You Lost');
     rdstn.edit('You Lost');
   dmnd.edit('You Lost');
   stck.edit('You Lost');
   btn80Press();
  }
}

function check69(){
  if (wood == 69){
    if (stone == 69){
     if (iron == 69){
        if (redstone == 69){
          if (diamond == 69){
            if (stick == 69){
              wd.edit('nice.');
              stn.edit('nice.');
              irn.edit('nice.');
              rdstn.edit('nice.');
              dmnd.edit('nice.');
              stck.edit('nice.');
              }
          }
        }
      }
    }
  }
}
