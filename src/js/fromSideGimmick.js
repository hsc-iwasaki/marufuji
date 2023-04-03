import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      defaults: {
        duration: 1.5,
        ease: "elastic",
      },
      scrollTrigger: {
        trigger: ".from-side-gimmick",
        start: "top 50%",
      },
    })
    .from(".from-side-gimmick", { x: "100%" })
    .to(".from-side-gimmick", { x: 0, duration: 1 });
}
