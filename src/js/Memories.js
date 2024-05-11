

function memories(cards){
    setTimeout(() => {
        cards.forEach(ele => {
            ele.classList.add("rotate");
            ele.style.pointerEvents = "none"
        })
    
        setTimeout(()=> {
            cards.forEach(ele => {
                ele.classList.remove("rotate");
                ele.style.pointerEvents = "auto"
            })
        }, 6000)
    }, 1000)
}

export default memories;