import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const howWeWorkAnimate = (containerElement) => {
    const containerMask = containerElement.current.querySelectorAll('.container-mask');

    gsap.to(containerMask, {
         clipPath: "circle(70.7% at 50% 50%)",
        duration: 1,
        ease: 'power3.out',
        stagger: {
            amount: 0.2   
        },
        scrollTrigger: {
            trigger: containerElement.current,
            start: 'top top',
            end: '+=200',
        }
    })
}