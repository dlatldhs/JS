class Animal {
    constructor(type,legs) {// 생성자 만듬
        this.type = type;// 자기 자신
        this.legs = legs;
    }
    makeNoise(sound = "Loud Noise") {
        console.log(sound);
    }
    get type() {
        return this._type.toUpperCase();
    }
    set type(newType){
        if(newType){
            this._type = newType;
        }
    }
    static return10(){
        return 10;
    }
}

class Cat extends Animal {
    constructor(type,legs,tail){
        super(type, legs);
        this.tail = tail;
    }
    makeNoise(sound = "Meow"){
        console.log(sound);
    }
}

let cat = new Cat('cat',4,1);
cat.makeNoise();

let dog = new Animal('dog',4);
dog.makeNoise('BOW! BOW!');
dog.type = 'Sieba';
console.log(dog.type);