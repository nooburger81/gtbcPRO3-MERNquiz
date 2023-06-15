import React from 'react'
import 'animate.css'
import Nugget from '../assets/nuggies.png'
import { Link } from 'react-scroll'

const Home =  () => {
  return (
    <div name='home' className='w-full h-screen bg-pink-400 flex'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#90d36e] flex justify-center animate__animated animate__fadeInDown animate__delay-1s'>
        Whatchoo Know 'Bout Me?
    </h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#4195ae] flex justify-center animate__animated animate__bounceInUp animate__delay-2s '>
          A Friendly Quiz Game
        </h2>
        <button className='w-20 cursor-pointer' type='submit'><img src={Nugget} alt='chicken nugget' />
        </button>
        </div>
        <div>
        
        </div>
    </div>
  );
}

export default Home