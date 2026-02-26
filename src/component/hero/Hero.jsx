
const Hero = () => {
  return (
    <section className="h-[100vh] text-black p-section">
        <div className="w-full h-full relative overflow-hidden flex justify-center items-end pb-40 flex-col">
            <div className="flex flex-col w-full items-center">
                <div data-scroll data-scroll-speed="0.2" className="text-[5rem] md:text-[8rem] top-2 font-raleway uppercase font-bold  text-border-stroke -mb-14 md:-mb:-80 xl:-mb-24">
                    <h1>Create</h1>
                </div>
                <div data-scroll data-scroll-speed="0.2" className="text-[5rem] md:text-[8rem] top-2 font-raleway uppercase font-bold -mb-14 md:-mb:-80 xl:-mb-24 text-white z-44 mix-blend-difference">
                    <h1>Launch</h1>
                </div>
                <div data-scroll data-scroll-speed="0.2" className="text-[5rem] md:text-[8rem] font-raleway uppercase font-bold text-border-stroke">
                    <h1>Grow</h1>
                </div>
            </div>
            <div className="font-poppins text-center w-full">
                <p>From idea to impact,</p>
                <p>we build what moves your business forward</p>
                <button className="border px-6 py-2 mt-2 rounded-[20px] font-raleway bg-black text-white hover:bg-transparent hover:text-black cursor-pointer transition-color duration-300 ease-in-out">About Us</button>
            </div>
        </div>
    </section>
  )
}

export default Hero