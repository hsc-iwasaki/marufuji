import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".fadeup").forEach((el) => {
    gsap.from(el, {
      y: 20,
      opacity: 0,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 65%",
      },
    });
  });
}
