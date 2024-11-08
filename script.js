var tl = gsap.timeline({scrollTrigger:{
    trigger: '#main',
    start: '30% 30%',
    end: '70% 80%',
    scrub: true,
    // markers: true
}})

tl.to("#imgTwo", {
    rotateX : "0deg"
}).to('#imgThree', {
    rotateX : "0deg"
}).to('.resume', {
    marginTop : "50vh",
    scale: "0.8",
}, "id").to('.img', {
    filter: 'grayscale(1)',
}, "id").to('.text', {
    marginTop : "-100vh"
}, "id").to('.overlay', {
    opacity: 0.5
}, "id")