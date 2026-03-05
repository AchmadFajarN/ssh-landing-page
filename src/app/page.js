'use client'
import Header from "@/Components/Header";
import Hero from "@/Components/hero/Hero";
import About from "@/Components/about/About";
import SelectedWork from "@/Components/selectedWork/SelectedWork";
import HowWeWork from "@/Components/howWeWork/HowWeWork";
import Product from "@/Components/product/Product";
import Contact from "@/Components/contact/Contact";
import Footer from "@/Components/Footer";
import { useEffect } from "react";
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
    <main className="bg-white min-h-[100vh] w-full">
      <Hero /> 
      <div>
        <About />
        <SelectedWork />
        <HowWeWork />
        <Product />
      </div>    
    </main>
    <Footer />
    </>
  );
}
