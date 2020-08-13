class Man extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("pics/man1.png");
    var engine = {
      friction:50,
      restitution:2
    }
  }


};