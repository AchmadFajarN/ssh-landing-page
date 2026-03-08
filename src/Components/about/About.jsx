"use client"

import React from 'react'
import Image from 'next/image'
import { useRef, useLayoutEffect } from 'react';
import { animatedAbout } from '@/lib/animation/AboutAnimation';
const About = () => {
  const aboutText = useRef(null);
  const firstHeadingText = useRef(null);
  const secondHeadingText = useRef(null);
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const trigger = useRef(null);

  const elements = [
    { firstImage, secondImage },
    { textAbout: aboutText, firstHeadingText, secondHeadingText }
  ];

  useLayoutEffect(() => {
    animatedAbout(trigger, elements);
  }, []);
  
  return (
    <section ref={trigger} className='p-section my-20 xl:my-40 w-full min-h-[100vh] xl:h-[100vh] grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2 gap-4'>
        <div className='mb-2'>
            <h1 className='mt-8 text-4xl font-raleway uppercase font-bold flex gap-1'>Tentang Kami <span className='font-poppins text-sm'>(1)</span></h1>
            <p ref={aboutText} className='mt-4 text-xl font-poppins'>
              Kami adalah tim yang berfokus pada pengembangan website berkualitas dengan pendekatan strategi dan desain yang tepat, untuk membantu brand Anda tampil profesional dan berkembang secara berkelanjutan.
            </p>
            <div className='flex items-center gap-4'>
                <button className='mt-4 rounded-[20px] bg-orange-300 text-black/80 px-6 py-2'>Kontak Kami</button>
                <button className='mt-4 rounded-[20px] bg-black/80 text-white px-6 py-2'>Lihat Projek</button>
            </div>
        </div>
        <div className='rounded-[20px] overflow-hidden xl:order-2'>
            <div className='w-full h-full relative'>
                <Image src='/about-image2.jpg' fill alt="about" className="object-center object-cover w-full h-full" />
                <div ref={firstImage} className="absolute origin-top-left rounded-[20px] bg-white inset-0"></div>
            </div>
         </div>
         <div className="rounded-[20px] bg-orange-300 text-black/80 xl:col-span-2 px-8 py-8 flex flex-col justify-between font-poppins">
            <p className='xl:text-xl'>Kami menghadirkan solusi digital yang berorientasi pada hasil. Setiap pengembangan dirancang untuk mendukung efektivitas pemasaran dan memberikan dampak yang terukur bagi pertumbuhan bisnis Anda.</p>
            <h3 ref={firstHeadingText} className='text-4xl font-poppins font-bold '>Inovasi Digital</h3>
         </div>
          <div className='rounded-[20px] overflow-hidden md:col-span-2 xl:col-span-1'>
            <div className='w-full h-full relative'>
                <Image src='/about-image3.jpg' fill alt="about" className="object-center object-cover w-full h-full" />
                <div ref={secondImage} className="absolute origin-top-left rounded-[20px] bg-white inset-0"></div>
            </div>
         </div>
         <div className="rounded-[20px] bg-orange-300 text-black/80 px-8 py-8 flex flex-col justify-center items-center font-poppins">
            <h3 ref={secondHeadingText} className='text-4xl font-poppins font-bold self-center'>Dampak Pemasaran</h3>
         </div>
    </section>
  )
}

export default About