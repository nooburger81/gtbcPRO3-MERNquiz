import React from 'react'
import Nugget from '../assets/nuggies.png'

const Login = () => {
  return (
    <div name='login' className='w-full h-screen flex'>
       <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-500 sm:max-w-[900px]'>
        <div className='w-full h-full bg-pink-400 hidden md:block'>
            <img className='w-full h-full' src={Nugget} alt='chicken nugget' />
        </div>
        <div className='p-4 flex flex-col justify-around items-center'>
            <form>
                <h2 className='text-4xl font-bold text-center mb-8'>Meet Your Maker</h2>
                <div>
                    <input className='border p-2 mr-2' type="text" placeholder='Email' />
                    <input className='border p-2' type="password" placeholder='Password' />
                </div>
                <button className='w-full py-2 my-4 bg-green-300 hover:bg-green-200'>Sign In To Play</button>
                <p className='text-center'>Forgot Email or Password?</p>
            </form>
            <p className='text-center'>Register New Player</p>
        </div>
       </div>
    </div>
  )
}

export default Login