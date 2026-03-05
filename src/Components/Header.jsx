import React from 'react'

const Header = () => {
  return (
    <header className='px-4 md:px-8 xl:px-20 py-4 fixed top-0 w-full flex justify-between items-center z-40 bg-black text-white mix-blend-difference'>
        <div className=''>
            <h1 className='text-4xl font-raleway -mb-1 font-bold'>SSH</h1>
            <p>Surupan Software House</p>
        </div>
        <div className='text-xl font-raleway uppercase'>
            Menu
        </div>
    </header>
  )
}

export default Header