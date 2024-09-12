let nav = document.querySelector("#navbar");
let logo = document.querySelector(".logo")
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
        logo.setAttribute("src", "./Images/bb_logo_360_2-2.png");
    }
    else {
        nav.classList.remove("scroll-on");
        logo.setAttribute("src", "/Images/bb_logo_360_white-3.png");
    }
}

//  const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
//  });


var t1 = gsap.timeline()

t1.from(".nav-item", {
    // opacity: 0,
    scale: 0,
    duration: 0.2,
    delay: 1,
    stagger: 0.1
})
t1.from("#intro h1", {
    opacity: 0,
    // scale: 1.5,
    // rotate: -90,
    duration: 0.2,
})

t1.from(".green", {
    opacity: 0,
    duration: 0.5,
    scale: 1.2,
},)
// t1.from("#bottle1", {
//     y: -10,
//     repeat: -1,
//     duration: 1,
//     yoyo: true
// })
t1.from("#intro h2", {
    opacity: 0,
    x: 20,
    scale: 0,
    duration: 0.2,
})
// t1.from("#intro h2 span", {
//     delay: 0.5,
//     opacity: 0,
//     scale: 0,
//     duration: 0.2,
// })
t1.from("#intro h4", {
    rotateX: 90,
    duration: 0.2
})

// t1.from("#bottle1", {
//     y: -30,
//     repeat: -1,
//     duration: 1,
//     yoyo: true
// })

gsap.from("#countryDiv img", {
    y: 30,
    scale: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#countryDiv img",
        scroller: "body",
        // markers:true,
        start: "top 98%",
        end: "top 80%",
        scrub: 1
    }
})
gsap.from("#countryDiv .btn", {
    // scale:0,
    rotateX: -90,
    duration: 0.5,
    transformOrigin: "50% 50% 20px",
    perspective: 1000,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#countryDiv .btn",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
        // pin:true
    }
})

gsap.from("#countryDiv p", {
    // scale:0,
    opacity: 0.2,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#countryDiv p",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
        // pin:true
    }
})
gsap.from(".signature", {
    // scale:0,
    rotateX: -90,
    duration: 0.5,
    transformOrigin: "50% 50% 100px",
    perspective: 1000,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".signature",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
        // pin:true
    }
})

// gsap.from("#page3Div", {
//     // scale:0,
//     rotateY:-90,
//     duration: 0.8,
//     transformOrigin:"50% 50% -200px",
//     perspective:200,
//     ease:"power2.inOut",
//     scrollTrigger: {
//         trigger: "#page3Div",
//         scroller: "body",
//         markers:true,
//         start:"top 70%",
//         end:"top 55%",
//         scrub:1,
//         // pin:true
//     }
// })
gsap.from("#page3Div h2", {
    y: 30,
    // opacity:0,
    rotateX: -90,
    transformOrigin: "40% 40% -40px",
    perspective: 200,
    ease: "power2.inO,ut",
    scrollTrigger: {
        trigger: "#page3Div h2",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 55%",
        scrub: 1,
        // pin:true
    }
})
gsap.from("#page3Div h6", {
    y: 30,
    // opacity:0,
    rotateX: -90,
    transformOrigin: "40% 40% -40px",
    perspective: 200,
    ease: "power2.inO,ut",
    scrollTrigger: {
        trigger: "#page3Div h6",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 55%",
        scrub: 1,
        // pin:true
    }
})
gsap.from("#page3Div p", {
    y: 30,
    // opacity:0,
    rotateX: -90,
    transformOrigin: "40% 40% -40px",
    perspective: 200,
    ease: "power2.inO,ut",
    scrollTrigger: {
        trigger: "#page3Div p",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 75%",
        scrub: 1,
        // pin:true
    }
})
gsap.from(".btnSec .btn", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.inO,ut",
    scrollTrigger: {
        trigger: ".btnSec .btn",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 75%",
        scrub: 1,
        // pin:true
    }
})
gsap.from("#proof", {
    scale: 0.5,
    opacity: 0,
    // stagger:0.3,
    duration: 0.5,
    ease: "power2.inO,ut",
    scrollTrigger: {
        trigger: "#proof",
        scroller: "body",
        // markers:true,    
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
        // pin:true
    }
})
gsap.to(".green", {

    scrollTrigger: {
        trigger: ".green",
        scroller: "body",
        // markers:true,
        pin: true,
        start: "top 10%",
        end: "top -305%",
        scrub: 2
    },
    rotate: 0,
})
gsap.to(".green", {

    scrollTrigger: {
        trigger: ".green",
        scroller: "body",
        // markers: true,
        start: "top 9%",
        scrub: 2,
        end: "top 7%"
    },
    scale: "0.8",
})
gsap.from("#cask, #rye", {
    scale: 1.5,
    opacity: 0,
    // stagger:0.3,
    duration: 1,
    ease: "power2.inO,ut",
    scrollTrigger: {
        trigger: "#cask, #rye",
        scroller: "body",
        // markers:true,
        start: "top 30%",
        end: "top 20%",
        scrub: 1,
        // pin:true
    }
})
gsap.from(".bottle .btn", {
    rotateX: -90,
    duration: 0.5,
    transformOrigin: "50% 50% 20px",
    perspective: 1000,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".bottle .btn",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 85%",
        scrub: 1,
        // pin:true
    }
})
gsap.from(".awards", {
    y: 30,
    scale: 0,
    opacity: 0,
    stagger: 0.3,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".awards",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 35%",
        scrub: 1,
        // pin:true
    }
})
gsap.from(".ways img", {
    y: 30,
    x: -50,
    rotate: 15,
    // scale: 0,
    opacity: 0,
    // stagger: 0.3,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".ways img",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 35%",
        scrub: 1,
        // pin:true
    }
})
// gsap.from("#page7", {
//     scale:0.8,
//     duration: 0.7,
//     scrollTrigger: {
//         trigger: "#page7",
//         scroller: "body",
//         markers: true,
//         start: "top 95%",
//         end: "top 70%",
//         scrub: 1,
//         // pin:true
//     }
// })
gsap.from("#page7Video", {  
    scale:0.8,
    duration: 1,
    scrollTrigger: {
        trigger: "#page7Video",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
        // pin:true
    }
})