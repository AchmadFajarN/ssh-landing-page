import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const productAnimation = (sectionRef, cardRef) => {
    const ctx = gsap.context(() => {
        cardRef.current.forEach((c, i) => {
            if (!c) return;

            const img = c.querySelector('.img-animated');
            const title = c.querySelector('.animated-title');
            const desc = c.querySelector('.animated-description');
            const list = c.querySelectorAll('.animated-list');

            const titleSplit = new SplitText(title, {
                type: 'lines, words',
                linesClass: 'overflow-hidden'
            });

            const descriptionSplit = new SplitText(desc, {
                type: 'lines, words',
                linesClass: 'overflow-hidden'
            });

            // set default element
            gsap.set(titleSplit.words, { yPercent: 100 });
            gsap.set(descriptionSplit.words, { yPercent: 100 });
            gsap.set(list, { yPercent: 100, opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: c,
                    start: 'top 60%',
                    end: '+=800',
                }
            });

            tl
              .to(img, {
                clipPath: "circle(70.7% at 50% 50%)",
                delay: i * 0.2
              }, '-=0.020')
              .to(titleSplit.words, {
                yPercent: 0,
                duration: 1
              }, '-=0.2')
              .to(descriptionSplit.words, {
                yPercent: 0,
                duration: 1
              }, '-=0.2')
              .to(list, {
                yPercent: 1,
                opacity: 1,
                stagger: {
                    amount: 0.2
                }
              }, '-=0.4')
        })
    }, sectionRef);

    return () => {
        ctx.revert();
    };
}