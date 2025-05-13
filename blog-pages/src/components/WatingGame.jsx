import React from 'react'
import { RiArrowRightDoubleFill } from 'react-icons/ri'

const WatingGame = () => {
  return (
    <div className=''>
      <div className='flex flex-col md:flex-row'>
        <div className='w-4/3 max-md:hidden'>
            <img src="https://th.bing.com/th/id/OIF.trLsXNxnbkffbzMt0dzuKQ?w=307&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""  className='h-110 w-full'/>
        </div>
        <div className='ml-19 mr-9  mt-9'>
            <p className='mb-5'>11.11.18 / <span>in</span> <a href="#" className='text-pink-400 font-semibold'>Games</a></p>
            <h2 className='text-4xl font-bold mb-5'>The game you’ve been waiting for is out now</h2>
            <p className='font-thin mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum posuere porttitor justo id pellentesque. Proin id lacus feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque vestibulum metus...</p>
            <button className="mt-8 mb-2 flex px-4 py-2 rounded tracking-wider bg-orange-700 hover:bg-orange-600 text-white text-[13px] font-medium"> Read More <RiArrowRightDoubleFill size={20} /> </button>
        </div>
      </div>
    </div>
  )
}

export default WatingGame
