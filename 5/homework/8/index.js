// make Classes
class Player{
	constructor(Name,Country){
			this.Name=Name;
			this.Country=Country;
	}
	tellYou(text=`${this.Name} was born in ${this.Country}`) {
		console.log(text);
		
	}
}

class TennisPlayer extends Player {
	constructor(Name,Country,Age){
			super(Name,Country);
			this.Age=Age;
	}
    tellYouPlus(text=`${this.Name} is ${this.Age} years old and knows how to play Tennis`){
        console.log(text);
    }
}

let sion = new TennisPlayer('Rafael Nadal',34);
let ZION = new Player('Messi','Argentina');
// console.log(ZION);

ZION.tellYou();
sion.tellYouPlus();
