import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface cardDataType {
  imgSrc: string;
  heading: string;
  subheading: string;
  link: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: 'images/Features/featureOne.svg',
    heading: 'Menu variations',
    subheading: 'Craisin relish . sweet potata butter',
    link: 'Learn more'
  },
  {
    imgSrc: 'images/Features/featureTwo.svg',
    heading: 'Cooking raw',
    subheading: 'Harissa dil vinaigrette . moody blue labneh',
    link: 'Learn more'
  },
  {
    imgSrc: 'images/Features/featureThree.svg',
    heading: 'Best Spicy',
    subheading: 'Avocado . kumquats . quinoa crunch',
    link: 'Learn more'
  },
  {
    imgSrc: 'images/Features/featureFour.svg',
    heading: 'Fast Food',
    subheading: 'Pickled veggies . limey-herby dressing',
    link: 'Learn more'
  },
]

const Work = () => {
  return (
    <div id='about-section' className='mx-auto max-w-7xl py-40 px-6'>
      <div className='text-center mb-14'>
        <h3 className='text-pink text-lg font-normal mb-3 ls-51 uppercase'>Features</h3>
        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>
          Get a many of interesting <br /> features.
        </p>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
        {
          cardData.map((items, i) => (
            <div key={i}
              className='card-b p-8 relative rounded-3xl'>
              <div className='work-img rounded-full flex justify-center absolute top-[-50%] sm:top-[40%] md:top-[-55%] lg:top-[-45%] left-[0%]'>
                <Image src={items.imgSrc} alt={items.imgSrc} width={510} height={10} />
              </div>
              <h3 className='text-2xl text-black font-semibold text-center mt-16 '>{items.heading}</h3>
              <p className='text-lg font-normal text-black text-center text-opacity-50'>{items.subheading}</p>

              <div className='flex items-center justify-center'>
                <Link href='/'>
                  <p className='flex items-center text-center text-lg font-medium text-pink mt-2 hover:underline'>
                    {items.link}<ChevronRightIcon width={20} height={20} />
                  </p>
                </Link>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Work