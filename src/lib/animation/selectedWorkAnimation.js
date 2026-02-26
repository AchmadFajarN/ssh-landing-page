import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Split } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const horizonScroll = (
  triggerRef,
  sectionRef,
) => {
  const trigger = triggerRef.current;
  const section = sectionRef.current;

  if (!trigger || !section) return;

  const pin = gsap.fromTo(
    section,
    { translateX: 0 },
    {
      translateX: "-300vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger,
        start: "top top",
        end: "2000 top",
        scrub: 0.6,
        pin: true,
      },
    },
  );



  return () => {
    pin.kill();
  };
};

export const animatedText = (container, textRef) => {
  const trigger = container.current;
  const text = textRef.current;

  if (!text || !trigger) return;

  const splitText = new SplitText(text, {
    type: 'words, lines'
  });

   const splitTextAnimation = gsap
    .from(splitText.lines, {
    yPercent: 100,
    opacity: 0,
    stagger: {
        amount: 0.2,
        from: 'start',
    },
    duration: 0.8,
    ease: "power4.out",
    scrollTrigger: {
      trigger,
      start: "top 50%",
      end: "top top",
      scrub: true,
    },
  });

  return () => {
    splitText.revert();
    splitTextAnimation.kill();
  }
};


export const animateSectionWork = (triggerRef, containerRef, textRef) => {
  const container = containerRef.current;
  const trigger = triggerRef.current;

  if (!container || !trigger ) return;

  const ctx = gsap.context(() => {

    const text = new SplitText(textRef.current, {
      type: 'words'
    });

    // ambil semua title & description
    const titles = container.querySelectorAll(".project-title");
    const descriptions = container.querySelectorAll(".project-description");

    const splitInstances = [];

    titles.forEach((el) => {
      const split = new SplitText(el, { type: "words" });
      splitInstances.push(split);

      gsap.from(split.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          // toggleActions: "play none none reverse",
        }
      });
    });

    descriptions.forEach((el) => {
      const split = new SplitText(el, { type: "lines, words" });
      splitInstances.push(split);

      gsap.from(split.words, {
        opacity: 0,
        y: 40,
        stagger: {
          amount: 0.12,
          from: 'random'
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          // toggleActions: "play none none reverse",
      
        }
      });
    });

    gsap.to(container, {
      y: -240,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      }
    });

    gsap.from(text.words, {
      opacity: 0,
      yPercent: 100,
      stagger: {
        amount: 0.2,
        from: 'random'
      },
      scrollTrigger: {
        trigger,
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      }
    })

    return () => {
      splitInstances.forEach((split) => split.revert());
    };

  }, container);

  return () => ctx.revert();
};