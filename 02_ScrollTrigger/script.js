gsap.from(".page1 .box",{
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 360,
})

gsap.from(".page2 h1",{
    x:500,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        markers:true,
        start: "top 50%"
    }
})

gsap.from(".page2 h2",{
    x:-500,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        markers:true,
        start: "top 50%"
    }
})

gsap.from(".page3 .box",{
    opacity:0,
    scale:0,
    duration:1,
    rotate:720,
    scrollTrigger:{
        trigger:".page3 .box",
        scroller:"body",
        markers: true,
        start: "top 60%",
        end:"top 30%",
        scrub:2,
    }
})

gsap.to(".page4 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})

