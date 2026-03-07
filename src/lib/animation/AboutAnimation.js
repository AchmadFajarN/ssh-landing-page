import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const animatedAbout = (trigger, elements = []) => {
    if (!trigger || !elements.length) return;

    const { firstImage, secondImage } = elements[0];
    const { textAbout, firstHeadingText, secondHeadingText } = elements[1];

    const aboutSplit = new SplitText(textAbout.current, {
        type: 'words, lines',
        linesClass: 'overflow-hidden',
    });

    const firstHeadingSplit = new SplitText(firstHeadingText.current, {
        type: 'words, lines',
        linesClass: 'overflow-hidden'
    });

    const secondHeadingSplit = new SplitText(secondHeadingText.current, {
        type: 'words, lines',
        linesClass: 'overflow-hidden'
    });

    const imageElement = gsap.to([firstImage.current, secondImage.current], {
        scaleY: 0,
        stagger: {
            amount: 0.2
        },
        duration: 1,
        scrollTrigger: {
            trigger: trigger.current,
            start: 'top 40%',
            end: 'top top',
        }
    });
    
    gsap.set([aboutSplit.words, firstHeadingSplit.words, secondHeadingSplit.words], {
        yPercent: 100
    });

    const animateAboutText = gsap.to(aboutSplit.words, {
        yPercent: 0,
        duration: 1,
        scrollTrigger: {
            trigger: trigger.current,
            start: 'top 40%',
            end: 'top top',
        }
    });

    const animateFirstHeading = gsap.to(firstHeadingSplit.words, {
        yPercent: 0,
        duration: 1,
        scrollTrigger: {
            trigger: trigger.current,
            start: 'top 40%',
            end: 'top top',
        }
    });

    const animateSecondHeading = gsap.to(secondHeadingSplit.words, {
        yPercent: 0,
        duration: 1,
        scrollTrigger: {
            trigger: trigger.current,
            start: 'top top',
            end: '+=100',
        }
    });

    return () => {
        aboutSplit.revert();
        firstHeadingSplit.revert();
        secondHeadingSplit.revert();
        imageElement.kill();
        animateAboutText.kill()
        animateFirstHeading.kill();
        animateSecondHeading.kill();
    }
}