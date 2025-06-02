gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.from(".card", {
  y: 100,
  opacity: 0,
  ease: "power2.in",
});

gsap.utils.toArray(".mold").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1.1,
  });
});

// area extra

gsap.from(".reta", {
  width: "2px",
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#extra",
    start: "top 40%",
  },
});

gsap.from(".reta-text", {
  opacity: 0,
  delay: 1,
  duration: 0.3,
  stagger: 0.5,
  y: 50,
  scrollTrigger: {
    trigger: "#extra",
    start: "top 40%",
  },
});

gsap.from(".bolas", {
  delay: 0.5,
  width: "0px",
  height: "0px",
  ease: "elastic.out",
  duration: 2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#extra",
    start: "top 40%",
  },
});

// anima o texto final <3

const mensagens = [
  "Você chegou até o final!!!",
  "",
  "Esse é nosso grupo",
];
let index = 0;

ScrollTrigger.create({
  trigger: ".end",
  start: "top 80%",
  once: true,
  onEnter: () => {
    mudarTxt();
  },
});

function mudarTxt() {
  gsap.to(".final-txt", {
    duration: 1.5,
    text: mensagens[index],
    ease: "none",
    onComplete: () => {
      index++;
      if (index < mensagens.length) {
        setTimeout(mudarTxt, 500);
      }
    },
  },);
}
