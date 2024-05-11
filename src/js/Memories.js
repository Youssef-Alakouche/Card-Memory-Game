
// face up all card to the player in order to remember each card position
function memories(cards){
    setTimeout(() => {
        // face up card
        cards.forEach(ele => {
            ele.classList.add("rotate");
            ele.style.pointerEvents = "none"
        })
    
        // face down card
        setTimeout(()=> {
            cards.forEach(ele => {
                ele.classList.remove("rotate");
                ele.style.pointerEvents = "auto"
            })
        }, 6000)
    }, 1000)
}

export default memories;