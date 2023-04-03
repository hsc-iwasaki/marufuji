import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".customer-info__content__bg").forEach((el, index) => {
    const delay = index * 0.2;
    const tl = gsap.timeline();

    // スクロールトリガーを作成し、アニメーションを関連付ける
    ScrollTrigger.create({
      trigger: el,
      start: "top 50%",
      animation: tl,
    });

    tl.to(el, {
      x: 25,
      duration: 1.4,
      delay: delay,
      ease: "power4.out",
    }).to(
      el,
      {
        rotate: "5deg",
        duration: 1.5,
        ease: "power4.out",
      },
      "-=95%"
    );
  });
}
