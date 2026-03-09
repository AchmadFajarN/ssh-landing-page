'use client';

import { animatePageIn } from "@/lib/animation/templateAnimation";
import { useLayoutEffect } from "react";

export default function Template({ children }) {
  useLayoutEffect(() => {
    animatePageIn();
  }, []);
  
  return (
    <div>
        {/* <div className="w-full h-full fixed inset-0 bg-white z-99 flex justify-center items-center font-poppins text-2xl">
            <div className="border size-40 rounded-[50%] border-1 flex justify-center items-center bg-orange-300 text-black/90">
                <p>100%</p>
            </div>
        </div> */}
        {/* <div id="container-banner" className="fixed inset-0 w-screen h-screen z-99 grid grid-cols-2 grid-rows-2 gap-4 p-8">
            <div id="banner-1" className=" bg-white rounded-[20px] border-orange-300 bg-white border"></div>
            <div id="banner-2" className=" bg-white rounded-[20px] border-orange-300 bg-white border"></div>
            <div id="banner-3" className=" bg-white rounded-[20px] border-orange-300 bg-white border"></div>
            <div id="banner-4" className=" bg-white rounded-[20px] border-orange-300 bg-white border"></div>
        </div> */}

        <div id="background" className="h-screen bg-[#131313] fixed  inset-0 w-screen z-80"></div>
        <div id="background2" className="h-screen bg-orange-300 fixed inset-0 w-screen z-[999]"></div>
        {
            children
        }
    </div>
  );
}
