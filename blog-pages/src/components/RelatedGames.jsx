import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../contexts/GameContext';
import Title from './Title';
import Gameitem from './Gameitem';

const RelatedGames = ({online, type}) => {

    const { games } = useContext(GameContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (games.length > 0) {
            
            let gamesCopy = games.slice();
            if (online) {
                gamesCopy = gamesCopy.filter((item) => online === item.online)
            }
            if (type) {
                gamesCopy = gamesCopy.filter((item) => type === item.type)
            }
            
            setRelated(gamesCopy.slice(0, 5));
            
        }
    },[games])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={"GAME"} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
        {related.map((item, index) => (
            <Gameitem key={index} id={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default RelatedGames
