
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../contexts/GameContext';  // Assuming currency is in this context

function Gameitem({ id, image, title, price }) {
  const { currency } = useContext(GameContext);  // Assuming currency is in GameContext
  
  return (
    <>

      <div className="">
        <div className="p-2 bg-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:scale-105">
          <img src={image || 'https://readymadeui.com/Imagination.webp'} alt={title} className="w-full h-48  rounded-t-lg" />
          <h2 className="text-white text-xl font-semibold text-center transition-colors duration-300 hover:text-yellow-400">{title}</h2>
          <p className="text-white text-lg font-bold text-center mt-1 transition-colors duration-300 hover:text-yellow-400">{currency}{price}</p>
          <Link to={`/gamelist/${id}`}><button className="mt-2 w-full bg-yellow-500 text-white font-semibold py-1 rounded-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105 hover:shadow-xl">View Details</button></Link>
        </div>
      </div>
      {/* <div className='bg-gray-300 w-50 rounded-xl'>
        
          <div className='overflow-hidden bg-[url(https://readymadeui.com/Imagination.webp)] bg-cover bg-center w-full'>
            <img className='hover:scale-110 transition ease-in-out w-full h-50 ' src={image || 'https://readymadeui.com/Imagination.webp'} alt={title} />
            <p className='text-xl font-medium bg-gray-400 -mt-7 ml-35 absolute w-15'>{currency}{price}</p>
          </div>
          <h1 className='pt-2 pd-1 font-medium text-2xl mx-4 mt-2'>{title}</h1>
          <Link to={`/gamelist/${id}`}><button className="mx-4 mt-2 mb-5 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium cursor-pointer" >View Details</button></Link>
      </div> */}
      </>
  );
}

export default Gameitem;