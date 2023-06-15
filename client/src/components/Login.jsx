import React from 'react'
import Nugget from '../assets/nuggies.png'

const Login = () => {
  return (
    <div name='login' className=''>
       <div>
        <div>
            <img src={Nugget} alt='chicken nugget' />
        </div>
        <div>
            <form>
                <h2>Meet Your Maker</h2>
                <div>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Sign In To Play</button>
                <p>Forgot Username or Password?</p>
            </form>
            <p>Register New Player</p>
        </div>
       </div>
    </div>
  )
}

export default Login