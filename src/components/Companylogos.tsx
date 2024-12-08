import React from 'react'
import Image from 'next/image'

const Companylogos = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className='max-w-[1321px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:h-[139px] flex flex-wrap justify-center lg:justify-between items-center gap-6 sm:gap-8 lg:gap-0'>
        <Image src="/images/zapier.png" alt="logo1" width={85} height={87} className="w-24 sm:w-28 lg:w-auto h-auto"/>
        <Image src="/images/pipedrive.png" alt="logo2" width={107} height={109} className="w-24 sm:w-28 lg:w-auto h-auto"/>
        <Image src="/images/cibbank.png" alt="logo3" width={135} height={139} className="w-24 sm:w-28 lg:w-auto h-auto"/>
        <Image src="/images/logo4.png" alt="logo4" width={63} height={65} className="w-16 sm:w-20 lg:w-auto h-auto"/>
        <Image src="/images/burnt.png" alt="logo5" width={98} height={101} className="w-24 sm:w-28 lg:w-auto h-auto"/>
        <Image src="/images/panda.png" alt="logo6" width={113} height={115} className="w-24 sm:w-28 lg:w-auto h-auto"/>
        <Image src="/images/moz.png" alt="logo7" width={84} height={87} className="w-24 sm:w-28 lg:w-auto h-auto"/>
      </div>
    </div>
  )
}

export default Companylogos

