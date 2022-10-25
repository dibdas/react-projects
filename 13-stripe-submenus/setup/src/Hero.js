import React from 'react'
import phoneImg from './images/phone.svg'

import { useGlobalContext } from './context'

const Hero = () => {
  // const data = useGlobalContext()
  // console.log(data)
  const{closeSubmenu} =useGlobalContext()
  return (
    <section>
      <h5>hero component</h5>
      <div className='hero-center'>
        <article>

        </article>
        <article className='hero-images'>
          <img src={phoneImg} className="phone-img" alt="phone"/>

        </article>
      </div>
    </section>
  )
}

export default Hero
