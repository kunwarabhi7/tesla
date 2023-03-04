import Image from 'next/image'
import React from 'react'
import { hero } from './constant'
const Hero = () => {
  return (
    <div>
      {hero.map(({id,img,title,desc,button})=>{
        return <div key={id}>
            <div>
                <Image src={img} />
            </div>
            <div></div>
        </div>
      })}
    </div>
  )
}

export default Hero
