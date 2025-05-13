import React from 'react'
import {  NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-linear-65 from-purple-800 to-pink-800 text-gray-200'>
      <div className='mb-8 mx-20'>
        <h3 className=' text-center text-3xl font-semibold py-5 mb-4'>Subscribe to our newsletter</h3>
        <div className='flex w-full items-center justify-center'>
          <input 
            type="email" 
            className='border border-gray-500 w-2/4 px-4 py-3 hover:border-b-fuchsia-800 transition-all duration-300 ease-in-out hover:scale-105' 
            placeholder='ENTER YOUR E-MAIL' 
          />
          <button 
            type='submit' 
            className='bg-black text-white font-bold px-4 py-3.5 mx-[-2px] hover:bg-purple-800 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105'
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row justify-between px-20'>
        <div>
          <img src="https://preview.colorlib.com/theme/endgam/img/footer-left-pic.png.webp" className='w-50 mx-auto' alt="" />
        </div>
        <div className='py-2 my-auto'>
          <img src={assets.logo} className='w-50 py-4 mx-auto items-center' alt="" />
          <div className='flex flex-col md:flex-row'>
          <ul className='font-semibold sm:flex gap-14 text-sm text-gray-200 mx-auto py-5' >
              <NavLink to='/' className='flex flex-col item-center gap-3'>
                  <p>Home</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
              </NavLink>

              <NavLink to='/game' className='flex flex-col item-center gap-3'>
                  <p>Game</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
              </NavLink>

              <NavLink to='/reviews' className='flex flex-col item-center gap-3'>
                  <p>Reviews</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
              </NavLink>

              <NavLink to='/news' className='flex flex-col item-center gap-3'>
                  <p>News</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
              </NavLink>

              <NavLink to='/contact' className='flex flex-col item-center gap-3'>
                  <p>Contact</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
              </NavLink>
          </ul>
          </div>
          <div className='mx-5 items-center'>
            <p className='py-6 text-gray-300 font-medium cursor-pointer'>Copyright ©2025 All rights reserved | This template is made with  by Colorlib </p>
          </div>
        </div>
        <div className=' md:flex items-center justify-center mx-auto'>
          
          <img src="https://preview.colorlib.com/theme/endgam/img/footer-right-pic.png.webp" className='w-26 items-center' alt="" />
        </div>
      
      </div>
    </div>
  )
}

export default Footer
