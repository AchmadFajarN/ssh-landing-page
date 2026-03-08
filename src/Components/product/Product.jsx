'use client'

import React from 'react'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { products } from '@/lib/constant/constant'
import { useRef, useLayoutEffect } from 'react'
import { productAnimation } from '@/lib/animation/ProductAnimation'
const Product = () => {
  const cardRef = useRef([]);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    productAnimation(sectionRef, cardRef);
  }, []);
  return (
    <> 
        <section ref={sectionRef} className="p-section min-h-[100vh] bg-gray-100 pb-20">
            <div className="flex justify-center items-center">
                <h1 className='text-4xl font-raleway uppercase font-[600] flex items-center gap-1'>Produk<span className="font-poppins text-sm">(4)</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-4'>
                {
                    products.map((p, i) => {
                        return(
                        <div ref={(el) => (cardRef.current[i] = el)} key={i} className='mt-8 h-280 bg-white shadow-md rounded-[28px]  relative overflow-hidden p-[16px] flex flex-col animated-card-container'>
                            <div className="relative rounded-[12px] overflow-hidden h-80">
                                {/* animated image: img-animated */}
                                <Image style={{ clipPath: 'circle(0% at 50% 50%)' }} fill src={p.img} alt='product' className='object-center object-cover img-animated' />
                            </div> 
                            <div className='mt-6 text-black/90 flex-2 flex flex-col animated-text-container'>
                                    <div className='flex justify-between gap-4'>
                                        {/* animated title: animated-title  */}
                                        <p className='text-6xl md:text-4xl xl:text-3xl font-poppins animated-title font-[600]'>{ p.title }</p>
                                        <p className='font-bold text-2xl xl:text-lg'>0{i+1}</p>
                                    </div>
                                    <div className="text-xl font-poppins mt-4 flex flex-col flex-2 justify-between">
                                        <div className='flex-2 flex flex-col '>
                                            {/* animated description: animated-description */}
                                            <p className='text-black/50 mb-4 animated-description'>{p.description}</p>
                                            <ul className='flex bg-orange-300 p-8 rounded-[12px] flex-col items gap-2 text-2xl md:text-xl'>
                                                {/* animated list: animated-list */}
                                                {
                                                    p.features.map((f, i) => <li key={i} className='flex gap-2 items-center animated-list'><span><CheckCircle /></span>{f}</li>)
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
            </div>
        </section>
    </>
  )
}

export default Product