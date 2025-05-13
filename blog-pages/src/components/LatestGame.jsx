import React, { useContext, useEffect, useState } from 'react'
// import { games } from '../assets/assets';
import Title from './Title';
import Gameitem from './Gameitem';
import { GameContext } from '../contexts/GameContext';
import { Link } from 'react-router-dom';


const LatestGame = () => {
  const {games} = useContext(GameContext);
  const [latestGame, setLatestGame] = useState([]);  
  const [latestNews, setLatestNews] = useState([])
  // console.log(latestGame);
  
  useEffect(() => {
    setLatestGame(games.slice(0,5)); 
  },[])
  
  return (
    <>
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'GAME'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minus voluptate nihil omnis architecto, eos vel culpa, necessitatibus voluptatem aut corrupti ex accusantium amet ea natus exercitationem soluta nemo. Ullam?
        </p>
      </div>
        {/* rendering Game */}
        <div className='m-8'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            
          {
              latestGame.map((item, index) => (
                // console.log(item),
                <Gameitem key={index} title={item.title} id={item.id} price={item.price} image={item.image} />
              ))
            }
          </div>
          <div>
            <button className='transition-colors duration-400 hover:underline hover:text-yellow-400 hover:shadow-2xl text-md'>
              <Link to='game'  className='absolute right-4'>see more</Link>
            </button>
          </div>
      </div>
    </div>

    </>
  )
}

export default LatestGame
