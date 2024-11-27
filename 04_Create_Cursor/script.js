let cursor = document.querySelector(".cursor")
let mainEl = document.querySelector(".main")
let imagediv= document.querySelector(".image img")
 
mainEl.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1
    })
})

imagediv.addEventListener("mouseenter",(dets)=>{
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale:3,
    })
})

imagediv.addEventListener("mouseleave",(dets)=>{
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
    })
})
