import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='font-Poppins'>
    <div className='h-screen overflow-hidden grid md:grid-cols-2'>  
    <div className='col-span-1 bg-login-bg hidden md:block'>
      <img className='opacity-40' src={require('../images/bon-vivant-qom5MPOER-I-unsplash 5.png')} alt='login-' />
    </div>
    <div className='col-span-1'>
    <div className='flex flex-col gap-8  p-10 md:p-20 justify-center'>
        <h2 className='text-primary text-2xl mb-6 text-center font-semibold'>Welcome Lillies!</h2>
        <input type='text' className='p-4 outline-none border-2 border-secondary rounded' placeholder='Your First Name' />
        <input type='email' className='p-4 outline-none border-2 border-secondary rounded' placeholder='Your Email address' />
        <input type='password' className='p-4 outline-none border-2 border-secondary rounded' placeholder='Your Password' />
        <button type='submit' className='p-4 bg-primary border-none text-secondary font-semibold rounded uppercase'>Sign up</button>
        <div className='text-center'>
            <p className='text-primary font-normal text-sm'>Already have an account. <Link to='/login' className='font-bold'>LOGIN</Link></p>
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register;