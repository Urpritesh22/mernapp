import React from 'react'
import { Spotlight } from './UI/Spotlight'
import { TextGenerateEffect } from './UI/TextGenerateEffect'
import MagicButton from './UI/MagicButton'
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'  fill='white'/>
      <Spotlight className='top-10 -left-full h-[80vh] w-[50vw] '  fill='purple'/>
      <Spotlight className='top-28 -left-88 [80vh] w-[50vw]'  fill='blue'/>   


      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
     
    </div>

    <div className='flex justify-center my-20 relative z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
        <h2 className='uppercase text-xs text-center tracking-widest text-blue-200 max-w-80'>
          Dynamic Web Magic With Next Js
        </h2>
       {/* <h1 className='text-6xl decoration-4 '>Transforming Concepts into </h1> 
       <div className='flex flex-row'> <h1 className='text-6xl decoration-4'>Seamless User Experience </h1></div> */}
       <TextGenerateEffect
       className='text-center text-[40px] md:text-5xl lg:text-6xl ' 
       words='Transforming Concepts into Seamless User Experience'/>
       <p className='text-center my-4 md:text-lg lg:text-xl '> Hello , I&apos;m Prathamesh Shirole a Front End Developer</p>
       <a href="#about"> 
      <MagicButton 
      title = 'See My Work'
      position='right'
      icon = {<FaLocationArrow />} 
      />
      </a>
      </div>
    </div>


    </div>
    
  )
}

export default Hero
