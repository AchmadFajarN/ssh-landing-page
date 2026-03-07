import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white'>
        <div className="w-full h-full px-4 md:px-8 xl:px-20 bg-black/90 text-white px-4 py-8 overflow-hidden">
            <h1 className='md:text-[5rem] text-4xl w-300  font-poppins'>Surupan Software House</h1>
            <div className='flex flex-col md:flex-row md:gap-20 mt-20 gap-10 py-8'>
                <div className='font-poppins'>
                    <p className='text-xl font-[600] text-white/80'>Quick Link</p>
                    <ul className='text-xl flex flex-col gap-2 text-white/50 mt-6'>
                        <li>Home</li>
                        <li>Projek Pilihan</li>
                        <li>Bagaimana Kita Bekerja</li>
                        <li>Product</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-[600] text-white/80'>Kontak</p>
                    <ul className='text-xl flex flex-col gap-2 text-white/50 mt-6'>
                        <li>example@gmail.com</li>
                        <li>+62 877 2122 1113</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer