import React from 'react'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import logo from '@/public/Logo/Logo.svg'
import phone from '@/public/Navbar/phone.svg'
import Link from 'next/link'

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '#home-section', current: false },
  { name: 'About', href: '#about-section', current: false },
  { name: 'Recipe', href: '#cook-section', current: false },
  { name: 'Gallery', href: '#gallery-section', current: false },
]

const Navbar = () => {
  return (
    <Disclosure as="nav" className='navbar'>

      <>
        <div className='mx-auto max-w-7xl p-3 lg:px-8 bg-bgpink'>
          <div className='relative flex items-center'>

            <div className='flex flex-1 items-center justify-between'>

              {/* logo section */}
              <div className='flex flex-shink-0 items-center border-right'>
                <Image src={logo} width={36} height={36} alt={logo} />
                <Link href="/" className='text-2xl font-semibold text-black ml-4 '>
                  Cook&apos;s kitchen
                </Link>
              </div>

              {/* menu link */}
              <div className='flex items-center border-right'>
                <div className='flex justify-end space-x-4' >
                  {
                    navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        {item.name}
                      </Link>
                    ))
                  }
                </div>
              </div>

              {/* Button Section */}
              <div className='gap-6 lg:flex'>
                <div className='flex items-center gap-2'>
                  <Image src={phone} width={19} height={19} alt={phone} />
                  <p className='text-lg font-medium'>+8801971338816</p>
                </div>

                <div>
                  <button className='flex justify-end text-xl font-medium bg-bgpink text-pink py-2 lg:px-4 navbutton rounded-full hover:text-white hover:bg-pink'>
                    Sign In
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </>
    </Disclosure>
  )
}

export default Navbar