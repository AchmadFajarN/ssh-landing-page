'use client'
import Hero from "@/Components/hero/Hero";
import About from "@/Components/about/About";
import SelectedWork from "@/Components/selectedWork/SelectedWork";
import HowWeWork from "@/Components/howWeWork/HowWeWork";
import Product from "@/Components/product/Product";
import Footer from "@/Components/Footer";
import { useEffect } from "react";
import ListWork from "@/Components/ListWork/ListWork";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

  }, []);
  return (
    <>
    <main className="bg-white min-h-[100vh] w-full">
      <Hero /> 
      <About />
        {/* <SelectedWork /> */}
        <ListWork />
        <HowWeWork />
        <Product />    
    </main>
    <Footer />
    </>
  );
}
