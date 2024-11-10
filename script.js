var tl = gsap.timeline({scrollTrigger:{
    trigger: '#main',
    start: '25% 30%',
    end: '90% 90%',
    scrub: true,
    // markers: true
}})

tl.to("#imgTwo", {
    rotateX : "0deg"
}).to('#imgThree', {
    rotateX : "0deg"
}).to('.resume', {
    marginTop : "100vh",
    scale: "0.5",
}, "id").to('.img', {
    filter: 'grayscale(1)',
}, "id").to('.text', {
    marginTop : "-115vh"
}, "id")

let count = 0;

function incrementCount () {
    count ++;
    document.querySelector('button').textContent = "Count:" + count;
}