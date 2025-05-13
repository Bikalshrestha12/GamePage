import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../contexts/GameContext';
import Title from './Title';
import Gameitem from './Gameitem';
import { Link } from 'react-router-dom';

const BestOnlineGame = () => {
    const {games} = useContext(GameContext)
    const [bestOnlineGame, setBestOnlineGame] = useState([]);

    useEffect(()=>{
        const bestOnlineGame = games.filter((item) => (item.online === true));
        setBestOnlineGame(bestOnlineGame.slice(0,5))
    },[])

  return (
    <div className='my-10 mx-8'>
      <div className="text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'Online Game'} />
        <p className='w-3/4 m-auto text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi eos, ex autem distinctio beatae delectus quisquam tempore maxime ratione?
        </p>
      </div>

        <div className='m-8'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            
              {bestOnlineGame.map((item, index) => (
                  <Gameitem key={index} title={item.title} id={item.id} price={item.price} image={item.image} />
              ))}
          </div>
          <div>
            <button className='transition-colors duration-400 hover:underline hover:text-yellow-400 hover:shadow-2xl text-md'>
              <Link to='game'  className='absolute right-4'>see more</Link>
            </button>
          </div>
        </div>
    </div>
  )
}

export default BestOnlineGame
