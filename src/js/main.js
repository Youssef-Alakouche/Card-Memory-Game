import StartGameHandler from "./StartGameHandler.js";
import cardsflipperHandler from "./flip.js";


let cards = document.querySelectorAll(".card"),
    wrongTries = document.querySelector(".liveResult .wrongTry span"),
    playerName = document.querySelector(".liveResult .name span"),
    matchedAudio = document.querySelector("audio.matchedCardAudio"),
    NotMatchedAudio = document.querySelector("audio.NotMatchedCardAudio"),
    start = document.querySelector(".overlay .start"),
    overlay = document.querySelector(".overlay"),
    winingOverlay = document.querySelector(".win"),
    rePlay = document.querySelector(".win .playAgain");

// contains player answers during the game session
let answerState = {
    rightAnswer: 0,
    wrongAnswer: 0
};

// 
let flip = {
   // counter will be 0 or 1
   // 0 : the first flip
   // 1 : the second right flip (the first card match the second clicked one)
    counter: 0,
};

// the first clicked card
let firstElement = {
    value: null,
}

main();

function main(){

    // game has finished
    if(answerState.rightAnswer != 8){
        winingOverlay.hidden = true;
    }
    
    // give a rodom order 
    cards.forEach((el) => {
        el.style.order = `${Math.floor(Math.random() * 16)}`;
    })
    
    
    // flip cards
    cardsflipperHandler();
    
    // start the game
    start.onclick = () => StartGameHandler(overlay, playerName);
    
}



export {
    matchedAudio, 
    winingOverlay, 
    rePlay, 
    playerName, 
    NotMatchedAudio,
    cards,
    wrongTries,
    flip,
    firstElement,
    answerState
};
