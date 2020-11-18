class Form2 {
    constructor() {
      this.Lisa = createElement('h3');
      this.Jennie = createElement('h3');
      this.Jisoo = createElement('h3');
      this.Rose = createElement('h3');
      this.info = createElement('h3');
    }
  
    display(){
      this.Lisa.html("Lalisa Manoban (Stage name - Lisa) is the lead dancer and rapper of blackpink. She is the from Thailand unlike the rest of the members. She is multi-lingual and can speak Korean, Japanese, Thai, Chinese and even English");
      this.Lisa.position(200, 100);
      this.Jennie.html("Kim Jennie (Stage name - Jennie) is the lead vocalist, rapper and the face of the group. She is the only one to have a solo song in the group called 'Solo' and is exremely famous for it.");
      this.Jennie.position(200, 250);
      this.Jisoo.html("Kim Jisoo (Stage name - Jisoo) is the visual of the group and also the lead vocalist. She is the 'Unnie' (older sister) of the group and cosiders the rest of the members her responsibility. She is the only member of Blackpink who can't speak English fluently but she can speak Korean, Japanese and Chinese fluently.");
      this.Jisoo.position(200, 400);
      this.Rose.position(200, 550);
      this.Rose.html("Park Chaeyoung (Stage name - Rosé) is the main vocalist and lead dancer of the group. She was born and brought up in Australia but is from Korea.");
    }
  }