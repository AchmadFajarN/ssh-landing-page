import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section className='p-section w-full min-h-[100vh] xl:h-[100vh] grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2 gap-4'>
        <div className='mb-2'>
            <h1 className='mt-8 text-4xl font-raleway uppercase font-bold flex gap-1'>Tentang Kami <span className='font-poppins text-sm'>(1)</span></h1>
            <p className='mt-4 text-xl font-poppins'>Kami adalah penyedia layanan pembuatan website yang berfokus pada kualitas, strategi, dan ketepatan fungsi. Setiap website yang kami kembangkan dirancang untuk merepresentasikan identitas brand Anda secara profesional serta mendukung kebutuhan bisnis secara berkelanjutan.</p>
            <div className='flex items-center gap-4'>
                <button className='mt-4 rounded-[20px] bg-orange-300 text-black/80 px-6 py-2'>Kontak Kami</button>
                <button className='mt-4 rounded-[20px] bg-black/80 text-white px-6 py-2'>Lihat Projek</button>
            </div>
        </div>
        <div className='rounded-[20px] overflow-hidden'>
            <div className='w-full h-full relative'>
                <Image src='/about-image2.jpg' fill alt="about" className="object-center object-cover w-full h-full" />
            </div>
         </div>
         <div className="rounded-[20px] bg-orange-300 text-black/80 px-8 py-8 flex flex-col justify-between font-poppins">
            <p className='xl:text-xl'>Kami menghadirkan solusi digital yang berorientasi pada hasil. Setiap pengembangan dirancang untuk mendukung efektivitas pemasaran dan memberikan dampak yang terukur bagi pertumbuhan bisnis Anda.</p>
            <h3 className='text-4xl font-poppins font-bold '>Inovasi Digital</h3>
         </div>
          <div className='rounded-[20px] overflow-hidden md:col-span-2'>
            <div className='w-full h-full relative'>
                <Image src='/about-image3.jpg' fill alt="about" className="object-center object-cover w-full h-full" />
            </div>
         </div>
         <div className="rounded-[20px] bg-orange-300 text-black/80 px-8 py-8 flex flex-col justify-center items-center font-poppins">
            <h3 className='text-4xl font-poppins font-bold self-center'>Dampak Pemasaran</h3>
         </div>
    </section>
  )
}

export default About