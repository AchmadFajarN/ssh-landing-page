import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const SelectedWorkAnimation = (description, title, list, section) => {
    const ctx = gsap.context(() => {
        const descriptionSplitText = new SplitText(description.current, {
            type: 'lines, words',
            linesClass: 'overflow-hidden'
        });

        const titleSplitText = new SplitText(title.current, {
            type: 'lines, words',
            linesClass: 'overflow-hidden'
        });

        gsap.set([descriptionSplitText.words, titleSplitText.words], {
            yPercent: 100
        });

        gsap.to([descriptionSplitText.words, titleSplitText.words], {
            yPercent: 0,
            scrollTrigger: {
                trigger: section.current,
                start: 'top 75%',
                end: '+=200',
            }
        });

        list.current.forEach((l, i) => {
            const titleProject = l.querySelector('.anim-title');
            const descritionProject = l.querySelector('.anim-desc');

            const descSplit = new SplitText(descritionProject, {
                type: 'lines, words',
                linesClass: 'overflow-hidden'
            });

            const titleSplit = new SplitText(titleProject, {
                type: 'lines, words',
                linesClass: 'overflow-hidden'
            });

            gsap.set(descSplit.words, {
                yPercent: 100
            });
            gsap.set(titleSplit.words, {
                yPercent: 100
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: l,
                    start: 'top 60%',
                    end: '+=100'
                }
            });

            tl
            .to(descSplit.words, {
                yPercent: 0,
            })
            .to(titleSplit.words, {
                yPercent: 0
            }, '-=0.4')
        })
    }, section);

    return () => {
        ctx.revert();
    }
}