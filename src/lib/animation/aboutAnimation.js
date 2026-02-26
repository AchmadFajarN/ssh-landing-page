import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);



export const aboutAnimation = (containerRef, triggerRef, textRef) => {
  const container = containerRef.current;
  const trigger = triggerRef.current;
  const text = textRef.current;

  if (!container || !trigger || !text) return;

  const splitText = new SplitText(text, {
    type: "words, lines",
  });

  
    gsap.to(container, {
      rotate: 0,
      width: "100%",
      height: "100%",
      x: 0,
      y: 0,
      ease: "power3.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: trigger,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
      },
    })

    gsap.from(splitText.words, {
      y: 40,
      opacity: 0,
      stagger: {
        amount: 0.2,
        from: "random",
      },
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: trigger,
        start: "top 20%",
        end: "top top",
        scrub: true,
     },
    });

  return () => {
    splitText.revert();
  };
};