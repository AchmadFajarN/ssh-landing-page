'use client'
import { useRef, useLayoutEffect } from "react";
import { animateTextTool, animateToolImage } from "@/lib/animation/toolAnimation";
import Image from "next/image";


const ModernComponen = () => {
  const triggerRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    animateTextTool(triggerRef, textRef);
    animateToolImage(containerRef);
  }, []);

  const tools = ['javascript', 'nodejs', 'react', 'next', 'express', 'gsap', 'postgresql', 'tailwindcss']
  return (
    <section className="p-section min-h-[100vh] pb-20">
        <div ref={triggerRef} className="-translate-y-40"></div>
        <div className="text-center">
            <h1 ref={textRef} className="xl:text-8xl font-bold font-poppins text-black/50 px-26">Modern tools for scalable digital solutions.</h1>
        </div>
        <div className="flex justify-center">
            <div ref={containerRef} className="mt-20 grid grid-cols-[10rem_10rem_10rem_10rem_10rem_10rem_10rem_10rem]  relative">
                {
                    tools.map((t, i) => (
                        <div key={i} className={`h-40 w-40  overflow-hidden`}>
                            <div className="w-40 h-40 -translate-y-full tools">
                                <div className="w-full h-full flex justify-center items-center">
                                    <div className="relative size-20">
                                        <Image fill src={`/icon/${t}.svg`} alt={t} className="object-center object-cover" />
                                    </div>
                                </div>
                                <div className="w-full h-full flex justify-center items-center">
                                    <div className="relative size-20">
                                        <Image fill src={`/icon/${t}.svg`} alt={t} className="object-center object-cover" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}




// export function CursorMove() {
//   const containerRef = useRef(null)
//   const elementRef = useRef(null)

//   useEffect(() => {
//     const container = containerRef.current
//     const el = elementRef.current

//     const handleMouseEnter = () => {
//       gsap.to(el, {
//         backgroundColor: '#000',
//         duration: 0.3,
//       })
//     }

//     const handleMouseMove = (e) => {
//       const bounds = container.getBoundingClientRect()
//       const x = e.clientX - bounds.left

//       gsap.to(el, {
//         x: x - bounds.width / 2,
//         duration: 0.3,
//         ease: 'power3.out',
//       })
//     }

//     const handleMouseLeave = () => {
//       gsap.to(el, {
//         backgroundColor: 'transparent',
//         x: 0,
//         duration: 0.4,
//         ease: 'power3.out',
//       })
//     }

//     container.addEventListener('mouseenter', handleMouseEnter)
//     container.addEventListener('mousemove', handleMouseMove)
//     container.addEventListener('mouseleave', handleMouseLeave)

//     return () => {
//       container.removeEventListener('mouseenter', handleMouseEnter)
//       container.removeEventListener('mousemove', handleMouseMove)
//       container.removeEventListener('mouseleave', handleMouseLeave)
//     }
//   }, [])

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-40 bg-gray-200 overflow-hidden"
//     >
//       <div
//         ref={elementRef}
//         className="absolute top-1/2 left-1/2 w-20 h-20 -translate-y-1/2 rounded-full"
//       />
//     </div>
//   )
// }

export default ModernComponen