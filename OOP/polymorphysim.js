class House{
  constructor(){
    this.msg = "";
  }
    have(){
        this.msg = "House have Rooms,";
    }
}
class Rooms extends House{
    have(){  //overriding
        super.have();
        this.msg+= " Rooms have beds"
        console.log(this.msg);
    }
}
var room1 = new Rooms();
room1.have();