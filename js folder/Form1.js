class Form1 {
    constructor() {
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      this.header1 = createElement('h2');
      this.header2 = createElement('h2');
      this.header3 = createElement('h2');
      //audios
      this.a = createA('https://www.youtube.com/watch?v=rrBO9fy6A3s', "How you like that", "_self");
      this.b = createA('https://www.youtube.com/watch?v=ja_Rqf4AFR4', "Ice Cream feat.Selena Gomez", "_self");
      this.c = createA('https://www.youtube.com/watch?v=D8RZbI1jfQ0', "Lovesick Girls", "_self");
      this.d = createA('https://www.youtube.com/watch?v=gXBdvSj9F2I', "Bet you wanna feat.Cardi B", "_self");
      this.e = createA('https://www.youtube.com/watch?v=u7rKGj13pAs', "Crazy over you", "_self");
      this.f = createA('https://www.youtube.com/watch?v=wlzGXcTzdzU', "Love to hate me", "_self");
      this.g = createA('https://www.youtube.com/watch?v=4Kk_iaaHd_Y', "You never know", "_self");
      this.h = createA('https://www.youtube.com/watch?v=F8c8f2nK82w', "Pretty Savage", "_self");
      this.i = createA('https://www.youtube.com/watch?v=He322O1JWgU', "Really", "_self");
      this.j = createA('https://www.youtube.com/watch?v=FHn4P9Fyj0M', "Don't know what to do", "_self");
      this.k = createA('https://www.youtube.com/watch?v=IoiaAA4vNaI', "Stay", "_self");
      this.l = createA('https://www.youtube.com/watch?v=ei0k_1Uro-U', "Playing with fire", "_self");
      this.m = createA('https://www.youtube.com/watch?v=-gibBYpzZbI', "Forever young", "_self");
      this.n = createA('https://www.youtube.com/watch?v=IPzouyj7FLA', "Ddu du ddu du", "_self");
      this.o = createA('https://www.youtube.com/watch?v=x0-q6-PBpPU', "Whistle", "_self");
      this.p = createA('https://www.youtube.com/watch?v=TXeYZKqzkac', "As if it's your last", "_self");
      this.q = createA('https://www.youtube.com/watch?v=18nDrsoii5M', "Boombayah", "_self");
      this.r = createA('https://www.youtube.com/watch?v=Il_KNBTmLpQ', "Kill this love", "_self");
      this.s = createA('https://www.youtube.com/watch?v=fnPn6At3v28', "Sour Candy - Lady Gaga feat. Blackpink", "_self");
      this.t = createA('https://www.youtube.com/watch?v=AX3Bsiq-13k', "Kiss and make up - Dua Lipa feat. Blackpink", "_self");
      this.ae = createA('https://www.youtube.com/watch?v=-gZC9hC1PDQ', "Kick it", "_self");

      //MVs
      this.u = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Solo - Jennie", "_self");
      this.v = createA('https://www.youtube.com/watch?v=ioNng23DkIM', "How you like that", "_self");
      this.w = createA('https://www.youtube.com/watch?v=vRXZj0DzXIA', "Ice cream", "_self");

      this.x = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Lovesick Girls", "_self");
      this.y = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Stay", "_self");
      this.z = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Playing with fire", "_self");
      this.aa = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Ddu du ddu du", "_self");
      this.ab = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Whistle", "_self");
      this.ac = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "As if it's your last", "_self");
      this.ad = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Boombayah", "_self");

      //Dance performance/Dance practice
      this.af = createA('https://www.youtube.com/watch?v=32si5cfrCNc', "How you like that", "_self");
      this.ag = createA('https://www.youtube.com/watch?v=27h9SJcIdM0', "Ice cream", "_self");
      this.ah = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Lovesick girls", "_self");
      this.ai = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Don't know what to do", "_self");
      this.aj = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Playing with fire", "_self");
      this.ak = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Forever young", "_self");
      this.al = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Ddu du ddu du", "_self");
      this.am = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Whistle", "_self");
      this.an = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "As if it's your last", "_self");
      this.ao = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Boombayah", "_self");
      this.ap = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Kill this love", "_self");
      this.aq = createA('https://www.youtube.com/watch?v=b73BI9eUkjM', "Solo", "_self");
    }
   
    display(){
      this.title.html("Blackpink all songs");
      this.header1.html("Audio");
      this.header1.position(400, 200);
      this.header2.html("MV");
      this.header2.position(800, 200);
      this.header3.html("Dance performance / Dance practice");
      this.header3.position(1200, 200);
      this.title.position(displayWidth/2 - 80, 70);
      /*this.title.style('color:blue');
      this.title.style('font-size:40');*/
      
      //audio
      this.a.position(400, 300);
      this.b.position(400, 350);
      this.c.position(400, 400);
      this.d.position(400, 450);
      this.e.position(400, 500);
      this.f.position(400, 550);
      this.g.position(400, 600);
      this.h.position(400, 650);
      this.i.position(400, 700);
      this.j.position(400, 750);
      this.k.position(400, 800);
      this.l.position(400, 850);
      this.m.position(400, 900);
      this.n.position(400, 950);
      this.o.position(400, 1000);
      this.p.position(400, 1050);
      this.q.position(400, 1100);
      this.r.position(400, 1150);
      this.s.position(400, 1300);
      this.t.position(400, 1250);
      this.ae.position(400, 1200);

      //MV
      this.u.position(800, 300);
      this.v.position(800, 350);
      this.w.position(800, 400);
      this.x.position(800, 450);
      this.y.position(800, 500);
      this.z.position(800, 550);
      this.aa.position(800, 600);
      this.ab.position(800, 650);
      this.ac.position(800, 700);
      this.ad.position(800, 750);

      this.af.position(1200, 300);
      this.ag.position(1200, 350);
      this.ah.position(1200, 400);
      this.ai.position(1200, 450);
      this.aj.position(1200, 500);
      this.ak.position(1200, 550);
      this.al.position(1200, 600);
      this.am.position(1200, 650);
      this.an.position(1200, 700);
      this.ao.position(1200, 750);
      this.ap.position(1200, 800);
      this.aq.position(1200, 850);
     }
  }