import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <div className='font-Poppins'>
    <div className='fixed w-1/4 left-0 top-0 h-screen px-6 py-16 col-span-1 bg-dashboard'>
    <div className='flex items-center gap-3'>
      <img src={require('../images/Group 12.png')} width={60} alt='logo' />
      <h1 className='text-primary text-3xl font-bold'>Lillies</h1>
    </div>
    <div className='flex flex-col justify-center gap-10 mt-10'>
        <Link to='/dashboard' className='bg-dashboard-two text-base px-5 py-3 rounded-xl'><i className="fa-solid fa-house fa-xl mr-3"></i> Dashboard</Link>
        <Link to='/profile' className='flex items-center text-dashboard-text px-6 text-base'><i className="fa-solid fa-circle-user fa-xl mr-3"></i>Your Profile</Link>
        <Link to='/orders' className='flex items-center text-dashboard-text px-6 text-base'><i className="fa-solid fa-calendar fa-xl mr-3"></i>Orders <span className='text-text-black ml-16 py-2 px-3 bg-secondary rounded-xl'>6</span> </Link>
        <Link to='/orders' className='flex items-center text-dashboard-text px-6 text-base'><i className="fa-solid fa-bookmark fa-xl mr-3"></i>Your Carts <span className='text-text-black ml-8 py-2 px-3 bg-text-dash-1 rounded-xl'>6</span></Link>
     </div>
  </div>
    </div>
  )
}

export default SideNav;