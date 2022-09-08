import React, { useState } from 'react';
import SideNav from '../components/SideNav';

function Dashboard() {
  const [cart, addedCart] = useState('Add to Cart');

  return (
    <div className='h-screen font-Poppins grid grid-cols-4'>
      <SideNav />
          <div className='h-screen col-span-3 px-10 py-20'>
                <div className='flex justify-between'>
                  <div>
                    <h2 className='text-2xl text-primary font-semibold mb-2'>Good morning, Oghenevwede!</h2>
                    <p className=' text-text-paragraph'>What delicious meal are you craving today?</p>
                  </div>
                  <div className=''>
                      <img src={require('../images/40w 1.png')} alt='user' />
                  </div>
              </div>
              <div className='flex flex-wrap gap-20 mt-8'>
                  <div className='w-60 flex flex-col gap-3 items-center p-6 rounded border border-0 border-border-color'>
                    <img src={require('../images/bon-vivant-qom5MPOER-I-unsplash 4.png')} width={90} alt='food' />
                    <h3 className='text-primary font-semibold'>Stir Fry Pasta</h3>
                    <p className='text-center text-xs font-normal tracking-wide mb-4'>The in-house pasta and chicken by chef Moose</p>
                    <div className='flex gap-8'>
                      <p className='text-primary font-bold text-xs'>N 1,000.00</p>
                      <a className='text-text-dash-1 font-medium text-xs' href='/carts' onClick={() => addedCart('Added')}> { cart } </a>
                    </div>
                  </div>
                  <div className='w-60 flex flex-col gap-3 items-center p-6 rounded border border-0 border-border-color'>
                    <img src={require('../images/bon-vivant-qom5MPOER-I-unsplash 2.png')} width={90} alt='food' />
                    <h3 className='text-primary font-semibold'>Stir Fry Pasta</h3>
                    <p className='text-center text-xs font-normal tracking-wide mb-4'>The in-house pasta and chicken by chef Moose</p>
                    <div className='flex gap-8'>
                      <p className='text-primary font-bold text-xs'>N 1,000.00</p>
                      <a className='text-text-dash-1 font-medium text-xs' href='/carts' onClick={() => addedCart(cart => 'Added')}>{ cart }</a>
                    </div>
                  </div>
                  <div className='w-60 flex flex-col gap-3 items-center p-6 rounded border border-0 border-border-color'>
                    <img src={require('../images/bon-vivant-qom5MPOER-I-unsplash 3.png')} width={90} alt='food' />
                    <h3 className='text-primary font-semibold'>Stir Fry Pasta</h3>
                    <p className='text-center text-xs font-normal tracking-wide mb-4'>The in-house pasta and chicken by chef Moose</p>
                    <div className='flex gap-8'>
                      <p className='text-primary font-bold text-xs'>N 1,000.00</p>
                      <a className='text-text-dash-1 font-medium text-xs' href='/carts' onClick={() => addedCart(cart => 'Added')}>{ cart }</a>
                    </div>
                    
                  </div>
                  <div className='w-60 flex flex-col gap-3 items-center p-6 rounded border border-0 border-border-color mb-5'>
                    <img src={require('../images/bon-vivant-qom5MPOER-I-unsplash 1.png')} width={90} alt='food' />
                    <h3 className='text-primary font-semibold'>Stir Fry Pasta</h3>
                    <p className='text-center text-xs font-normal tracking-wide mb-4'>The in-house pasta and chicken by chef Moose</p>
                    <div className='flex gap-8'>
                      <p className='text-primary font-bold text-xs'>N 1,000.00</p>
                      <a className='text-text-dash-1 font-medium text-xs' href='/carts' onClick={() => addedCart(cart => 'Added')}>{ cart }</a>
                    </div>
                  
                  </div>
                  <div className='w-60 flex flex-col gap-3 items-center p-6 rounded border border-0 border-border-color mb-5'>
                    <img src={require('../images/bon-vivant-qom5MPOER-I-unsplash 9.png')} width={90} alt='food' />
                    <h3 className='text-primary font-semibold'>Stir Fry Pasta</h3>
                    <p className='text-center text-xs font-normal tracking-wide mb-4'>The in-house pasta and chicken by chef Moose</p>
                    <div className='flex gap-8'>
                      <p className='text-primary font-bold text-xs'>N 1,000.00</p>
                      <a className='text-text-dash-1 font-medium text-xs' href='/carts' onClick={() => addedCart(cart => 'Added')}>{ cart }</a>
                    </div>
                  </div>
                  <div className='w-60 flex flex-col gap-3 items-center p-6 rounded border border-0 border-border-color mb-5'>
                    <img src={require('../images/bon-vivant-qom5MPOER-I-unsplash 10.png')} width={90} alt='food' />
                    <h3 className='text-primary font-semibold'>Stir Fry Pasta</h3>
                    <p className='text-center text-xs font-normal tracking-wide mb-4'>The in-house pasta and chicken by chef Moose</p>
                    <div className='flex gap-8'>
                      <p className='text-primary font-bold text-xs'>N 1,000.00</p>
                      <a className='text-text-dash-1 font-medium text-xs' href='/carts' onClick={() => addedCart(cart => 'Added')}>{ cart }</a>
                    </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Dashboard;