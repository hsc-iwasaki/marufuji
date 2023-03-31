import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();
  document.querySelectorAll(".word").forEach((word) => {
    tl.add(createChildTimeline(word), "-=90%");
  });

  function createChildTimeline(element) {
    const elText = element.querySelector(".rect");
    const tl = gsap
      .timeline()
      .from(element, {
        y: 16,
        opacity: 0,
        duration: 10,
        ease: "power4.out",
      })
      .to(
        elText,
        {
          x: "105%",
          duration: 1,
          ease: "power4.out",
        },
        "-=50%"
      );
    return tl;
  }
});
gsap.utils.toArray(".rayup").forEach((el) => {
  gsap.from(el, {
    y: 20,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    // スクロールトリガーの設定
    scrollTrigger: {
      trigger: el, // 対象物
      start: "top 85%",
    },
  });
});
