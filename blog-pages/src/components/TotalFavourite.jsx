import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext';
import Title from './Title';

const TotalFavourite = () => {
    const {currency, tax, getFavouriteCount } = useContext(GameContext);
  return (
    <div>
      <div className='w-full'>
      <div className='text-2xl'>
        < Title text1={'GAME'} text2={'CART TOTALS'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>SubTotal</p>
            {/* <p>{currency}{getFavouriteCount()}.00 </p> */}
            <p>{currency}0.00 </p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Tex</p>
            <p>{currency}{tax} </p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <b>Total</b>
            {/* <b>{currency}{getFavouriteCount() === 0 ? 0 : getFavouriteCount()}.00 </b> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default TotalFavourite
