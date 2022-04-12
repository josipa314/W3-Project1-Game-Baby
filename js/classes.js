/*my game needs:
A player who has to catch the 4 elements (I will call them Necessities) to satisfy the baby in a short timeframe: 
milk, diaper, toy, nap time. 
Otherwise baby cries and you loose
I wanted to have a nanny or mommy run right left to catch all the necessities. 
Other option maybe more simple for me: have the baby be the player and have to catch the elements he needs
So either 3 class in total or just 2. 
My game also needs a Timer/Chronometer

*/

class Game {
    constructor(createHTMLelement) {
        this.baby = null;
        this.babyElement = createHTMLelement;
        this.bottle = null;
        this.BottleElement = createHTMLelement;
        this.diaper = null;
        this.DiaperElement = createHTMLelement;
        this.toy = null;
        this.ToyElement = createHTMLelement;
        this.nap = null;
        this.NapElement = createHTMLelement;
       }

    start() {
        //needs to create a new baby
        this.baby = new Baby;
        //needs to put a new baby html element into my html
        this.createBabyElement=createHTMLelement(div,baby);
        //needs to create new Necessities
        //there is 4 of them
        //and for each the corresponding html element
        this.bottle = new BabyBottle;
        this.BottleElement = this.createHTMLelement(div,bottle);
        this.diaper = new Diaper;
        this.DiaperElement = this.createHTMLelement(div,diaper);
        this.toy = new Toy; 
        this.ToyElement = this.createHTMLelement(div,toy);
        this.nap = new NapTime;
        this.NapElement = this.createHTMLelement(div,naptime);

    }

    moveBaby(direction) {
        if (direction==="right") {
            this.baby.moveRight();
        }
        else if (direction==="left") {
            this.baby.moveLeft();
        }
    }
}


class Baby {
//baby has to be able to change positions in order to catch the elements he needs
    constructor(){
     this.positionX=0;
    }

    moveRight(){
     this.positionX++;
     
     //console.log just to test the code:
     console.log(`baby moving to the right ${this.positionX}`)
    }

    moveLeft(){
    this.positionX--;

    //console.log just to test the code:
    console.log(`baby moving to the left ${this.positionX}`)
    }
}


//obstacle was not the right term for my game: my obstacles are elements that the player must catch
//each has to be able to change positions
//I need 4 different necessities for each game start: milk bottle, diaper, nap time, toy

class Necessities {
    constructor() {
        this.positionY=100;
        this.positionX=20;
        
    }
   
       moveDown(){
       this.positionY--;
   
       //console.log just to test the code:
       console.log(`necessity moving down ${this.positionY}`)
       }
}

class BabyBottle extends Necessities {
    constructor() {
        super();
        this.positionX=30;
    }
}

class Diaper extends Necessities {
    constructor() {
        super();
        this.positionX=50;
    }
}

class Toy extends Necessities {
    constructor() {
        super();
        this.positionX=70;
    }
}


class NapTime extends Necessities {
    constructor() {
        super();
        this.positionX=90;
    }
}
//just to test the code: create an instance of Baby and apply it the method
//myBaby = new Baby;
//myBaby.moveRight();


