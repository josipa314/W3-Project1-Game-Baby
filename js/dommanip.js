console.log("Welcome to the Baby Survival Tips Game");

//Here I put the interaction with the DOM of the HTML

//First I need to start the game: by creating a new instance of it, and applying it the start method
const game= new Game;
game.start();


//create the dom interaction when you use your keyboard Right & Left
document.addEventListener("keydown",function(event){
   //in order to find what is the info displayed when we press a key, we have to console.log the event
   console.log(event);
   if (event.key==="ArrowRight") {
    //need to move the baby right
    game.moveBaby("right");
   }
   else if (event.key==="ArrowLeft") {
    //need to move the baby left
    game.moveBaby("left");
   }

})

//need to create DOM elements: the 4 Necessities: milk bottle, diaper, nap time, toy
