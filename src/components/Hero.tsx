import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="w-full">
      <div className='max-w-[1321px]  bg-[#F0F2F3] mx-auto px-4 lg:px-24 sm:px-6  py-12 lg:py-0 lg:h-[750px] flex flex-col lg:flex-row justify-between lg:gap-8 xl:gap-32 items-center'>
        <div className='flex flex-col mb-8 lg:mb-0 text-center lg:text-left'>
          <p className='text-[14px] mb-2 lg:mb-4'>Welcome to chairy</p>
          <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight mb-6 lg:mb-8'>
            Best Furniture <br className="hidden sm:inline" /> Collection for your <br className="hidden sm:inline" /> interior.
          </h1>
          <button className='bg-[#029FAE] text-white w-full sm:w-[171px] h-[52px] rounded-lg mx-auto lg:mx-0 transition-colors duration-300 hover:bg-[#027e8a]'>
            Shop Now →
          </button>
        </div>
        <div className='w-full sm:w-2/3 lg:w-auto'>
          <Image 
            src="/images/chair.png" 
            alt="chair" 
            width={434} 
            height={584}
            className="w-full h-auto object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 434px"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero

