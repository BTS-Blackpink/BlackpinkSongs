class Form1 {
    constructor() {
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      this.header1 = createElement('h2');
      this.header2 = createElement('h2');
      this.header3 = createElement('h2');
      
      //audios
      this.a = createA('http://www.youtube.com/watch?v=rrBO9fy6A3s', "How you like that", "_self");
      this.b = createA('http://www.youtube.com/watch?v=ja_Rqf4AFR4', "Ice Cream feat.Selena Gomez", "_self");
      this.c = createA('http://www.youtube.com/watch?v=D8RZbI1jfQ0', "Lovesick Girls", "_self");
      this.d = createA('http://www.youtube.com/watch?v=gXBdvSj9F2I', "Bet you wanna feat.Cardi B", "_self");
      this.e = createA('http://www.youtube.com/watch?v=u7rKGj13pAs', "Crazy over you", "_self");
      this.f = createA('http://www.youtube.com/watch?v=wlzGXcTzdzU', "Love to hate me", "_self");
      this.g = createA('http://www.youtube.com/watch?v=4Kk_iaaHd_Y', "You never know", "_self");
      this.h = createA('http://www.youtube.com/watch?v=F8c8f2nK82w', "Pretty Savage", "_self");
      this.i = createA('http://www.youtube.com/watch?v=He322O1JWgU', "Really", "_self");
      this.j = createA('http://www.youtube.com/watch?v=FHn4P9Fyj0M', "Don't know what to do", "_self");
      this.k = createA('http://www.youtube.com/watch?v=IoiaAA4vNaI', "Stay", "_self");
      this.l = createA('http://www.youtube.com/watch?v=ei0k_1Uro-U', "Playing with fire", "_self");
      this.m = createA('http://www.youtube.com/watch?v=-gibBYpzZbI', "Forever young", "_self");
      this.n = createA('http://www.youtube.com/watch?v=IPzouyj7FLA', "Ddu du ddu du", "_self");
      this.o = createA('http://www.youtube.com/watch?v=x0-q6-PBpPU', "Whistle", "_self");
      this.p = createA('http://www.youtube.com/watch?v=TXeYZKqzkac', "As if it's your last", "_self");
      this.q = createA('http://www.youtube.com/watch?v=18nDrsoii5M', "Boombayah", "_self");
      this.r = createA('http://www.youtube.com/watch?v=Il_KNBTmLpQ', "Kill this love", "_self");
      this.s = createA('http://www.youtube.com/watch?v=fnPn6At3v28', "Sour Candy - Lady Gaga feat. Blackpink", "_self");
      this.t = createA('http://www.youtube.com/watch?v=AX3Bsiq-13k', "Kiss and make up - Dua Lipa feat. Blackpink", "_self");
      this.ae = createA('http://www.youtube.com/watch?v=-gZC9hC1PDQ', "Kick it", "_self");
      this.at = createA('http://www.youtube.com/watch?v=l6zMnMMzsss', "Hope not", "_self");
      this.au = createA('https://www.youtube.com/watch?v=4-4COoO5Qdg', "Solo", "_self");

      //MVs
      this.u = createA('http://www.youtube.com/watch?v=b73BI9eUkjM', "Solo - Jennie", "_self");
      this.v = createA('http://www.youtube.com/watch?v=ioNng23DkIM', "How you like that", "_self");
      this.w = createA('http://www.youtube.com/watch?v=vRXZj0DzXIA', "Ice cream", "_self");
      this.x = createA('http://www.youtube.com/watch?v=dyRsYk0LyA8', "Lovesick Girls", "_self");
      this.y = createA('http://www.youtube.com/watch?v=FzVR_fymZw4', "Stay", "_self");
      this.z = createA('http://www.youtube.com/watch?v=9pdj4iJD08s', "Playing with fire", "_self");
      this.aa = createA('http://www.youtube.com/watch?v=IHNzOHi8sJs', "Ddu du ddu du", "_self");
      this.ab = createA('http://www.youtube.com/watch?v=dISNgvVpWlo', "Whistle", "_self");
      this.ac = createA('http://www.youtube.com/watch?v=Amq-qlqbjYA', "As if it's your last", "_self");
      this.ad = createA('http://www.youtube.com/watch?v=bwmSjveL3Lc', "Boombayah", "_self");
      this.as = createA('http://www.youtube.com/watch?v=2S24-y0Ij3Y', "Kill this love", "_self");

      //Dance performance/Dance practice
      this.af = createA('http://www.youtube.com/watch?v=32si5cfrCNc', "How you like that", "_self");
      this.ag = createA('http://www.youtube.com/watch?v=27h9SJcIdM0', "Ice cream", "_self");
      this.ah = createA('http://www.youtube.com/watch?v=YxksUfnuEbI', "Lovesick girls", "_self");
      this.ai = createA('http://www.youtube.com/watch?v=bqzDuRz_P7g', "Don't know what to do", "_self");
      this.aj = createA('http://www.youtube.com/watch?v=NvWfJTbrTBY', "Playing with fire", "_self");
      this.ak = createA('http://www.youtube.com/watch?v=89kTb73csYg', "Forever young", "_self");
      this.al = createA('http://www.youtube.com/watch?v=jOJbXvjZ-cQ', "Ddu du ddu du", "_self");
      this.am = createA('http://www.youtube.com/watch?v=1kYrp_Bs8DU', "Whistle", "_self");
      this.an = createA('http://www.youtube.com/watch?v=hKUJmA9O6iA', "As if it's your last", "_self");
      this.ao = createA('http://www.youtube.com/watch?feature=youtu.be&v=ivoS3HUJB3Q&app=desktop', "Boombayah", "_self");
      this.ap = createA('http://www.youtube.com/watch?v=MOwaUlXZxkI', "Kill this love", "_self");
      this.aq = createA('http://www.youtube.com/watch?v=Ws5SOMeA3_E', "Solo", "_self");
      this.ar = createA('http://www.youtube.com/watch?v=Fc2qWBIToKU', "Sour Candy", "_self");
    }
   
    display(){
      this.title.html("Blackpink all songs");
      this.header1.html("Audio");
      this.header1.position(300, 200);
      this.header2.html("MV");
      this.header2.position(700, 200);
      this.header3.html("Dance performance / Dance practice / Lyric video / Performance video");
      this.header3.position(1100, 200);
      this.title.position(displayWidth/2 - 80, 70);
      /*this.title.style('color:blue');
      this.title.style('font-size:40');*/
      
      //audio
      this.a.position(300, 300);
      this.b.position(300, 350);
      this.c.position(300, 400);
      this.d.position(300, 450);
      this.e.position(300, 500);
      this.f.position(300, 550);
      this.g.position(300, 600);
      this.h.position(300, 650);
      this.i.position(300, 700);
      this.j.position(300, 750);
      this.k.position(300, 800);
      this.l.position(300, 850);
      this.m.position(300, 900);
      this.n.position(300, 950);
      this.o.position(300, 1000);
      this.p.position(300, 1050);
      this.q.position(300, 1100);
      this.r.position(300, 1150);
      this.s.position(300, 1400);
      this.t.position(300, 1350);
      this.ae.position(300, 1200);
      this.at.position(300, 1250);
      this.au.position(300, 1300);

      //MV
      this.u.position(700, 300);
      this.v.position(700, 350);
      this.w.position(700, 400);
      this.x.position(700, 450);
      this.y.position(700, 500);
      this.z.position(700, 550);
      this.aa.position(700, 600);
      this.ab.position(700, 650);
      this.ac.position(700, 700);
      this.ad.position(700, 750);
      this.as.position(700, 800);

      //Dance
      this.af.position(1100, 300);
      this.ag.position(1100, 350);
      this.ah.position(1100, 400);
      this.ai.position(1100, 450);
      this.aj.position(1100, 500);
      this.ak.position(1100, 550);
      this.al.position(1100, 600);
      this.am.position(1100, 650);
      this.an.position(1100, 700);
      this.ao.position(1100, 750);
      this.ap.position(1100, 800);
      this.aq.position(1100, 850);
      this.ar.position(1100, 900);
     }
  }