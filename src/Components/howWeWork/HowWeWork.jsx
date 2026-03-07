'use client'

import React from 'react'
import Image from 'next/image'
import { workProcess } from '@/lib/constant/constant'
import { useRef, useLayoutEffect } from 'react'
import { howWeWorkAnimate } from '@/lib/animation/HowWeWorkAnimation'

const HowWeWork = () => {
  const container = useRef(null);
  useLayoutEffect(() => {
    howWeWorkAnimate(container);
  }, []);
  return (
    <section className='p-section w-full pb-10 mt-20 xl:my-40'>
        <div className="flex justify-center mt-8">
            <h1 className='font-raleway text-4xl font-bold uppercase flex gap-1'>Bagaimana Kita Bekerja <span className='font-poppins text-sm'>(3)</span></h1>
        </div>  
        <div className="flex flex-col xl:gap-20">
            <div ref={container} className='mt-4 w-full min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-4 xl:order-2 pt-20'>
                {
                    workProcess.map((w, i) => {
                        return(
                        <div style={{ clipPath: 'circle(0% at 50% 50%)' }} key={i} className={`${ i % 2 !== 0 ? 'bg-orange-300' : 'bg-black/80 text-white' } relative shadow-md h-160 rounded-[20px] p-8 flex flex-col text-black/90 container-mask`}>
                            {/* <div style={{ clipPath: 'circle(70.7% at 50% 50%)' }} className="absolute inset-0 bg-white mask"></div> */}
                            <div className='flex justify-between flex-1'>
                                <p className={`font-raleway text-6xl font-bold ${ i % 2 === 0 && 'order-2' }`}>{w.title}</p>
                                <p className='text-2xl'>0{i + 1}</p>
                            </div>
                            <div className="grid grid-cols-2 flex-2 gap-4">
                                <div className={`relative overflow-hidden rounded-[12px] ${ i % 2 === 0 && 'order-2' }`}>
                                    <Image src={w.img} alt="step" fill className='object-center object-cover' />
                                </div>
                                <div className='font-poppins font-[500] text-2xl'>
                                    { w.description }
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            
            </div>
            <div className='mt-8 text-2xl font-poppins xl:text-4xl'>
                <div className=''>
                    <p className='flex items-center gap-2 flex-wrap xl:justify-center'>
                       <span className='flex gap-2'>
                            <span>Kami memanfaatkan</span>
                            <span className='block'>
                                <span className='block relative  size-8 rounded-[8px]'>
                                    <Image fill src={`/icons/nodedotjs.svg`} alt='tech' className='object-center object-cover' />
                                </span> 
                            </span>
                            <span>teknologi modern </span>
                       </span> 
                       <span className='flex gap-2'>
                            <span>terstruktur</span>
                            <span className='block'>
                                <span className='block relative  size-8 rounded-[8px]'>
                                    <Image fill src={`/icons/css.svg`} alt='tech' className='object-center object-cover' />
                                </span> 
                            </span>
                            <span>sebagai fondasi</span>
                            <span>modern</span>
                            <span className='block'>
                                <span className='block relative  size-8 rounded-[8px]'>
                                    <Image fill src={`/icons/nextdotjs.svg`} alt='tech' className='object-center object-cover' />
                                </span> 
                            </span>
                       </span>
                       <span className='flex gap-2'>
                            <span>dalam mewujudkan</span>
                            <span className='block p-2 bg-black/80 rounded-[8px]'>
                                <span className='block relative  size-6 rounded-[8px]'>
                                    <Image fill src={`/icons/react.svg`} alt='tech' className='object-center object-cover' />
                                </span> 
                            </span>
                            <span>kebutuhan dan tujuan</span>
                       </span>
                       <span className='flex gap-2'>
                            <span className='block p-2 bg-black/80 rounded-[8px]'>
                                <span className='block relative  size-6 rounded-[8px]'>
                                    <Image fill src={`/icons/tailwindcss.svg`} alt='tech' className='object-center object-cover' />
                                </span> 
                            </span>
                            <span>bisnis anda secara efektif.</span>
                       </span>
                    </p>
                </div>
            </div>
        </div>         
    </section>
  )
}

export default HowWeWork