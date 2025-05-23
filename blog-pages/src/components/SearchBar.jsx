import React, { useContext, useEffect } from 'react'
import { GameContext } from '../contexts/GameContext'
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(GameContext);
    const location = useLocation();
    const[visible, setVisible] = useState(false)

    // useEffect(() => {
    //     console.log(location.pathname);
    // },[location])

    useEffect(()=>{
        if(location.pathname.includes('game') ){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2'>
       <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' />
       <img src={assets.search_icon} className='w-4' alt="" />
       <img onClick={() => setShowSearch(false)} src={assets.cross_icon} className='inline cursor-pointer w-3' alt="" />
      </div>
    </div>
  ) : null;
}

export default SearchBar
