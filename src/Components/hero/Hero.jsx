import Image from "next/image"

const Hero = () => {
  return (
    <section className='p-section min-h-[100vh] xl:h-[100vh]'>
        <div className='h-full mt-4 pt-8 flex flex-col'>
            <div className=' text-center text-4xl font-raleway font-bold flex flex-col items-center gap-1'>
                <p className='font-normal text-sm uppercase px-4 py-2 rounded-[12px] xl:text-[1rem] bg-orange-300 text-black/90'>jasa pembuatan website</p>
                <div className="">
                    <h1>Tingkatkan Kredibilitas Bisnis</h1>
                    <h1>Di ranah digital</h1>
                </div>
                <p className='font-normal text-sm font-poppins mt-4'>Kami menghadirkan representasi bisnis yang profesional melalui website yang berkualitas</p>
            </div>
            <div className='mt-8 bg-gray-200 text-black/90 h-180 grid grid-cols-3 grid-rows-3 bg-gray-200 rounded-[20px] py-8 px-4 gap-2 xl:gap-6  xl:flex-2'>
                <div className="row-span-2 bg-gray-800 rounded-[20px] relative overflow-hidden ">
                    <Image fill src={'/image-hero-2.jpg'} alt="hero" className="object-left object-cover grayscale-100 hover:grayscale-0 transition-all duration-200 ease-in-out" />
                </div>
                <div className="row-span-3 bg-gray-800 rounded-[20px] overflow-hidden relative">
                     <Image fill src={'/image-hero.jpg'} alt="hero" className="object-center object-cover" />
                </div>
                <div className="flex justify-center items-center text-center font-poppins text-xl xl:text-start xl:text-2xl xl:items-start ">Ruang digital yang terarah, dibangun dengan presisi dan tujuan yang jelas.</div>
                <div className='row-span-2 bg-gray-800 rounded-[20px] overflow-hidden relative'>
                      <Image fill src={'/image-hero-3.jpg'} alt="hero" className="object-center object-cover grayscale-100 brightness-80  hover:grayscale-0 transition-all duration-200 ease-in-out" />
                </div>
                <div className='flex text-center justify-center items-center row-span-1 text-xl xl:text-start xl:text-2xl xl:items-start  font-poppins'>Hadir sebagai langkah strategis untuk membuka peluang dan menggerakkan pertumbuhan.</div>
            </div>
        </div>
    </section>
  )
}

export default Hero