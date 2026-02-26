'use client'
import React from 'react'
import { useRef, useLayoutEffect } from 'react'
import { animateSectionWork } from '@/lib/animation/selectedWorkAnimation'
import Image from 'next/image'

const SelectedProject = () => {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  useLayoutEffect(() => {
    animateSectionWork(triggerRef, containerRef, textRef);
  }, []);
  const techStack = ['react', 'nextJs', 'Supabase', 'ExpressJs']
  const selectedWork = [
    {
        title: 'Sipekad',
        desription: 'Developed an academic submission system with React and TailwindCSS, featuring real-time data, secure auth, and a scalable, responsive UI.',
        techStack: ['react', 'nextJs', 'Supabase', 'express', 'shadCn'],
        image: '/sipekad/sipekad2.jpeg'
    },
     {
        title: 'Pusdatin',
        desription: 'Developed an academic submission system with React and TailwindCSS, featuring real-time data, secure auth, and a scalable, responsive UI.',
        techStack: ['react', 'nextJs', 'Supabase', 'express', 'shadCn'],
        image: '/sipekad/sipekad3.jpeg'
    },
     {
        title: 'Nurul Hikmah Landing Page',
        desription: 'Developed an academic submission system with React and TailwindCSS, featuring real-time data, secure auth, and a scalable, responsive UI.',
        techStack: ['react', 'nextJs', 'Supabase', 'express', 'shadCn'],
        image: '/sipekad/sipekad4.jpeg'
    },
     {
        title: 'Landing Page X',
        desription: 'Developed an academic submission system with React and TailwindCSS, featuring real-time data, secure auth, and a scalable, responsive UI.',
        techStack: ['react', 'nextJs', 'Supabase', 'express', 'shadCn'],
        image: '/sipekad/sipekad2.jpeg'
    }
  ]
  return (
    <>
        <div ref={triggerRef} className='absolute  w-full h-20'></div>
        <section ref={containerRef} className='p-section min-h-[120vh] translate-y-40 bg-black text-white rounded-t-[40px] pb-20'>
            <div className='pt-40'>
                <h3 ref={textRef} className='text-2xl xl:text-5xl font-raleway pl-20 xl:pl-60 uppercase font-bold  xl:mb-40'>Built for growth-driven businesses And ambitious startups Strategic, scalable Designed for impact</h3>
                <div className='pt-20'>
                    <h3 className='text-xl font-raleway flex justify-start gap-1 font-bold items-start uppercase xl:-order-1 xl:text-4xl mb-4'>Selected Work <span className="font-poppins text-sm">(2)</span></h3>
                    <div className="">
                        {
                            selectedWork.map((project, i) => {
                                return(
                                    <div key={i} className={`py-4 ${ i + 1 === selectedWork.length ? 'border-y' : 'border-t' } flex items-center gap-20 xl:gap-60`} >
                                        <p>0{ i + 1 }</p>
                                        <div className='flex items-center justify-between flex-2 font-poppins'>
                                            <p id={`title-${i + 1}`} className='text-2xl project-title font-raleway font-bold uppercase w-60'>{ project.title }</p>
                                            <p id={`project-${i + 1}`} className='w-80 project-description hidden md:block'>
                                                { project.desription }
                                            </p>
                                            <div className='gap-4 w-80 hidden md:flex flex-wrap'>
                                                { techStack.map((t, i) => <div className='text-center px-4 rounded-[20px] py-1 bg-white/10' key={i}>{t}</div>) }
                                            </div>
                                            <div className=''>
                                                <div className='size-28 xl:size-60 rounded-[20px] overflow-hidden relative'>
                                                    <Image src={project.image} alt="project" fill className='object-left object-cover' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='mt-8 font-poppins text-2xl h-8 overflow-hidden flex justify-start'>
                        <div className='group cursor-pointerclear
                        '>
                            <div className='group-hover:-translate-y-1/2 transition-all duration-200 ease-in-out'>
                                <p>See all</p>
                                <p className=''>See all</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SelectedProject