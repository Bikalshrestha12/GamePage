// import React, { useContext, useEffect, useState } from 'react';
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import { assets } from '../../assets/assets';
// import axios from 'axios'
// import { GameContext } from '../../contexts/GameContext';
// import Title from '../../components/Title';
// import Gameitem from '../../components/Gameitem';
// import ButtonAnimated from '../../components/ButtonAnimated';

// const ShowGameItem = () => {

//   const { games, alphabet, showAlphabet, search, showSearch } = useContext(GameContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterGame, setFilterGame] = useState(games); // Initialize with all games
//   const [type, setType] = useState([]); // Store selected type filters (Free/Paid)
//   const [online, setOnline] = useState([]); // Store selected online filters (Online/Offline)
//   const [shortType, setShortType] = useState('relavent'); // Store sorting criteria
//   const [game, setGame] = useState([])

//   // Toggle online filter (Online / Offline)
//   const toggleOnline = (e) => {
//     const value = e.target.checked;  // Use checked property
//     setOnline(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
//   };


//   const toggleType = (e) => {
//     const value = e.target.checked;  // Use checked property
//     setType(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
//   };

 

//   // Apply filters
//   const applyFilter = () => {
//     let gamesCopy = games.slice(); // Create a copy of the games array
//     // console.log("Alphabet:", alphabet, "Search:", search);        
//     // console.log("Show Alphabet:", showAlphabet, "Show Search:", showSearch);

//     if (showAlphabet && alphabet) {
//       gamesCopy = gamesCopy.filter(item => item.name.toLowerCase().includes(alphabet.toLowerCase()));
//     }
    
//     if (showSearch && search) {
//       gamesCopy = gamesCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
//     }

//     if (showSearch && search) {
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
//     }

//     // Filter games based on online status (true/false)
//     if (online.length > 0) {
//       gamesCopy = gamesCopy.filter(item => online.includes(item.online));
//     }

//     // Filter games based on paid status (true/false)
//     if (type.length > 0) {
//       gamesCopy = gamesCopy.filter(item => type.includes(item.paid));
//     }

//     // Update filtered games list
//     setFilterGame(gamesCopy);
//   };

//   const  sortGames = (gamesCopy) => {
//     let fpCopy = filterGame.slice();

//     switch(shortType){
//       case 'low-high':
//       setFilterGame(fpCopy.sort((a,b) => (a.price - b.price)))
//       break;
//       case 'high-low':
//         setFilterGame(fpCopy.sort((a,b) => (b.price - a.price)))
//         break;

//       default:
//         applyFilter();
//         break;
//     }
//   }


//   // useEffect(() => {
//   //   setFilterGame(games); 
//   // }, [games]);

//   useEffect(() => {
//     applyFilter();
//   },[online, type, alphabet, showAlphabet, search, showSearch])

//   useEffect(() => {
//     sortGames();
//   },[shortType])


//   // backend connect 
//   const getgames = async() => {
//     const response = await axios.get('http://localhost:8000/api/')
//     // console.log(response.data);
//     setGame(response.data)
    
//   }

//   useEffect(() => {
//     getgames()
//   },[])

//   return (
//     <div>
//         <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t m-10'>
        
//             <div className='min-w-60'>
//                 <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
//                 <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//                 </p>

//             <div className={`border border-gray-300 pl-5 py-3 mt-6 } sm:block`}>
                
//                 <p className='mb-3 text-sm font-medium'>TYPES</p>
//                 <div className='flex flex-col gap-2 text-sm font-light text-gray-700 mb-5'>
//                     <p className='flex gap-2'>
//                     <input type="checkbox" className='w-3' value={'online'} onChange={toggleOnline} />Online
//                     </p>
//                     <p className='flex gap-2'>
//                     <input type="checkbox" className='w-3' value={'offnline'} onChange={toggleOnline}  />Offline
//                     </p>
//                     {/* <p className='flex gap-2'>
//                     <input type="checkbox" className='w-3' value={'hard'}  />Hard
//                     </p> */}
//                 </div>
//                 </div>

//                 <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'}  sm:block`}>
//                 <p className='mb-3 text-sm font-medium'>SUBTYPES</p>
//                 <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//                     <p className='flex gap-2'>
//                     <input type="checkbox" className='w-3' value={'free'} onChange={toggleType} /> Free
//                     </p>
//                     <p className='flex gap-2'>
//                     <input type="checkbox" className='w-3' value={'paid'} onChange={toggleType} /> Paid
//                     </p>
//                 </div> 
//                 </div>
//             </div>

//             <div className='flex-1'>
//                 <div className="flex justify-between text-base sm:text-2xl mb-4">
//                 <Title text1={"ALL"} text2={'GAME'} />
//                 <select onChange={(e)=> setShortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//                     <option value="relavent">Sort by: Relavent</option>
//                     <option value="low-high">Sort by: low to High</option>
//                     <option value="high-low">Sort by: high to Low</option>
//                 </select>
//                 </div>
//                 <div>
//                 <ButtonAnimated className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
//                 </div>
//                 <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-8'>
//                 {
//                 game.map((item, index) =>( 
//                 <Gameitem key={index} name={item.title} id={item._id} price={item.price} image={item.image} />
//                 ))}
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ShowGameItem


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { MdDelete } from 'react-icons/md';
// import { GrUpdate } from 'react-icons/gr';
// import { Link } from 'react-router-dom';

// const ShowGameItem = () => {

//   const [game, setGame] = useState([])

//   // backend connect 
//   const getgames = async() => {
//     const response = await axios.get('http://localhost:8000/api/')
//     // console.log(response.data);
//     setGame(response.data)
    
//   }

//   useEffect(() => {
//     getgames()
//   },[])


//   return (
//     <div className='p-8'>
//       <table className='table-auto w-full border-collapse border border-gray-300'>
//         <caption className='text-2xl font-semibold mb-4'>Game List</caption>
//         <thead className='border-b-2 border-gray-300 text-center'>
//         <tr className='border-b-2 border-gray-300'>
//           <th className = 'px-3 py-4 text-gray-800 text-center'>Title</th>
//           <th className = 'px-3 py-4 text-gray-800 text-center'>price</th>
//           <th className = 'px-3 py-4 text-gray-800 text-center'>Images</th>
//           <th className = 'px-3 py-4 text-gray-800 text-center'>Action</th>
//         </tr>
//         </thead>
//         {
//           game.map((item, index) =>(
//             <tbody className='border-b-2 border-gray-300'>
            
//                 {/* <Gameitem key={index} name={item.title} id={item._id} price={item.price} image={item.image} /> */}
//               <tr key={index} className='border-b-2 border-gray-300'>  
//               <td className = 'px-3 py-4 text-gray-800'>{item.title}</td>
//               <td className = 'px-3 py-4 text-gray-800'>{item.price}</td>
//               <td className = 'px-3 py-4 text-gray-800'>{item.image} </td>
//               <td className = 'px-3 py-4 text-gray-800 flex gap-2 justify-center'>
              
//               <Link to={`/${item.id}/updategame`} className='bg-green-500 text-white p-2 rounded-full cursor-pointer'>Update</Link>
//               <Link to={`/${item.id}/`} className='bg-yellow-500 text-white p-2 rounded-full cursor-pointer'>View</Link>
//               <button className='bg-purple-500 text-white p-2 rounded-full cursor-pointer'>Delete</button>
              
//               </td>
//             </tr>
//             </tbody>
//         ))}
//       </table>
//     </div>
//   )
// }

// export default ShowGameItem



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const ShowGameItem = () => {
  const [game, setGame] = useState([]);

  // backend connect 
  const getgames = async () => {
    const response = await axios.get('http://localhost:8000/api/game/');
    setGame(response.data);
  };

  useEffect(() => {
    getgames();
  }, []);

  const deleteGame = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/game/${id}/`);
      setGame(game.filter(item => item._id !== id)); // Remove deleted game from state
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  }

  return (
    <div className='p-8'>
      <table className='table-auto w-full border-collapse border border-gray-300'>
        <caption className='text-2xl font-semibold mb-4'>Game List</caption>
        <thead className='border-b-2 border-gray-300 text-center'>
          <tr>
            <th className='px-3 py-4 text-gray-800 text-center'>Title</th>
            <th className='px-3 py-4 text-gray-800 text-center'>Price</th>
            <th className='px-3 py-4 text-gray-800 text-center'>Images</th>
            <th className='px-3 py-4 text-gray-800 text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {game.map((item, index) => (
            <tr key={index} className='border-b-2 border-gray-300'>
              <td className='px-3 py-4 text-gray-800'>{item.title}</td>
              <td className='px-3 py-4 text-gray-800'>{item.price}</td>
              <td className='px-3 py-4 text-gray-800'>{item.image}</td>
              <td className='px-3 py-4 text-gray-800 flex gap-2 justify-center'>
                <Link to={`/dashboard/${item.id}/updategame`} className='bg-green-500 text-white p-2 rounded-full cursor-pointer'>
                  Update
                </Link>
                <Link to={`/dashboard/${item.id}/`} className='bg-yellow-500 text-white p-2 rounded-full cursor-pointer'>
                  View
                </Link>
                <Link onClick={() => deleteGame(item.id)} className='bg-purple-500 text-white p-2 rounded-full cursor-pointer'>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowGameItem;