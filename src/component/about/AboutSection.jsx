import React from 'react'
import Clock from "../Clock";
import DateDisplay from "../Date";
import { motion } from 'motion/react';
import { Bell, Trash } from "lucide-react";

const AboutSection = () => {
  return (
     <div className="inset-0 absolute p-section text-white z-40 pb-20">
        <div className="w-full h-full py-8 px-6 flex justify-between flex-col">
            <div className="font-poppins ">
                <div className=" flex justify-between items-center ">
                    <DateDisplay />
                    <motion.h1 initial={{ opacity: 0, translateY: 20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.5 }} className="text-xl font-raleway flex justify-start gap-1 font-bold items-start uppercase xl:-order-1 xl:text-4xl">
                        <span >About Us</span>
                        <span className="text-sm font-poppins">(1)</span>
                    </motion.h1>
                    <Clock />
                </div>
            </div>
            <div className="flex flex-col gap-4  overflow-hidden relative">
              <div className={`flex flex-col gap-4 ${ display ? "translate-y-0" : "translate-y-30" } transition-transform duration-300 ease-in-out`}>
                <motion.div initial={{ opacity: 0, translateY: 20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.5 }} className="glassmorphism px-6 py-4 xl:w-100">
                    <p>We are a software house building focused digital products for startups and growing brands. We combine strategy, design, and engineering to create systems that are clear, scalable, and built with purpose. Every project is crafted to strengthen identity and deliver real impact..</p>
                    <button className="mt-4 border border-white px-6 py-2 rounded-[20px] bg-white text-black font-poppins hover:bg-transparent hover:text-white transition-color duration-300 ease-in-out cursor-pointer">See Our Work</button>
                </motion.div>
                <div className={`glassmorphism relative ${ display ? 'translate-y-0' : 'translate-y-44' } transition-transform duration-300 ease-in-out px-6 py-4 xl:w-120 flex flex-col justify-between`}>
                    <div onClick={() => setDisplay(false)} className="absolute right-6 cursor-pointer">
                      <Trash />
                    </div>
                    <p>Have an idea in mind? Let’s talk and bring it to life.</p>
                    <button className="mt-4 border px-6 py-2 rounded-[20px] text-white self-start font-poppins cursor-pointer">Contact Us</button>
                </div>
              </div>
                <div onClick={() => setDisplay(true)} className="absolute bottom-0 left-0 size-8 flex justify-center items-center relative cursor-pointer xl:self-end">
                  {
                    !display  &&  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3, ease: ['easeInOut'] }} className="absolute bg-black rounded-full size-4 top-0 right-0 p-1 flex justify-center items-center">
                      <div className="bg-white w-full h-full rounded-full"></div>
                    </motion.div>
                  }
                  <Bell />
                </div>
            </div>
        </div>
      </div>  
  )
}

export default AboutSection