'use client'
import Image from 'next/image';
import React from 'react';
import CookImg from '@/public/Images/Cook/cook.png';
import Burger from '@/public/Images/Cook/burger.png';
import { Fade } from 'react-awesome-reveal';

const Cook = () => {
  return (
    <div id='cook-section' className='relative'>
      <div className='mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6'>
        <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
          <Fade direction='right' delay={400} cascade damping={1e-1} triggerOnce={true}>
            <Image src={Burger} alt={Burger} width={463} height={622} />
          </Fade>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          {/* Left Section */}
          <div className='col-span-6 flex justify-start'>
            <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true}>
              <Image src={CookImg} alt={CookImg} width={635} height={808} />
            </Fade>
          </div>

          {/* Right Section */}
          <div className='col-span-6 flex flex-col justify-center'>

            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
              <h2 className='text-pink text-lg font-normal mb-3 ls-51 uppercase'>Cook with us</h2>
            </Fade>

            <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
              <h3 className='text-3xl lg:text-5xl font-semibold text-black text-start'>Cooking together with the expert</h3>
            </Fade>

            <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
              <p className='text-grey md:text-lg font-normal mb-10 text-start mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus saepe architecto vel sit quibusdam ad cum qui similique quaerat obcaecati ipsam sapiente nesciunt enim deserunt corrupti blanditiis assumenda, soluta eum!Voluptates cupiditate vero explicabo cumque doloremque ab, quas dolor, dolore mollitia quia veniam commodi quo harum illum iure atque.
              </p>
              <p className='text-grey md:text-lg font-normal mb-10 text-start mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis at qui possimus ut nesciunt.....</p>

              <div className='flex align-middle justify-center md:justify-start'>
                <button className='text-xl justify-center bg-pink rounded-full text-white py-5 px-6 lg:px-10'>learn more</button>
              </div>

            </Fade>
          </div>
        </div >
      </div>
    </div >
  )
}

export default Cook