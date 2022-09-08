import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='font-Poppins'>
      <div className='h-screen overflow-hidden grid md:grid-cols-2'>  
          <div className='col-span-1 bg-login-bg hidden md:block'>
            <img className='opacity-40' src={require('../images/bon-vivant-qom5MPOER-I-unsplash 5 (1).png')} width="100%" alt='login-' />
          </div>
          <div className='col-span-1'>
            <div className='flex flex-col gap-8 p-20 justify-center'>
              <h2 className='text-primary text-2xl mb-6 text-center font-semibold'>Welcome Back!</h2>
              <input type='email' className='p-4 outline-none border-2 border-secondary rounded' placeholder='Your Email address' />
              <input type='password' className='p-4 outline-none border-2 border-secondary rounded' placeholder='Your Password' />
              <button type='submit' className='p-4 bg-primary border-none text-secondary font-semibold rounded uppercase'>Login</button>
              <div className='flex justify-between mt-2'>
                <Link to='/register' className='text-primary font-normal text-sm'>Create an account</Link>
                <Link to='/ff' className='text-primary font-normal text-sm'>Forgot Passoword</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login