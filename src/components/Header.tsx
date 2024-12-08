'use client'

import { useState } from 'react';
import { AiOutlineExclamationCircle, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <section className="relative">
     {/* upper header */}
    <div className="bg-[#272343] w-full h-[45px] content-center">
       
        <div className="max-w-[1321px] mx-auto flex justify-between px-4 md:px-6 lg:px-0">
            <div className="text-white flex items-center text-xs md:text-sm">
                <p className="mr-1">✓</p>
                <p className="hidden sm:block">Free shipping on all orders over $50</p>
                <p className="sm:hidden">Free shipping over $50</p>
            </div>
            <div className="flex text-white gap-2 md:gap-6 text-xs md:text-sm items-center">
                <div>
                    <p>Eng</p>
                </div>
                <p className="hidden sm:block">Faqs</p>
                <div className="flex items-center">
                    <AiOutlineExclamationCircle className="mr-1" />
                    <p>Need Help</p>
                </div>
            </div>
        </div>
    </div>

    {/* middle header  */}
    <div className="bg-[#F0F2F3] w-full h-[84px] content-center">
        <div className="max-w-[1321px] mx-auto flex justify-between items-center px-4 md:px-6 lg:px-0">
            <div className="flex items-center gap-2">
                <Image src={"/images/Logo.png"} alt="logo" width={40} height={40}/>
                <h1 className="text-xl md:text-2xl font-medium">Comforty</h1>
            </div>
            <div className="bg-white rounded-sm">
                <Link href="/cart" className="flex items-center gap-2 p-1">
                    <CiShoppingCart />
                    <p className="hidden sm:block">Cart</p>
                    <div className="bg-[#007580] rounded-full text-white w-[20px] h-[20px] flex items-center justify-center">2</div>
                </Link>
            </div>
        </div>
    </div>

    {/* bottom header  */}
    <div className="w-full bg-white h-[74px] content-center">
        <div className="max-w-[1321px] mx-auto flex justify-between items-center px-4 md:px-6 lg:px-0 h-full">
            {/* links */}
            <button 
              className="lg:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            <ul className={`flex flex-col lg:flex-row gap-4 lg:gap-8 absolute lg:static left-0 top-full w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-md lg:shadow-none transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}`}>
                <li className="hover:text-[#007580]"><Link href="/">Home</Link></li>
                <li className="hover:text-[#007580]"><Link href="/shop">Shop</Link></li>
                <li className="hover:text-[#007580]"><Link href="/products">Product</Link></li>
                <li className="hover:text-[#007580]"><Link href="/contact">Contact</Link></li>
                <li className="hover:text-[#007580]"><Link href="/about">About</Link></li>
            </ul>

            <div className="hidden md:flex gap-2 text-sm">
                <p>Contact:</p>
                <p>(808) 555-0111</p>
            </div>
        </div>
    </div>

    </section>
    </>
  )
}

export default Header

