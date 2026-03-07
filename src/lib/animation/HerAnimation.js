import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const animateTextHeroSection = (text, img) => {
    const { headingContainer, firstText, secondText } = text;
    const { firstImage, secondImage, thridImage } = img;

    const headingText = headingContainer.current.querySelectorAll('h1');

    const firstSplitText = new SplitText(firstText.current, {
        type: 'chars, lines',
        charsClass: '',
        linesClass: 'overflow-hidden'
    });

    const secondSplitText = new SplitText(secondText.current, {
        type: 'chars, lines',
        charsClass: '',
        linesClass: 'overflow-hidden'
    });

    const headingSplitText = new SplitText(headingText, {
        type: 'lines',
        linesClass: 'overflow-hidden'
    });

    gsap.set([firstSplitText.chars, secondSplitText.chars, headingSplitText.lines], {
        y: 100
    });

    const animateFirstText = gsap.to(firstSplitText.chars, {
        y: 0,
        stagger: {
            amount: 0.2
        },
        duration: 1
    });

     const animatedSecondText = gsap.to(secondSplitText.chars, {
        y: 0,
        stagger: {
            amount: 0.2
        },
        duration: 1
    });

    const animateHeadingText = gsap.to(headingSplitText.lines, {
        y: 0,
        stagger: {
            amount: 0.2
        },
        duration: 1
    });

    gsap.to([firstImage.current, secondImage.current, thridImage.current], {
        scaleY: 0,
        duration: 1,
        stagger: {
            amount: 0.2
        }
    })

    return () => {
        firstSplitText.revert();
        secondSplitText.revert();
        headingSplitText.revert();
        animateFirstText.kill();
        animatedSecondText.kill();
        animateHeadingText.kill();
    }
}