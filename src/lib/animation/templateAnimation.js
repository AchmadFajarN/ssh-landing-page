import gsap from 'gsap';

export const animatePageIn = () => {
    // const banner1 = document.getElementById("banner-1");       
    // const banner2 = document.getElementById("banner-2");
    // const banner3 = document.getElementById("banner-3"); 
    // const banner4 = document.getElementById("banner-4"); 
    const background = document.getElementById('background');
    const background2 = document.getElementById('background2');

    const tl = gsap.timeline();
    
    tl
    .to(background2, {
        yPercent: -100,
        duration: 1
    })
    // .to([banner1, banner2, banner3, banner4], {
    //     opacity: 0,
    //     stagger: 0.2,
    //     delay: 0.4
    // })
    .to(background, {
        yPercent: -100
    }, '-=0.5');
    // if (banner1 && banner2 && banner3 && banner4) {
    // }
}

// export const animatePageOut = (href, router) => {
//     const banner1 = document.getElementById("banner-1");       
//     const banner2 = document.getElementById("banner-2");
//     const banner3 = document.getElementById("banner-3"); 
//     const banner4 = document.getElementById("banner-4"); 

//     if (banner1 && banner2 && banner3 && banner4) {
//         const tl = gsap.timeline();

//         tl.set([banner1, banner2, banner3, banner4], {
//             yPercent: -100,
//         }).to([banner1, banner2, banner3, banner4], {
//             yPercent: 0,
//             stagger: 0.2,
//             onComplete: () => {
//                 router.push(href);
//             }
//         });
//     }
// }
