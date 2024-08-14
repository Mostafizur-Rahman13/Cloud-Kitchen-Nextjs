'use client'
import React, { Component } from 'react';
import Slider from 'react-slick'
import Image from 'next/image';
import Linkdin from '@/public/Images/Expert/Linkedin.svg'

// CAROUSEL DATA
interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    profession: 'Senior Chef',
    name: 'Kevin Steve',
    imgSrc: '/images/Expert/boyone.svg'
  },
  {
    profession: 'Junior Chef',
    name: 'Jamela',
    imgSrc: '/images/Expert/girl.png'
  },
  {
    profession: 'Junior Chef',
    name: 'Barbara',
    imgSrc: '/images/Expert/boytwo.svg'
  },
  {
    profession: 'Junior Chef',
    name: 'Egbat',
    imgSrc: '/images/Expert/girl.png'
  },
  {
    profession: 'Junior Chef',
    name: 'Jesse',
    imgSrc: '/images/Expert/girl.png'
  },
  {
    profession: 'Junior Chef',
    name: 'Lizanka',
    imgSrc: '/images/Expert/girl.png'
  },
]

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 2000,
      cssEase: 'liner',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToshow: 3,
            SlidesToScroll: 1,
            Infinity: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToshow: 2,
            SlidesToScroll: 1,
            Infinity: true,
            dots: true
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToshow: 1,
            SlidesToScroll: 1,
            Infinity: true,
            dots: true
          }
        },
      ]
    };

    return (
      <div className='py-10 sm:py-20 bg-darkpink '>
        <div className='mx-auto max-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51'>Expert Chefs</h2>
            <h3 className='text-3xl lg:text-5xl font-semibold text-black'>Let&apos;s meet the expert</h3>
          </div>

          <Slider {...settings}>
            {
              postData.map((items, i) => (
                <div key={i}>
                  <div>
                    <div>
                      <Image src={items.imgSrc} alt='Expert' width={362} height={262} className='inline-block relative m-auto' />

                      <div className='absolute top-[40%]'>
                        <Image src={Linkdin} alt={Linkdin} width={220} height={120} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    )
  }
}

