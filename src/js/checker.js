import { 
         flip,
         firstElement,
         answerState, 
         matchedAudio, 
         winingOverlay, 
         rePlay, 
         playerName, 
         NotMatchedAudio} from "./main.js";

import updateWrongAnswer from "./updateWrongAnswer.js";

let counter = 0;

function checker(event){
    
    if(Array.from(event.classList).includes("card")){
        
        if(counter == 0){
            // rotate the first card of the matched paire
            event.classList.add("rotate");
            
            // point to the first card of the matched paire
            firstElement.value = event;
            firstElement.value.style.pointerEvents = "none";


            counter = 1;

        }else if(counter == 1){
            
            // retate the clicked card
            event.classList.add("rotate");

            // checking the clicked card is match the first clicked card
            if(!(firstElement.value.dataset.type == event.dataset.type && event != firstElement.value)){
                setTimeout(() => {
                    event.classList.remove("rotate");

                    // run non matched audio
                    NotMatchedAudio.play();
                    
                },500 )

                updateWrongAnswer();
            }else {
                // seccess answer

                // change the color of the matched clicked cards.
                event.firstElementChild.style.color = "green";
                firstElement.value.firstElementChild.style.color = "green";
  
                // increment right answer counter
                answerState.rightAnswer += 1;

                // reset the flip counter
                counter = 0;

                // make matched cards the have been found unclickable
                event.style.pointerEvents = "none";
                
               
                setTimeout(()=>{
                    // run matched audio
                    matchedAudio.play();

                    // rotate the matched cards
                    event.classList.remove("rotate");
                    firstElement.value.classList.remove("rotate");
                }, 500)
            }

        }
        
    }

    if(answerState.rightAnswer == 8){
        winingOverlay.hidden = false;
        document.querySelector(".win h3 span").textContent = playerName.textContent;
        document.querySelector("audio.win").play();
        rePlay.addEventListener("click", function(){
            location.reload();
        })
    }
}


export default checker;