'use client'

import Image from "next/image"
import { useLayoutEffect, useRef } from "react";
import { animateTextHeroSection } from "@/lib/animation/HerAnimation";

const Hero = () => {
  const containerHeading = useRef(null);
  const textHeroFirst = useRef(null);
  const textHeroSecond = useRef(null);

  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const thridImage = useRef(null);

  const refAnimate = { 
    headingContainer: containerHeading, 
    firstText: textHeroFirst, 
    secondText: textHeroSecond 
  }

  const refImage = {
    firstImage, secondImage, thridImage
  }

  useLayoutEffect(() => {
    animateTextHeroSection(refAnimate, refImage);
  }, []);
  
  return (
    <section className='p-section min-h-[100vh] xl:h-[100vh]'>
        <div className='h-full mt-4 pt-8 flex flex-col'>
            <div className=' text-center text-4xl font-raleway font-bold flex flex-col items-center gap-1'>
                <p className='font-normal text-sm uppercase px-4 py-2 rounded-[12px] xl:text-[1rem] bg-orange-300 text-black/90'>jasa pembuatan website</p>
                <div ref={containerHeading} className="">
                    <h1 className="overflow-hidden">Tingkatkan Kredibilitas Bisnis</h1>
                    <h1 className="overflow-hidden">Di ranah digital</h1>
                </div>
                <p className='font-normal text-sm font-poppins mt-4'>Kami menghadirkan representasi bisnis yang profesional melalui website yang berkualitas</p>
            </div>
            <div className='mt-8 bg-gray-200 text-black/90 h-180 grid grid-cols-3 grid-rows-3 bg-gray-200 rounded-[20px] py-8 px-4 gap-2 xl:gap-6  xl:flex-2'>
                <div className="row-span-2 bg-gray-800 rounded-[20px] relative overflow-hidden ">
                    <Image fill src={'/image-hero-2.jpg'} alt="hero" className="object-left object-cover grayscale-100 hover:grayscale-0 transition-all duration-200 ease-in-out" />
                    <div ref={firstImage} className="absolute rounded-[20px] origin-top w-full h-full inset-0 bg-gray-200"></div>
                </div>
                <div className="row-span-3 bg-gray-800 rounded-[20px] overflow-hidden relative">
                     <Image fill src={'/image-hero.jpg'} alt="hero" className="object-center object-cover" />
                     <div ref={secondImage} className="absolute rounded-[20px] origin-top w-full h-full inset-0 bg-gray-200"></div>
                </div>
                <div className="flex justify-center items-center text-center font-poppins text-xs md:text-xl  xl:text-start xl:text-2xl xl:items-start ">
                    <p ref={textHeroFirst}>Ruang digital yang terarah, dibangun dengan presisi dan tujuan yang jelas.</p>
                </div>
                <div className='row-span-2 bg-gray-800 rounded-[20px] overflow-hidden relative'>
                      <Image fill src={'/image-hero-3.jpg'} alt="hero" className="object-center object-cover grayscale-100 brightness-80  hover:grayscale-0 transition-all duration-200 ease-in-out" />
                      <div ref={thridImage} className="absolute rounded-[20px] origin-top w-full h-full inset-0 bg-gray-200"></div>
                </div>
                <div className='flex text-center justify-center items-center row-span-1 text-xs md:text-xl xl:text-start xl:text-2xl xl:items-start font-poppins'>
                    <p ref={textHeroSecond}>
                        Hadir sebagai langkah strategis untuk membuka peluang dan menggerakkan pertumbuhan.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero