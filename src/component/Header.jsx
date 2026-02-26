'use client'

import React from "react";
import { useState, useRef, useLayoutEffect } from "react";
import { animateNav } from "@/lib/animation/HeaderAnimation";
import Image from "next/image";
const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  return (
    <>
      <header className="font-poppins z-99 bg-black items-center text-white mix-blend-difference py-4 flex justify-between fixed w-full top-0 px-4 md:px-8 xl:px-20">
        <div className="">
          <div className="relative w-14 h-6">
           <Image src="/logo2.png" alt="logo" fill className="object-center object-cover border" />
          </div>
          <p className="text-xs font-raleway">Surupan Software House</p> 
        </div>
        <p onClick={() => setActiveNav(!activeNav)} className="uppercase cursor-pointer">{ activeNav? 'Close' : "Menu" } </p>
      </header>
      <Nav isActive={activeNav} />
    </>
  );
};

export const Nav = ({ isActive }) => {
  const ulRef = useRef(null);
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    animateNav(containerRef, isActive, ulRef)
  }, [isActive]);

  return(
    <nav ref={containerRef} className={`fixed z-48 top-0 bg-gradient-to-b from-black via-black/80 to-transparent text-white w-full h-full flex justify-center items-center z-40 -translate-y-[100%]`}>
        <ul ref={ulRef} className="uppercase flex flex-col justify-center items-center gap-4 text-center font-raleway text-4xl">
          <li className="overflow-hidden">
            <span>Home</span>
          </li>
          <li className="overflow-hidden">
            <span>About</span>
          </li>
          <li className="overflow-hidden">
            <span>Work</span>
          </li>
          <li className="overflow-hidden">
            <span>Contact</span>
          </li>
        </ul>
    </nav>
  )
}

export default Header;
