import React, { ReactNode } from 'react'
import Image from 'next/image';
import logo from '@/public/Images/Logo/Logo.svg';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {

  return (
    <main className={"fixed transition-transform overflow-hidden z-10 bg-gray-100 bg-opacity-25 inset-0 ease-in-out" + (isOpen ? " opacity-100 duration-500 translate-x-0 cursor-pointer" : "opacity-0 -translate-x-full")}>

      <section className={"w-[340px] max-w-lg left-0 absolute bg-white h-full shadow-xl delay-500 duration-500 ease-out transition-all transform cursor-pointer" + (isOpen ? "translate-x-0" : "-translate-x-[100%]")}>

        <article className='relative w-[340px] max-w-lg pb-10 flex flex-col space-y-6 h-full'>

          <header className='px-4 py-4 flex items-center justify-between'>

            <div className='flex flex-shrink-0 items-center border-right'>
              <Image src={logo} width={36} height={36} alt={logo} />
              <div className='text-2xl font-semibold text-black ml-4'>
                Cook&apos;s kitchen
              </div>
            </div>

            <XMarkIcon className='block w-6 h-6'
              onClick={() => { setIsOpen(false); }}
            />

          </header>

          <div onClick={() => {
            setIsOpen(false)
          }}>
            {children}
          </div>

        </article>
      </section>
      {/* Mobile Overay Backdrop */}
      <section className='w-screen h-full cursor-pointer' onClick={() => { setIsOpen(false) }}>
      </section>
    </main>
  )
}

export default Drawer