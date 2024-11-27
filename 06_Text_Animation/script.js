function breakTheText() {
    let h1 = document.querySelector("h1");
    let h1text = h1.textContent
    
    let splittedText = h1text.split("")
    let halfText = splittedText.length/2;
    let clutter = ""
    
    splittedText.forEach((elem,idx)=>{
        if(idx<halfText){
            clutter += `<span class = "a">${elem}</span>`;
        }
        else{
            clutter += `<span class = "b">${elem}</span>`;
        }
    })

    h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a",{
    y:50,
    duration:0.7,
    delay:0.3,
    stagger:0.2,
    opacity:0
})


gsap.from("h1 .b",{
    y:50,
    duration:0.7,
    delay:0.3,
    stagger:-0.2,
    opacity:0
})
