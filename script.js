let circle = document.querySelector(".circle");
let box = document.querySelector(".box");

window.addEventListener("mousemove", function (a) {
    
    gsap.to(circle, {
      x:a.clientX,
        y: a.clientY,
        duration: 0.5,
    })
    

})
box.addEventListener("mousemove", function () {
    gsap.to(circle, {
        scale: 10,
        
        
      
    })
    gsap.to(".box span", {
        color: "#FFF",
        y:-60
    })
})
box.addEventListener("mouseleave", function () {
    gsap.to(circle, {
        scale: 1,
       
    })
       gsap.to(".box span", {
        color: "#000",
           y: 0,
    })
})