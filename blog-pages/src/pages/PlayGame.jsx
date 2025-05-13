import React, { useContext, useState } from 'react'
import { GameContext } from '../contexts/GameContext';
import Title from '../components/Title';
import { FaApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';

const PlayGame = () => {
    const [method, setMethod] =useState('cod')
    const {navigate} = useContext(GameContext);

  return (
    <>
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t m-8'>
      {/* Left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'PLAY GAME'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Frist Name' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' />
        </div>
        <input type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email Address' />
        <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' />
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zipcode' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' />
        </div>
        <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' />
      </div>
      {/* Right site */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          {/* <CartTotal /> */}
        </div>
        <div className='mt-12'>
          <Title text1={'PYAMENT'} text2={'METHOD'} />
          <div class=" p-6 rounded-md">
                      <h2 class="text-2xl font-semibold text-slate-900">$250.00</h2>
                      <ul class="text-slate-500 font-medium mt-8 space-y-4">
                          <li class="flex flex-wrap gap-4 text-sm">Split Sneakers <span class="ml-auto font-semibold text-slate-900">$150.00</span></li>
                          <li class="flex flex-wrap gap-4 text-sm">Echo Elegance <span class="ml-auto font-semibold text-slate-900">$90.00</span></li>
                          <li class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-semibold text-slate-900">$10.00</span></li>
                          <li class="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900 border-t-2 pt-4">Total <span class="ml-auto">$250.00</span></li>
                      </ul>
                  </div>
          {/* Payment method selection */}
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onChange={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <button className='h-9 mx-4'><FaCcPaypal size={40} /></button>
              {/* <img src={assets.stripe_logo} className='h-5 mx-4' alt="" /> */}
            </div>
            <div onChange={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <button className='h-9 mx-4'><FaGooglePay size={40} /></button>
              {/* <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" /> */}
            </div>
            <div onChange={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <button className='h-9 mx-4'> <FaApplePay size={40} /></button>
              {/* <p className='text-gray-500 font-medium text-sm mx-4'>CASH ON DELIVERY</p> */}
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={() => navigate('/game-place')} className='bg-black text-white px-16 py-3 text-sm'>PLAY GAME</button>
          </div>
        </div>
      </div>
      
    </div>

    {/* <div class="bg-white p-4">
          <div class="md:max-w-5xl max-w-xl mx-auto">
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div class="lg:col-span-2 max-md:order-1">
                      <h2 class="text-3xl font-semibold text-slate-900">Make a payment</h2>
                      <p class="text-slate-500 text-sm mt-4">Complete your transaction swiftly and securely with our easy-to-use payment process.</p>
                      <div class="mt-8 max-w-lg">
                          <h3 class="text-lg font-semibold text-slate-900">Choose your payment method</h3>
                          <div class="flex flex-wrap gap-4 justify-between mt-6">
                              <div class="flex items-center">
                                  <input type="radio" class="w-5 h-5 cursor-pointer" id="card" checked />
                                  <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                                      <img src="https://readymadeui.com/images/visa.webp" class="w-12" alt="card1" />
                                      <img src="https://readymadeui.com/images/american-express.webp" class="w-12" alt="card2" />
                                      <img src="https://readymadeui.com/images/master.webp" class="w-12" alt="card3" />
                                  </label>
                              </div>
                              <div class="flex items-center">
                                  <input type="radio" class="w-5 h-5 cursor-pointer" id="paypal" />
                                  <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                                      <img src="https://readymadeui.com/images/paypal.webp" class="w-20" alt="paypalCard" />
                                  </label>
                              </div>
                          </div>

                          <form class="mt-12">
                              <div class="grid gap-4">
                                  <div>
                                      <input type="text" placeholder="Cardholder's Name"
                                          class="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                                  </div>
                                  <div class="flex bg-gray-100 border rounded-md focus-within:border-purple-500 focus-within:bg-transparent overflow-hidden">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 ml-3" viewBox="0 0 32 20">
                                          <circle cx="10" cy="10" r="10" fill="#f93232" data-original="#f93232" />
                                          <path fill="#fed049"
                                              d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                                              class="hovered-path" data-original="#fed049" />
                                      </svg>
                                      <input type="number" placeholder="Card Number"
                                          class="px-4 py-3.5 text-slate-900 w-full text-sm outline-none bg-transparent" />
                                  </div>
                                  <div class="grid grid-cols-2 gap-4">
                                      <div>
                                          <input type="number" placeholder="EXP."
                                              class="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                                      </div>
                                      <div>
                                          <input type="number" placeholder="CVV"
                                              class="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                                      </div>
                                  </div>
                              </div>
                              <button type="button" class="mt-8 w-40 py-3 text-[15px] font-medium bg-purple-500 text-white rounded-md hover:bg-purple-600 tracking-wide">Pay</button>
                          </form>
                      </div>
                  </div>

                  <div class="bg-gray-100 p-6 rounded-md">
                      <h2 class="text-2xl font-semibold text-slate-900">$250.00</h2>
                      <ul class="text-slate-500 font-medium mt-8 space-y-4">
                          <li class="flex flex-wrap gap-4 text-sm">Split Sneakers <span class="ml-auto font-semibold text-slate-900">$150.00</span></li>
                          <li class="flex flex-wrap gap-4 text-sm">Echo Elegance <span class="ml-auto font-semibold text-slate-900">$90.00</span></li>
                          <li class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-semibold text-slate-900">$10.00</span></li>
                          <li class="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900 border-t-2 pt-4">Total <span class="ml-auto">$250.00</span></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div> */}

    </>
  )
}

export default PlayGame
