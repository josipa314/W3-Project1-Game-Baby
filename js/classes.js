console.log("Welcome to the Baby Survival Tips Game");
/*my game needs:
A player who has to catch the 4 elements (I will call them Necessities) to satisfy the baby in a short timeframe: 
milk, diaper, toy, nap time. Otherwise baby cries and you loose
I wanted to have a nanny or mommy run right left to catch all the necessities. 
But took an option more simple for me: have the baby be the player and have to catch the elements he needs
So just 3 class (and 4 child classes of one)) 
My game also needs a Timer/Chronometer (done at the last step)
*/

///////////////////////////////////////////////////////
//First here I put the classes:
//////////////////////////////////////////////////////
//The Baby is the player of my Game
class Baby {
    //baby has to be able to change positions in order to catch the elements he needs
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.width = 20;
        this.height = 30;
        this.domElement = null;
    }

    moveBabyRight() {
        this.positionX++;
        /* console.log(`baby moving to the right ${this.positionX}`) */
    }

    moveBabyLeft() {
        this.positionX--;
        /* console.log(`baby moving to the left ${this.positionX}`) */
    }
}


//My Baby (the player) must catch 4 different necessities: milk bottle, diaper, nap time, toy
class Necessities {
    constructor() {
        this.positionY = 100;
        this.domElement = null;
        this.width = 10;
        this.height = 30;
    }

    moveDown() {
        this.positionY--;
        /* console.log(`necessity moving down ${this.positionY}`) */
    }
}

class Bottle extends Necessities {
    constructor() {
        super();
        this.positionX = Math.floor(Math.random()*100);
    }
}

class Diaper extends Necessities {
    constructor() {
        super();
        this.positionX = Math.floor(Math.random()*100);;
    }
}

class Toy extends Necessities {
    constructor() {
        super();
        this.positionX = Math.floor(Math.random()*100);;
    }
}

class Nap extends Necessities {
    constructor() {
        super();
        this.positionX = Math.floor(Math.random()*100);;
    }
}
//Here the Game class that contains all the functions/methods
class Game {
    constructor() {
        this.baby = null;
        this.bottles = [];
        this.diapers = [];
        this.toys = [];
        this.naps = [];
        this.timer = 0;
        this.collectedItems = [];
    }

    createHTMLelement(idName) {
        let newElem = document.createElement("div");
        let parentElem = document.getElementById("babyroom");
        parentElem.appendChild(newElem);
        newElem.id = idName;
        return newElem;
    }

    drawHTMLelement(element) {
        element.domElement.style.bottom = element.positionY + "vh";
        element.domElement.style.left = element.positionX + "vh";
    }

    detectNecessityOutsideOfScope(element) {
        if (element.positionY < 0) {
            this.removeNecessity(element);
        }
    }

    removeNecessity(element) {
        /* this.elements.shift();  */
        element.domElement.remove();
    }

    detectInterception(necessity) {
        let objectName = necessity.domElement.id;
       
        if (this.baby.positionX < necessity.positionX + necessity.width &&
            this.baby.positionX + this.baby.width > necessity.positionX &&
            this.baby.positionY < necessity.positionY + necessity.height &&
            this.baby.height + this.baby.positionY > necessity.positionY) {

            this.removeNecessity(necessity);

            if (!this.collectedItems.includes(objectName)) {
                this.collectedItems.push(objectName);        
                console.log(this.collectedItems);
            }

            if (this.collectedItems.length==4) {
                /* this.createHTMLelement("win"); */
                window.location.href = "../win.html";
 /*                clearInterval(intervalBottle);
                clearInterval(intervalDiaper);
                clearInterval(intervalToy);
                clearInterval(intervalNap); */
            }

        }
    }


start() {
    //need to create a new baby
    this.baby = new Baby();
    /* 
 *///just to check what is containing this.baby
    //need to create baby html element and put it into my html
    this.baby.domElement = this.createHTMLelement("baby");
    //than draw the baby html element
    this.drawHTMLelement(this.baby);
    /*  console.log(this.baby.domElement); */

    //Now the necessity BOTTLE: creation and moving down
    const intervalBottle= setInterval(() => {
        // create new bottles         
        if (this.timer % 30 === 0) {
            let newBottle = new Bottle();
            /*  console.log(newBottle); */
            newBottle.domElement = this.createHTMLelement("bottle");
            this.bottles.push(newBottle);
        }
        //move bottles down
        this.bottles.forEach((bottle) => {
            bottle.moveDown();
            this.drawHTMLelement(bottle);
            this.detectNecessityOutsideOfScope(bottle);
            this.detectInterception(bottle);
        });
        this.timer++
    }, 140);

    //Now the necessity DIAPER: creation and moving down
    const intervalDiaper= setInterval(() => {
        if (this.timer % 40 === 0) {
            let newDiaper = new Diaper();
            /*  console.log(newDiaper); */
            newDiaper.domElement = this.createHTMLelement("diaper");
            this.diapers.push(newDiaper);
        }
        this.diapers.forEach((diaper) => {
            diaper.moveDown();
            this.drawHTMLelement(diaper);
            this.detectNecessityOutsideOfScope(diaper);
            this.detectInterception(diaper);
        });
        this.timer++
    }, 110);

    //Now the necessity TOY: creation and moving down
    const intervalToy= setInterval(() => {
        if (this.timer % 60 === 0) {
            let newToy = new Toy();
            /*  console.log(newToy); */
            newToy.domElement = this.createHTMLelement("toy");
            this.toys.push(newToy);
        }
        this.toys.forEach((toy) => {
            toy.moveDown();
            this.drawHTMLelement(toy);
            this.detectNecessityOutsideOfScope(toy);
            this.detectInterception(toy);
        });
        this.timer++
    }, 130);

    //Now the necessity NAP: creation and moving down
    const intervalNap= setInterval(() => {
        if (this.timer % 20 === 0) {
            let newNap = new Nap();
            /*  console.log(newNap); */
            newNap.domElement = this.createHTMLelement("nap");
            this.naps.push(newNap);
        }
        this.naps.forEach((nap) => {
            nap.moveDown();
            this.drawHTMLelement(nap);
            this.detectNecessityOutsideOfScope(nap);
            this.detectInterception(nap);
        });
        this.timer++;
    }, 100);

}


moveBaby(direction) {
    if (direction === "right") {
        this.baby.moveBabyRight();
    }
    else if (direction === "left") {
        this.baby.moveBabyLeft();
    }
    //than we need to make the html elements also move (which means modifying the CSS)
    //let affect to the element created its positions:
    this.drawHTMLelement(this.baby);
}

}

//Here create the dom interaction when you use your keyboard Right & Left to move the baby
document.addEventListener("keydown", function (event) {
    //in order to find what is the info displayed when we press a key, we have to console.log the event
    /* console.log(event); */
    if (event.key === "ArrowRight") {
        //need to move the baby right
        game.moveBaby("right");
    }
    else if (event.key === "ArrowLeft") {
        //need to move the baby left
        game.moveBaby("left");
    }

})

///////////////////////////////////////////////////////
//Here the functions that launch the game:
//////////////////////////////////////////////////////

//Than I need to start the game: by creating a new instance of it, and applying it the start method
//meaning the creation of a new baby, and all the necessities
const game = new Game();
game.start();


