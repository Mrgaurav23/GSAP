
// .to Initial to Final
gsap.to(".box1",{
    x : 1230,
    duration : 2,
    delay:1,
    rotate:360,
    scale:0.5,
    backgroundColor: "yellow",
    borderRadius: "50%",
})


// .from Final to Initial
gsap.from(".box2",{
    x : 1230,
    duration : 2,
    delay : 1,
    rotate : 360,
    scale:0.5,
    backgroundColor: "yellow",
    borderRadius: "50%",
})

// .page2
gsap.from(".page2 h1",{
    y:30,
    opacity:0,
    duration:2,
    delay:1,
    stagger:1,
})

//page3
gsap.to(".box",{
    x : 1230,
    duration: 2,
    delay : 1,
    rotate: 360,
    repeat : -1,
    yoyo: true,
})

//page4
gsap.to(".box3",{
    x : 1230,
    duration : 2,
    delay: 1,
    rotate: 360,
})

gsap.to(".box4",{
    x:1230,
    duration : 2,
    delay : 3,
    backgroundColor : "yellow",
})

gsap.to(".box5",{
    x : 1230,
    duration : 2.5,
    delay: 5,
    scale : 0.5,
    borderRadius : "50%",
})

const tl = gsap.timeline()

tl.to(".box6",{
    x : 1230,
    duration : 2.5,
    rotate : 360,
    delay: 5,
    scale : 0.5,
    borderRadius : "50%",
})

tl.to(".box7",{
    x:1230,
    duration : 2,
    backgroundColor : "yellow",
})

tl.to(".box8",{
    x : 1230,
    duration: 2,
    backgroundColor : "green",
    rotate: 360,
    repeat : -1,
    yoyo: true,
})

let tl2 = gsap.timeline();

tl2.from("h2",{
    y: -30,
    opacity: 0,
    duration:1,
    delay:0.5,

})

tl2.from("h3",{
    y: -30,
    opacity: 0,
    duration:1,
    delay:0.5,
    stagger:0.5,
})

tl2.from(".page6 h1",{
    y: 30,
    opacity: 0,
    duration:1,
    delay:0.5,
    scale:0.3,
})