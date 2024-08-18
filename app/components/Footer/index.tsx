import React from 'react';
import Image from 'next/image';
import logo from '@/public/Images/Logo/Logo.svg';
import Link from 'next/link';

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Sociallinks {
  imgSrc: string;
  link: string;
  width: number;
}

const sociallinks: Sociallinks[] = [
  {
    imgSrc: '/images/Footer/facebook.svg',
    link: 'https://facebook.com',
    width: 10
  },
  {
    imgSrc: '/images/Footer/insta.svg',
    link: 'https://instagram.com',
    width: 14
  },
  {
    imgSrc: '/images/Footer/twiter.svg',
    link: 'https://twiter.com',
    width: 14
  },
]

const products: ProductType[] = [
  {
    id: 1,
    section: 'Company',
    link: ['About', 'Careers', 'Mobile', 'Blog', 'How we work?']
  },
  {
    id: 2,
    section: 'Contact',
    link: ['Help/FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners']
  },
  {
    id: 3,
    section: 'More',
    link: ['Recipe', 'Chef', 'Food', 'Support']
  },

]

const Footer = () => {
  return (
    <div className='mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='my-12 place-content-center grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12'>
        {/* Column -1 */}
        <div className='sm:col-span-6 lg:col-span-5'>
          <div className='flex flex-shrink-0 items-center border-left'>
            <Image src={logo} alt='logo' width={56} height={56} />
            <Link href='/' className='text-black ml-4 font-semibold'>Cook&apos;s Kitchen</Link>
          </div>


          <h3 className='text-textbl text-xs font-medium mt-5 mb-4 lg:ml-16'>Open an account in minutes, get full financials <br /> control for much longer.</h3>

          <div className='flex gap-4'>
            {
              sociallinks.map((items, i) => (
                <Link href={items.link} key={i}>
                  <div className='bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink'>
                    <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className='sepiaa' />
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
        {/* Coloumn 2/3/4 */}
        {
          products.map((product) => (
            <div key={product.id} className='sm:col-span-2'>
              <p className='text-black text-xl font-semibold mb-9'>{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href="/" className='text-footerlinks text-base font-normal mb-6 space-links'>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
      </div >
      {/* Copyrights Section */}
      <div className='py-10 md:flex items-center justify-between border-t border-t-bordertop'>
        <h4 className='text-darkgrey text-sm text-center md:text-start font-normal'>©2024 -  Cook&apos;s Kitchen. All Rights Reserved</h4>

        <div className='flex gap-5 mt-5 nd:mt-0 justify-center md:justify-start'>
          <h4 className='text-darkgrey text-sm font-normal'>
            <Link href="/" target='_blank'>
              Privacy Policy
            </Link>
          </h4>

          <div className='h-5 bg-bordertop w-0.5'>

          </div>
          <div className='text-darkgrey text-sm font-normal'>Terms & Conditions</div>
        </div>
      </div>

    </div >
  )
}

export default Footer