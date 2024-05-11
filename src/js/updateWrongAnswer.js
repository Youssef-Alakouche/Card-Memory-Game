import { wrongTries, answerState } from "./main.js";

// update wrong answer
function updateWrongAnswer(){
    answerState.wrongAnswer++;
    wrongTries.textContent = answerState.wrongAnswer;
}

export default updateWrongAnswer;