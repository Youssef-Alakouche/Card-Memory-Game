import checker from "./checker.js";
import { cards } from "./main.js";

const cardsflipperHandler = () => {
    // flip cards
    cards.forEach(el => {
        el.addEventListener("click", function(event){
            checker(this);
        })
    })
}

export default cardsflipperHandler;