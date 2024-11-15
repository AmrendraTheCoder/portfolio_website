var tl = gsap.timeline({scrollTrigger:{
    trigger: '#mainfordemo',
    start: '-4% 30%',
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
    marginTop : "-100vh"
}, "id")

let count = 0;

function incrementCount () {
    count ++;
    document.querySelector('button').textContent = "Count:" + count;
}

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {  
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive()