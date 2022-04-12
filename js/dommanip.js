//All the DOM Manipulation (User Interface) will be here

console.log("Welcome to the Baby Survival Tips Game");

///////////////////////////////////////////////////////
//Here I put the interaction with the DOM of the HTML//
//////////////////////////////////////////////////////

//Here the function to create new HTML element: the baby and the 4 Necessities: milk bottle, diaper, nap time, toy
function createHTMLelement(element,idName) { element =>
    // first I create a new element:
    let newElem = document.createElement("element");
    //than I need to select the parent element:
    let parentElem = document.getElementById("gamespace");
    //than add the child elem to the parent element:
    parentElem.appendChild(newElem);
    //finally to set the id of that new elem:
    newElem.id="idName";
} 

//we also need a function to move the new HTML element when we moved the baby or necessities
function moveHTMLelement()

//Than I need to start the game: by creating a new instance of it, and applying it the start method
const game = new Game;
//than i apply the method start to that new Instance game so to launche all the code executed by start =
//meaning the creation of a new baby, and all the necessities
function startGame () {
    game.start();
}




//Here create the dom interaction when you use your keyboard Right & Left to move the baby
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
