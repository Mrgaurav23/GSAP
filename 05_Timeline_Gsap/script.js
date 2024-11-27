let menu = document.querySelector(".menu-icon span");
let cross = document.querySelector(".full-div i")


var tl = gsap.timeline()

tl.to(".full-div",{
    right:0,
    duration:0.7,

})

tl.from(".full-div h4",{
    x:150,
    duration:0.3,
    stagger:0.3,
    opacity:0,
})

tl.from(".full-div i",{
    opacity:0,
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})

cross.addEventListener("click",()=>{
    tl.reverse();
})