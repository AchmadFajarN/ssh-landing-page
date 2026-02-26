'use client'

import Header from "@/component/Header";
import { useEffect } from "react";
import Hero from "@/component/hero/Hero";
import About from "@/component/about/About";
import ModernComponen from "@/component/modernComponen/ModernComponen";
import SelectedProject from "@/component/project/SelectedProject";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

  }, []);
  return (
    <>
      <Header />
      <main className="bg-white min-h-[100vh]">
        <Hero />
        <About />
        <SelectedProject />
        <ModernComponen />
      </main>
    </>
  );
}
