import { gsap } from "gsap";

export default function () {
  const opbtn = document.querySelector(".opbtn");
  let isShow = false;
  opbtn.addEventListener(
    "click",
    function () {
      if (isShow) {
        gsap
          .timeline()
          .to(".header-nav", {
            x: "100%",
            duration: 0.5,
            ease: "power4.out",
          })
          .to(".header-nav", {
            display: "none",
            duration: 0.1,
            ease: "power4.out",
          });
        isShow = false;
      } else {
        gsap
          .timeline()
          .to(".header-nav", {
            display: "flex",
            duration: 0.1,
            ease: "power4.out",
          })
          .to(".header-nav", {
            x: "-5%",
            duration: 0.5,
            ease: "power4.out",
          });
        isShow = true;
      }
    },
    false
  );
}
