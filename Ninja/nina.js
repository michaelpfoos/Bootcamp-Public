class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`This Ninja's Name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`health: ${this.health}`);
        console.log(`speed: ${this.speed}`);
        console.log(`strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);        
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    showStats() {
        super.showStats();       
    }

    speakWisdom() {
        super.drinkSake();
        const message = "Why not learn Web Development at 40.  Youv'e got nothing better to do!";
        console.log(message);
    }

}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

sensei1 = new Sensei("Bob");

sensei1.speakWisdom();
sensei1.showStats();