// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// =================================
// PAGE LOAD ANIMATION
// =================================

const introTimeline = gsap.timeline();

introTimeline
    .from(".small-text", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out"
    })

    .from(".title", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power4.out"
    }, "-=0.4")

    .from(".description", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.5")

    .from(".stat", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.3")

    .from(".car-container", {
        opacity: 0,
        x: 180,
        scale: 0.8,
        duration: 1.4,
        ease: "power4.out"
    }, "-=1")

    .from(".scroll-text", {
        opacity: 0,
        duration: 0.5
    }, "-=0.5");


// =================================
// SCROLL-DRIVEN CAR ANIMATION
// =================================

gsap.to(".car-container", {

    x: -220,
    y: -80,
    rotation: -6,
    scale: 0.72,

    scrollTrigger: {
        trigger: ".hero",

        start: "top top",
        end: "bottom top",

        scrub: 1.5,

        // Makes the animation tied to scrolling
        // instead of autoplaying.
    }

});


// =================================
// CAR BODY SUBTLE MOVEMENT
// =================================

gsap.to(".car", {

    y: -15,

    scrollTrigger: {
        trigger: ".hero",

        start: "top top",
        end: "bottom top",

        scrub: 2
    }

});


// =================================
// HEADING SCROLL EFFECT
// =================================

gsap.to(".hero-content", {

    y: -100,
    opacity: 0.2,

    scrollTrigger: {
        trigger: ".hero",

        start: "top top",
        end: "bottom top",

        scrub: 1
    }

});


// =================================
// GLOW EFFECT
// =================================

gsap.to(".glow", {

    scale: 1.5,
    opacity: 0.3,

    scrollTrigger: {
        trigger: ".hero",

        start: "top top",
        end: "bottom top",

        scrub: 1
    }

});