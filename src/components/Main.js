import React from 'react'

function Main() {
  return (
    <div className='bg-primary font-Poppins'>
        <main className='container'>
            <div className='w-full py-12 md:flex xl:flex justify-between'>
                <div className=' py-12 flex flex-col justify-center gap-4'>
                    <h1 className='text-text-white text-6xl font-medium'>Order <span className='text-secondary'>food</span> anytime,<br /> anywhere</h1>
                    <p className='text-text-white text-lg font-normal'>Browse from our list of specials to place your order and have food <br/>delivered to you in no time. Affordable, tasty and fast!</p>
                    <div className='flex md:flex gap-5 mt-3'>
                        <img src={require('../images/artwork.png')} alt='' />
                        <img src={require('../images/App Store Badge.png')} alt='/' />
                    </div>
                </div>
                <div className='mt-4'>
                    <img src={require('../images/bon-vivant-qom5MPOER-I-unsplash 1.png')} width={400} height={400} alt='' />
                </div>
            </div>
            <div className='space-y-12'>
                <div className='py-8 text-center'>
                    <h2 className='text-text-white font-bold text-4xl mb-3'>Special Meals of the day!</h2>
                    <p className='text-text-white font-normal'>Check our sepecials of the day and get discounts on all our meals <br/> and swift delivery to what ever location within Ilorin.</p>
                </div>
            </div>
            <div className='w-full md:flex md:justify-between gap-4 mt-10'>
                <div className='w-full md:w-1/3 flex flex-col items-center gap-1'>
                    <img src={require('../images/bon-vivant-qom5MPOER-I-unsplash 2.png')} width={250} height={250} alt='' />
                    <h3 className='text-secondary text-2xl font-bold'>Stir fry Pasta</h3>
                    <p className='text-text-white text-lg text-center w-72 font-normal mb-8'>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
                <div className='w-full md:w-1/3 flex flex-col items-center gap-1'>
                    <img src={require('../images/bon-vivant-qom5MPOER-I-unsplash 3.png')} width={250} height={250} alt='' />
                    <h3 className='text-secondary text-2xl font-bold'>Meat Balls</h3>
                    <p className='text-text-white text-lg text-center w-72 font-normal mb-8'>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
                <div className='w-full md:w-1/3 flex flex-col items-center gap-1'>
                    <img src={require('../images/bon-vivant-qom5MPOER-I-unsplash 4.png')} width={250} height={250} alt='' />
                    <h3 className='text-secondary text-2xl font-bold'>Burger Meal</h3>
                    <p className='text-text-white text-lg text-center w-72 font-normal mb-8'>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
            </div>
            <div className='md:flex md:justify-between mt-12 pb-12 space-y-12 '>
                <div>
                    <h3 className='text-secondary font-bold text-4xl mb-5'>Get notified when we update!</h3>
                    <p className='text-text-white'>Get notified when we add new items to our specials menu, <br/>update our price list of have promos!</p>
                </div>
                <div className='mr-2'>
                    <input type='text' className='w-60 px-2 py-2 mr-1 text-input-color rounded outline-none border-none' placeholder='gregphillips@gmail.com' />
                    <button className='px-2 py-2 text-primary bg-secondary text-center font-medium rounded'>Get notified</button>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Main;