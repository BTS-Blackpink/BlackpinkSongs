var gameState = 0;
var form, form1, form2;
function setup() {
  createCanvas(displayWidth, displayHeight + 600);
  form = new Form();
  form.display();
}

function draw() {
  background("#F7A6B9");
   
  if (gameState === 1){
    form1 = new Form1();
    form1.display();
  } 

  if (gameState === 2){
    form2 = new Form2();
    form2.display();
  } 
}
