class Form {
  constructor() {
    this.button = createButton('Click to see all blackpink songs');
    this.title = createElement('h1');
    this.description = createElement('p');
    this.description1 = createElement('p');
  }

  display(){
    this.title.html("Blackpink");
    this.title.position(displayWidth/2-80, 70);
    this.title.style('fontSize:xx-large');
    
    this.button.position(displayWidth/2 - 100, displayHeight/2);

    this.description.html("In this site, you can see the links to all the blackpink songs MVs, Dance practice/Dance performance and Audios.");
    this.description.position(displayWidth/2 - 400, 200);
    this.description.style('fontSize:large');
    this.description1.html("Click on the link below, to see all of your favourite songs in one place.");
    this.description1.position(displayWidth/2 - 250, 300);
    this.description1.style('fontSize:large');

    this.button.mousePressed(()=>{
      this.button.hide();
      this.title.hide();
      this.description.hide();
      this.description1.hide();
      gameState = 1;
      console.log(gameState);
    });
  }
}