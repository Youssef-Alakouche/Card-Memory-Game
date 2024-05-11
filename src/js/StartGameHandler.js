import memories from "./Memories.js";
import { cards } from "./main.js";

function StartGameHandler(overlay, playerName){
    let fullName = prompt("Your Name");

    if(fullName){
        playerName.textContent = fullName;
        overlay.style.display = "none";

        memories(cards)
    }
}

export default StartGameHandler;