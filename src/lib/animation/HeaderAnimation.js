import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
let tl;


export const animateNav = (containerRef, isActive, listRef) => {
  const container = containerRef.current;
  const items = listRef.current?.children;
  if (!container || !items) return;

  if (!tl) {
    tl = gsap.timeline({ paused: true });

    gsap.set(container, { y: "-100%" });
    gsap.set(items, { y: 0, opacity: 1 });

    tl.to(container, {
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    tl.from(
      items,
      {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.3,
        ease: "power3.out",
      },
      "-=0.2",
    );
  }

  isActive ? tl.play() : tl.reverse();
};


