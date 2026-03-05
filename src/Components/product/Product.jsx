import React from 'react'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { products } from '@/lib/constant/constant'
const Product = () => {
  return (
    <section className="p-section min-h-[100vh] bg-gray-100 pb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-4">
        {
            products.map((p, i) => {
                return(
                <div key={i} className='mt-8 h-280 bg-white shadow-md rounded-[28px]  relative overflow-hidden p-[16px] flex flex-col'>
                    <div className="relative rounded-[12px] overflow-hidden h-80">
                        <Image fill src={p.img} alt='product' className='object-center object-cover' />
                    </div> 
                    <div className='mt-6 text-black/90 flex-2 flex flex-col '>
                            <div className='flex justify-between gap-4'>
                                <p className='text-6xl md:text-4xl font-poppins font-[600]'>{ p.title }</p>
                                <p className='font-bold text-2xl'>0{i+1}</p>
                            </div>
                            <div className="text-xl font-poppins mt-4 flex flex-col flex-2 justify-between">
                                <div className='flex-2 flex flex-col '>
                                    <p className='text-black/50 mb-4'>Website profesional siap pakai dalam 5-7 hari. Pilihan tepat untuk campaign marketing dan personal branding.</p>
                                    <ul className='flex bg-orange-300 p-8 rounded-[12px] flex-col items gap-2 text-2xl md:text-xl'>
                                        {
                                            p.features.map((f, i) => <li key={i} className='flex gap-2 items-center'><span><CheckCircle /></span>{f}</li>)
                                        }
                                    </ul>
                                    <div className='flex flex-col justify-center items-center mt-8 gap-2 flex-2'>
                                        <span className="text-xl font-normal mr-8 font-raleway">Mulai dari</span>
                                        <p className='text-6xl font-[600]'><span>Rp.</span>{p.price}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <button className='w-full bg-black/80 text-white py-4 rounded-[12px]'>Konsiltasi Sekarang</button>
                                </div>
                            </div>
                    </div> 
                 </div>
                )
            })
        }
    </section>
  )
}

export default Product