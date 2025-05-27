gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.in",
});

gsap.utils.toArray(".mold").forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
        }, 
        y: 100,
        opacity: 0,
        duration: 1.1
    })
});
