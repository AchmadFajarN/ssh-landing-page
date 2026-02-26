'use client'

import Image from "next/image";
import { aboutAnimation, aboutTextAnimation } from "@/lib/animation/aboutAnimation";
import { useLayoutEffect, useRef } from "react";
import Clock from "../Clock";
import DateDisplay from "../Date";
import { motion } from 'motion/react';


const About = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const textRef = useRef(null);
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    aboutAnimation(containerRef, triggerRef, textRef);
    // aboutTextAnimation(triggerRef, textRef, aboutRef);
  }, []);
  return (
    <>
    <section ref={triggerRef} className="p-section h-[100vh] relative grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="order-2 xl:order-0">
        <h1 ref={aboutRef} className="text-xl font-raleway flex justify-start gap-1 font-bold items-start uppercase xl:-order-1 xl:text-4xl">About Us  <span className="text-sm font-poppins">(1)</span></h1>
         <p ref={textRef} className="font-poppins mt-8 text-xl  xl:text-4xl" >
            We are a software house building focused digital products for startups and growing brands. We combine strategy, design, and design, and engineering to create systems that are clear, is crafted to strengthen identity and deliver real impact.
         </p>
      </div>
      <div className="w-full h-full pb-8">
        <div ref={ containerRef } className="relative size-40 -translate-y-140 md:-translate-y-200 xl:-translate-y-154 -rotate-20 translate-x-20 md:translate-x-40 xl:-translate-x-60 rounded-[20px] overflow-hidden">
          <Image src={'/image/hero.png'} alt="hero" fill className="w-full h-full object-center object-cover brightness-20" />
        </div>
      </div>
      
    </section>
    </>
    
  );
};

export default About;
