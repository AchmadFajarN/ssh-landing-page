import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger, SplitText);

export const animateTextTool = (triggerRef, textRef) => {
    const trigger = triggerRef.current;
    if (!trigger || !textRef.current) return;

    const text = new SplitText(textRef.current, {
        type: 'chars'
    });

    const animateText = gsap.to(text.chars, {
        color: 'black',
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger,
            start: 'top 70%',
            end: 'top 20%',
            scrub: true,
        }
    });

    return () => {
        text.revert();
        animateText.kill();
    }
}

export const animateToolImage = (containerRef) => {
    const ctx = gsap.context(() => {
    const tools = gsap.utils.toArray(".tools");

    gsap.to(tools, {
      y: 0,
      duration: 1,
      stagger: {
        amount: 0.2,
        from: 'random'
      },
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      }
    });
  }, containerRef);

  return () => ctx.revert();
}

