import Image from 'next/image'
import React from 'react'
import { hero } from './constant'
import { downArrow } from '@/public/assets'
import Button from './Button'

const Hero = () => {
  return (
    <section>
    {hero.map(({ id, img, title, desc, button }) => (
      <div
        key={id}
        className="relative flex flex-col justify-center itmes-center"
      >
        <Image src={img} className="object-cover w-full h-screen" />
        <div className="absolute flex flex-col items-center justify-between w-full h-screen top-6">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-medium">{title}</h1>
            <p className="text-xl">{desc}</p>
          </div>
          <div className="flex flex-col items-center w-full gap-y-6 sm:flex">
            <Button button={button} id={id}/>
            <Image
              alt="downArrow"
              src={downArrow}
              className="h-8 mb-12 cursor-pointer animate-bounce"
            />
          </div>
        </div>
      </div>
    ))}
  </section>
  )
}

export default Hero
