import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function h2MovingAction() {
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("DOMContentLoaded", () => {
    gsap.utils.toArray(".words").forEach((words) => {
      const masterTimeline = gsap.timeline();

      // マスタータイムラインをスクロールトリガーに関連付け
      ScrollTrigger.create({
        trigger: words,
        start: "top 75%",
        animation: masterTimeline,
      });

      gsap.utils.toArray(words.children).forEach((word, index) => {
        const childTimeline = createChildTimeline(word);
        if (index !== 0) {
          masterTimeline.add(childTimeline, "-=90%"); // 子タイムラインを90%オフセットで追加
        } else {
          masterTimeline.add(childTimeline);
        }
      });
    });
  });

  function createChildTimeline(element) {
    const elText = element.querySelector(".rect");
    const tl = gsap
      .timeline()
      .from(element, {
        y: 16,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      })
      .set(elText, { opacity: 0 })
      .to(
        elText,
        {
          x: "105%",
          duration: 1.2,
          ease: "power4.out",
        },
        "-=50%"
      );

    return tl;
  }
}
