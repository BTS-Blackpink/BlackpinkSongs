class Game {
  constructor(){
  }

  async start(){
      form = new Form()
      form.display();
    }

  play(){
    form.hide();
    drawSprites();
  }
}