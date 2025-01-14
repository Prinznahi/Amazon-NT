import React from 'react';
import Image from 'next/image';
import { SearchIcon, ShoppingCartIcon, MenuIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      <div className='flex item-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"/>
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4 "type="text" placeholder='Search Amazon ' /> 
          <SearchIcon className="h-12 p-4 text-black" />
        </div>
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello Nahom</p>
            <p className='font-extrabold md:text-small'>Account & list</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-small'>& Orders</p>
          </div>
          <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
            <ShoppingCartIcon className='h-8'>
            </ShoppingCartIcon>
            <p className='hidden md:inline font-extrabold md:text-small mt-2'>Cart</p>
          </div>
        </div> 
      </div>
      <div className='flex items-center bg-amazon_blue-light text-white text-sm p-2 pl-6 space-x-3'>
        <p className='link flex items-center'>
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
