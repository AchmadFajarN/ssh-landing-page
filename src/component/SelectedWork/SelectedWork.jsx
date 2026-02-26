'use client'
import { useRef, useLayoutEffect } from "react";
import { horizonScroll, animatedText } from "@/lib/animation/selectedWorkAnimation";
import Image from "next/image";

const SelectedWork = () => {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const triggerText = useRef(null);
  const textRef = useRef(null);
  useLayoutEffect(() => {
    horizonScroll(triggerRef, sectionRef);
    animatedText(triggerText, textRef);
  }, []);
  
  return (
    <section className=" overflow-hidde rounded-t-[20px]">
        <div className="relative" ref={triggerRef}>
          <div className="absolute top-20 left-4 xl:left-20">
            <h3 className="text-xl xl:text-4xl font-raleway uppercase font-bold">Selected Work <span className="font-poppins text-sm">(2)</span></h3>
          </div>
       
          <div ref={sectionRef} className="h-[100vh] w-[400vw] flex flex-row items-center relative pointer-events-none">
            <div className="w-[400vw] p-section h-full flex gap-28 "> 
              <div ref={triggerText} className="font-poppins uppercase font-bold text-xl md:text-2xl xl:text-6xl h-full pt-20  xl:w-240">
                <h3 ref={textRef}>
                  Built for growth-driven
                  businesses And ambitious
                  startups Strategic, scalable
                  Designed for impact
                </h3>
              </div>
              <div className="pt-20 flex-3 grid grid-cols-3 pb-8">
                  <div className="">
                      <div className="bg-white text-white gap-4 gap-4 h-full mr-8 xl:w-300 relative rounded-[40px] overflow-hidden shadow-[-1px_37px_51px_35px_rgba(0,_0,_0,_0.1)] p-4" >
                        <div className="relative w-full h-full rounded-[20px] overflow-hidden border border-slate-200">
                              <Image src={'/sipekad/sipekad2.jpeg'} alt="sipekad" fill className="object-right object-cover scale-x-104" />
                              <div className="absolute inset-0 bg-gradient-to-t from-white"></div>
                            <div className="text-black absolute inset-0 flex justify-end flex-col">
                              <div className="bg-gradient-to-t from-white/90 backdrop-blur-xs rounded-2xl xl:pb-18 pb-14 px-4 xl:px-16  xl:pt-14 text-black/90">
                                <h1 className="font-raleway text-4xl font-bold uppercase mb-4 xl:mb-8">Sipekad</h1>
                                <p className="text-md xl:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt libero quam architecto quae et dolor omnis doloremque quas accusantium.</p>
                                <button className="mt-4 shadow-xl border border-black/20 rounded-[40px] overflow-hidden bg-white xl:text-xl"><div className="shadow-[inset_0_-4px_12px_rgba(0,0,0,0.25)] px-8 py-2 w-full h-full">See Detail</div></button>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="">
                      <div className="bg-white text-white gap-4 gap-4 h-full mr-8 xl:w-300 relative rounded-[40px] overflow-hidden shadow-[-1px_37px_51px_35px_rgba(0,_0,_0,_0.1)] p-4" >
                        <div className="relative w-full h-full rounded-[20px] overflow-hidden border border-slate-200">
                              <Image src={'/sipekad/sipekad2.jpeg'} alt="sipekad" fill className="object-right object-cover scale-x-104" />
                              <div className="absolute inset-0 bg-gradient-to-t from-white"></div>
                            <div className="text-black absolute inset-0 flex justify-end flex-col">
                              <div className="bg-gradient-to-t from-white/90 backdrop-blur-xs rounded-2xl xl:pb-18 pb-14 px-4 xl:px-16 xl:pt-14 text-black/90">
                                <h1 className="font-raleway text-4xl font-bold uppercase mb-4 xl:mb-8">Pusdatin</h1>
                                <p className="xl:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt libero quam architecto quae et dolor omnis doloremque quas accusantium.</p>
                                <button className="mt-4 shadow-xl border border-black/20 rounded-[40px] overflow-hidden bg-white xl:text-xl"><div className="shadow-[inset_0_-4px_12px_rgba(0,0,0,0.25)] px-8 py-2 w-full h-full">See Detail</div></button>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="xl:pl-80">
                    <div className="flex justify-center items-center h-full flex-col">
                      <div className=" text-[3rem] xl:text-[8rem] font-bold uppercase font-raleway flex gap-2 flex flex-col items-center">
                        <p className="-mb-10 xl:-mb-20">See</p>
                        <p className="text-border-stroke -mb-10 xl:-mb-20">Another</p>
                        <p>Project</p>
                      </div>
                      <button className="border px-6 py-2 bg-black text-white font-raleway rounded-[20px] text-xl">Click Here</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default SelectedWork;
