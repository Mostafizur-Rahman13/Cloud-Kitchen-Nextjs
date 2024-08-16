'use client'
import React from 'react';
import Image from 'next/image';
import arrow from '@/public/Images/Newsletter/arrow.svg';
import soup from '@/public/Images/Newsletter/soup.svg';
import onion from '@/public/Images/Newsletter/onion.svg';
import lec from '@/public/Images/Newsletter/lec.svg';
import yellow from '@/public/Images/Newsletter/yellow.svg';
import { Fade } from 'react-awesome-reveal';

const Newsletter = () => {
  return (
    <div className='relative text-white'>
      <div className='bg-pink mx-auto max-w-2xl br-50 md:max-w-7xl mt-48 rounded-lg'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8'>
          {/* Column 1 */}
          <div className='col-span-7'>
            <div className='m-10 lg:ml-32 lg:mt-20 lg:mb-20'>

              <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                <h3 className='text-lg font-normal mb-3 ls-51 text-white'>Newsletter</h3>
                <h3 className='text-3xl md:text-5xl font-semibold mb-8'>Subscribe our <br />Newsletter</h3>
              </Fade>

              <div>
                <div className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full'>

                  <input className='py-6 sm:py-8 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black' type="Email adress" name='email' placeholder='@ enter you email address' autoComplete='off' />

                  <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                    <button type='submit' className='p-1 focus:outline-none focus:shadow-outline'>
                      <Image src={arrow} alt='inputicon' width={57} height={71} />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
          {/* Column 2 */}
          <div className='relative col-span-5 hidden md:block'>

            <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
              <div>
                <Image src={soup} alt={soup} width={626} height={602} className='-mt-24' />
              </div>
            </Fade>


            <div className='absolute top-[78%]'>
              <Fade direction='down' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                <Image src={onion} alt={onion} width={300} height={122} />
              </Fade>
            </div>



            <div className='absolute top-[30%] right-[-23%]'>
              <Fade direction='left' delay={800} cascade damping={1e-1} triggerOnce={true}>
                <Image src={lec} alt={lec} width={300} height={122} />
              </Fade>
            </div>

            <div className='absolute bottom-[10%] left-[-0%]'>
              <Fade direction='right' delay={800} cascade damping={1e-1} triggerOnce={true}>
                <Image src={yellow} alt={yellow} width={59} height={59} />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Newsletter