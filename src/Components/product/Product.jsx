import React from 'react'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { products } from '@/lib/constant/constant'
const Product = () => {
  return (
    <section className="p-section min-h-[100vh] pb-20 grid grid-cols-1 gap-8">
        {
            products.map((p, i) => {
                return(
                <div key={i} className='mt-8 min-h-260 bg-gray-100 rounded-[28px]  relative overflow-hidden p-[16px] flex flex-col'>
                    <div className="relative rounded-[12px] overflow-hidden h-80">
                        <Image fill src={p.img} alt='product' className='object-center object-cover' />
                    </div> 
                    <div className='mt-6 text-black/90'>
                            <div className='flex justify-between gap-4'>
                                <p className='text-6xl font-poppins font-[600]'>{ p.title }</p>
                                <p className='font-bold text-2xl'>0{i+1}</p>
                            </div>
                            <div className="text-xl font-poppins mt-4">
                                <p className='text-black/50 mb-4'>Website profesional siap pakai dalam 5-7 hari. Pilihan tepat untuk campaign marketing dan personal branding.</p>
                                <ul className='flex bg-orange-300 p-8 rounded-[12px] flex-col items gap-2 text-2xl'>
                                    {
                                        p.features.map((f, i) => <li key={i} className='flex gap-2 items-center'><span><CheckCircle /></span>{f}</li>)
                                    }
                                </ul>
                                <div className='flex flex-col justify-center items-center mt-8 gap-2'>
                                    <span className="text-xl font-normal mr-8 font-raleway">Mulai dari</span>
                                    <p className='text-6xl font-[600]'><span>Rp.</span>{p.price}</p>
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