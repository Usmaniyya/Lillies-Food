import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import { MenuIcon, XIcon} from '@heroicons/react/outline'

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='bg-primary font-Poppins'>
    <div className='container'>
        <nav className='flex justify-between items-center py-6'>
            <div className='flex gap-3 items-center'>
                <img src={require('../images/Group 12.png')} width={60} alt='' />
                <h1 className='text-text-white text-4xl font-bold'>Lillies</h1>
            </div>
            <div className='hidden md:flex gap-8 text-xl items-center'>
                <Link className='text-secondary' to='/'>Home</Link>
                <Link className='text-text-white' to='/login'>Login</Link>
                <Link className='py-2 px-7 bg-secondary text-primary rounded-md' to='/register'>Sign Up</Link>
            </div>
            <div className='md:hidden' onClick={handleClick}>
           {
            !nav ?  <MenuIcon className='w-8 text-text-white' />:  <XIcon className='w-8 text-text-white' /> 
           }
            </div>
        </nav>
        <ul className={!nav ? 'hidden' : 'w-full flex flex-col items-center gap-4 justify-center text-1xl px-8 ease-in-out'}>
          <Link className='text-secondary border-b-2' to='/'>Home</Link>
          <Link className='text-text-white border-b-2' to='/login'>Login</Link>
          <Link className='py-2 px-7 w-50 bg-secondary text-primary rounded-md ' to='/register'>Sign Up</Link>
        </ul>
        </div>
    </div>
  )
}

export default Navbar;