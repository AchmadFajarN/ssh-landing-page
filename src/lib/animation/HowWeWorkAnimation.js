import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const howWeWorkAnimate = (containerElement, section, textRef) => {
    const containerMask = containerElement.current.querySelectorAll('.container-mask');
    const text = textRef.current.querySelectorAll('.animated-span')
    const ctx = gsap.context(() => {
        gsap.set(text, {
            yPercent: 100
        });

        gsap.to(text, {
            yPercent: 0,
            stagger: {
                amount: 0.2
            },
            duration: 1,
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 60%',
                end: '+=100',
            }
        })
        gsap.to(containerMask, {
            clipPath: "circle(70.7% at 50% 50%)",
            duration: 1,
            ease: 'power3.out',
            stagger: {
                amount: 0.2   
            },
            scrollTrigger: {
                trigger: containerElement.current,
                start: 'top 50%',
                end: '+=500',
            }
        })
    }, section);

    return () => {
        ctx.revert();
    }
}