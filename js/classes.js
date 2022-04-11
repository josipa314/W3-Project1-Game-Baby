/*my game needs:
A player who has to catch the 4 elements (I will call them Necessities) to satisfy the baby in a short timeframe: milk, diaper, toy, nap time. 
Otherwise baby cries and you loose
I wanted to have a nanny or mommy run right left to catch all the necessities. 
Other option maybe more simple for me: have the baby be the player and have to catch the elements he needs
So either 3 class in total or just 2. 

*/

class Game {
    constructor(){
        this.baby=null;
       }

    start() {
        this.baby = new Baby;

    }

    moveBaby(direction){
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
        this.positionX=0;
        this.positionY=0;
        
    }
}

class babyBottle extends Necessities {

}

class diaper extends Necessities {
    
}

class toy extends Necessities {
    
}

class napTime extends Necessities {
    
}
//just to test the code:
//myBaby = new Baby;
//myBaby.moveRight();


