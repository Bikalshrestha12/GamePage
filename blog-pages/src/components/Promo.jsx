import React from 'react';
import './Promo.css'

const Promo = () => {
  return (
    <div>
        <div className="w-full aspect-video">
                <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/lI8NnSKmkjk?start=3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className='flex -mt-35'>
                <div className='flex mx-5'>
                    <p className='h-20 w-1 bg-purple-400'></p>
                    <p className='h-20 w-2 bg-white'></p>
                </div>
                <div>
                    <h1 className='text-4xl font-bold text-white'>Promo video of the game</h1>
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promo
