import React from 'react'

const Header = () => {
  return (
    <header className='px-4 md:px-8 xl:px-20 py-4 fixed top-0 w-full flex justify-between items-center z-40 glassmorphism'>
        <div className='z-44 '>
            <h1 className='text-xl md:text-2xl font-raleway -mb-1 font-bold'>SSH</h1>
            <p className="text-xs md:text-sm">Surupan Software House</p>
        </div>
        <div className='md:text-[16px] font-raleway uppercase'>
            Menu
        </div>
    </header>
  )
}

export default Header