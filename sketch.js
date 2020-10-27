var gameState = 0;
var form, form1;
function setup() {
  createCanvas(displayWidth, displayHeight + 400);
  form = new Form();
  form.display();
}

function draw() {
  background("#F7A6B9");
   
  if (gameState === 1){
    form1 = new Form1();
    form1.display();
  } 
}
