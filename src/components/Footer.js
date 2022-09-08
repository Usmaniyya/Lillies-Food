import React from 'react'

function Footer() {
  return (
    <div className='bg-footer font-Poppins'>
        <footer>
        <div className='container'>
          <div className='w-full md:flex md:justify-around py-12 px-8'>
            <div className='flex flex-col gap-3'>
              <h4 className='md:mb-3 text-heading-footer text-lg font-medium'>Company</h4>
              <p className='text-text-footer text-sm'>About Us</p>
              <p className='text-text-footer text-sm'>Careers</p>
              <p className='text-text-footer text-sm mb-5'>Contact Us</p>
            </div>
            <div className='flex flex-col gap-3'>
              <h4 className='md:mb-3 text-heading-footer text-lg font-medium'>Support</h4>
              <p className='text-text-footer text-sm'>Help Center</p>
              <p className='text-text-footer text-sm mb-5'>Safety Center</p>
            </div>
            <div className='flex flex-col gap-3'>
              <h4 className='md:mb-3 text-heading-footer text-lg font-medium'>Legal</h4>
              <p className='text-text-footer text-sm'>Cookies Policy</p>
              <p className='text-text-footer text-sm'>Privacy Policy</p>
              <p className='text-text-footer text-sm'>Terms of Service</p>
              <p className='text-text-footer text-sm mb-5'>Dispute Resolution</p>
            </div>
            <div className='flex flex-col gap-3'>
              <h4 className='mb-3 text-heading-footer text-lg font-medium'>Install App</h4>
              <img src={require('../images/artwork.png')} width={160} alt='' />
              <img src={require('../images/App Store Badge.png')} width={160} alt='/' />
            </div>
          </div>
          </div>
          <div className='border border-text-white border-opacity-10'>
          <div className='container'>
          <div className='flex justify-around items-center py-4'>
            <p className='text-footer-text'>© 2021 LILIES, All rights reserved</p>
            <div className='flex gap-8'>
              <a className='rounded-full' href='gooogle.com'>
                  <i className="text-text-white fa-brands fa-instagram fa-2x"></i>
              </a>
              <a className='rounded-full' href='gooogle.com'>
                  <i className="text-text-white fa-brands fa-twitter fa-2x"></i>
              </a>
              <a className='rounded-full' href='gooogle.com'>
                  <i className="text-text-white fa-brands fa-youtube fa-2x"></i>
              </a>
            </div>
            </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer