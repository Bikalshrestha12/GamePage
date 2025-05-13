import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Footers = ({
  textColor,
  textSize = {},
  textFont,
  backgroundColor,
  padding,
  margin,
  hoverEffects = {}, 
  boxShadow,
  linkStyles = {} 
}) => {

  const inputStyles = hoverEffects.input || {};
  const buttonStyles = hoverEffects.button || {};

  return (
    <footer
    className="text-center"
      style={{
        color: textColor,
        fontSize: textSize + 'px',
        fontFamily: textFont,
        backgroundColor: backgroundColor,
        padding,
        margin,
        boxShadow
      }}
    >
      <div  style={{background:(backgroundColor)}}>
        <div className='mb-8 mx-20'>
          <h3 className='text-center font-semibold py-5 mb-4' style={{ fontSize: (textSize * 1.75) + 'px' }}>Subscribe to our newsletter</h3>
          <div className='flex w-full items-center justify-center'>
            {/* <input 
              type="email"
              className={`border border-gray-500 w-2/4 px-4 py-3 transition-all duration-300 ease-in-out hover:scale-105`}
              placeholder='ENTER YOUR E-MAIL'
              style={hoverEffects.input}
            /> */}
            <input 
              type="email"
              className="border border-gray-500 w-2/4 px-4 py-3 transition-all duration-300 ease-in-out hover:scale-105"
              placeholder='ENTER YOUR E-MAIL'
              style={inputStyles}
            />
            <button
              type='submit'
              className='bg-black text-white font-bold px-4 py-3.5 mx-[-2px] hover:bg-purple-800 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105'
              style={buttonStyles}
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
            <img src={assets.logo} className='w-50 py-4 mx-auto items-center' alt="Logo" />
            <div className='flex flex-col md:flex-row'>
              <ul className='font-semibold sm:flex gap-14 text-gray-200 mx-auto py-5'>
                {[
                  { to: '/', label: 'Home' },
                  { to: '/game', label: 'Game' },
                  { to: '/reviews', label: 'Reviews' },
                  { to: '/news', label: 'News' },
                  { to: '/context', label: 'Contact' },
                ].map((link, idx) => (
                  <NavLink
                    key={idx}
                    to={link.to}
                    className='flex flex-col item-center gap-3'
                    style={linkStyles}
                  >
                    <p>{link.label}</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                  </NavLink>
                ))}
              </ul>
            </div>

            <div className='mx-5 items-center'>
              <p className='py-6 text-gray-300 font-medium cursor-pointer' style={{ fontSize: (textSize / 1.75) + 'px' }}>
                Copyright ©2025 All rights reserved | This template is made with by Colorlib
              </p>
            </div>
          </div>

          <div className='md:flex items-center justify-center mx-auto'>
            <img src="https://preview.colorlib.com/theme/endgam/img/footer-right-pic.png.webp" className='w-26 items-center' alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footers
