import React from 'react'
import { selectedWork } from '@/lib/constant/constant'
import Image from 'next/image'
const SelectedWork = () => {
  return (
    <section className=' mt-20 w-full'>
        <div className='w-full min-h-[100vh] bg-black/90  text-white pt-20 pb-10'>
            <div className='font-poppins  grid grid-cols-3'>
                <div></div>
                <h1 className='col-span-2 text-xl xl:text-2xl pr-8'>Setiap karya merepresentasikan pendekatan yang terstruktur dan berorientasi pada efektivitas. Kami berfokus pada solusi yang relevan, fungsional, dan memberikan nilai nyata.</h1>
            </div>
            <div className='mt-14'>
                <h2 className='px-4 md:px-8 xl:px-20 font-raleway text-4xl mb-8 font-bold uppercase flex gap-1'>Proyek Pilihan <span className='font-poppins text-sm'>(2)</span></h2>
                <div className='mt-2'>
                    {
                        selectedWork.map((p, i) => {
                            return(
                                <div key={i} className={`grid grid-cols-3 px-4 md:px-8 xl:px-20 ${ i === selectedWork.length - 1 ? 'border-y' : 'border-t' } py-20`}>
                                    <div className='flex gap-2 px-4 font-poppins xl:items-center'>0{i + 1}<span className='text-2xl font-raleway font-semibold'>{ p.name }</span></div>
                                    <div className='col-span-2 pr-4 md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3'>
                                        <div className='flex gap-4 self-start xl:self-center flex-wrap'>
                                            {
                                                p.tools.map((t, i) => <div className='bg-orange-300 text-black/90 rounded-[20px] px-4 py-2 font-poppins' key={i}>{t}</div>)
                                            }
                                        </div>
                                        <div className='self-start xl:self-center hidden md:block xl:text-xl'>{ p.description }</div>
                                        <div className='hidden xl:block h-60 relative rounded-[12px] overflow-hidden'>
                                            <Image fill alt={p.name} src={p.img} className='object-cover object-center' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            <div className='flex justify-start mt-8 px-4 md:px-8 xl:px-20'>
                <div className='px-4 overflow-hidden group mt-2 h-8 text-xl group'>
                    <div className='-translate-y-8 group-hover:translate-y-0 transition-transform duration-200 ease-in-out'>
                        <p>Lihat Projek Lain?</p>
                        <p>Lihat Projek Lain?</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SelectedWork