// import React, { useContext, useEffect, useState } from 'react'
// import { GameContext } from '../contexts/GameContext'
// import Title from '../components/Title';

// const Favourite = () => {
//   const {games, navigate, currency, favouriteItem} = useContext(GameContext);
//   const [favouriteData, setFavouriteData] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for (const items in favouriteData){
//       for (const item in favouriteData [items]){
//         if (favouriteData[items][item] > 0){
//           tempData.push({
//             _id:items,
//             size:item,
//             // quantity:favouriteData[items][item]
//           })
//         }
//       }
//     }
//     // console.log(tempData);
//     setFavouriteData(tempData)
//   },[favouriteItem]);
  

//   return (
//     <div className='border-t pt-14 m-8'>
//       <div className="text-2xl mb-3">
//         <Title text1={'YOUR'} text2={'FAVOURITE'} />
//       </div>
//       <div>
//         {
//           favouriteData.map((item, index) => {
//             const gameData = games.find((game) => game._id === item._id)
//           return(
//             <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//               <div className='flex items-start gap-6'>
//                 <img src={gameData.image} className='w-16 sm:w-20' alt="" />
//                 <div>
//                   <p className='text-sm sm:text-lg font-medium'>{gameData.name}</p>
//                   <div className='flex items-center gap-5 mt-2'>
//                     <p>{currency}{gameData.price} </p>
//                     <p className='px-2 sm:px-3 sm:py-1 bg-slate-50'>{item.lavels} </p>
//                   </div>
//                 </div>
//               </div>
//               <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
//               <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} className='w-4 sm:w-5 cursor-pointer' alt="" />
//             </div>
//           )
//           })
//         }
//       </div>

//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:w-[450px]'>
//           {/* <CartTotal /> */}
//           <div className='w-full text-end'>
//             <button onClick={() => navigate('/place-orders')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Favourite


import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../contexts/GameContext';
import Title from '../components/Title';
import { RiDeleteBinFill } from 'react-icons/ri';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import axios from 'axios';
import TotalFavourite from '../components/TotalFavourite';
import axiosWithAuth from './axiosWithAuth';


const Favourite = () => {
    const { games, navigate, currency, favouriteItems, updateQuantity } = useContext(GameContext);
    const [favouriteData, setFavouriteData] = useState([]);
    console.log(favouriteItems)
    console.log(favouriteData)

    useEffect(() => {
      
      const tempData = [];
      const fetchData = async () => {
        const tempData = await axiosWithAuth().get(`/gamecart/`, {
  
        });
      };
      fetchData();
      console.log(tempData)
  
      for (const itemId in favouriteItems) {
        if (favouriteItems[itemId] > 0) {
          tempData.push({
            id: itemId,
            quantity: favouriteItems[itemId]
          });
        }
      }
  
      setFavouriteData(tempData);
    }, [favouriteItems]);
  

    return (
        <div className='m-8'>
      <div className="p-4">
        <Title title="Your Favourites" />
        {favouriteData.length === 0 ? (
          <p>No favourites found.</p>
        ) : (
          favouriteData.map((item, index) => {
            const game = games.find((g) => String(g.id) === String(item.id));
  
            if (!game) {
              console.warn(`Game with ID ${item.id} not found`);
              return null;
            }
  
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img src={game.image} className="w-16 sm:w-20" alt={game.title} />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">{game.title}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{game.price}</p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) => updateQuantity(item.game.id, parseInt(e.target.value))}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                />
                <div className="flex gap-2">
                  <button onClick={() => updateQuantity(item.id, 0)} className="w-4 sm:w-5 cursor-pointer">
                    <RiDeleteBinFill size={20} />
                  </button>
                  <button onClick={() => navigate('/play-game')} className="w-4 sm:w-5 cursor-pointer">
                    <MdOutlinePlayCircleFilled size={20} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

        <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
                <TotalFavourite />
                <div className='w-full text-end'>
                    <button onClick={() => navigate('/play-game')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
      </div>
    );
  };
  export default Favourite;

// const Favourite = () => {
//     const { games, navigate, currency, favouriteItems, updateQuantity, assets } = useContext(GameContext);
//     const [favouriteData, setFavouriteData] = useState([]);
//     const [gameData, setGameData] = useState([]);
//     const [user, setUser] = useState(null);

//     // useEffect(() => {
//     //     const tempData = [];
    
//     //     for (const itemId in favouriteItems) {
//     //         if (favouriteItems[itemId] > 0) {
//     //             tempData.push({
//     //                 id: itemId,
//     //                 quantity: favouriteItems[itemId]
//     //             });
//     //         }
//     //     }
    
//     //     setFavouriteData(tempData);
//     // }, [favouriteItems]);
//     // console.log(favouriteData);
//     // console.log(favouriteItems);
    
//     useEffect(() => {
//         async function fetchGameData() {
//           const token = localStorage.getItem('token');
      
//           if (!token) {
//             navigate('/login');
//             return;
//           }
      
//           try {
//             const response = await axios.get('http://localhost:8000/api/gamecart/', {
//               headers: {
//                 Authorization: `Bearer ${token}`
//               }
//             });
//             setUser(response.data);
//             setGameData(response.data); // <-- Not clear if this is correct
//           } catch (err) {
//             console.error("Error fetching favourite:", err);
//             localStorage.removeItem('token');
//             navigate('/login');
//           }
//         }
      
//         fetchGameData();
//       }, [navigate]);
    
//     //   if (!user) {
//     //     return <div className="text-center mt-10">Loading...</div>;
//     //   }

//     {favouriteData.map((item, index) => {
//         const gameData = games.find((game) => String(game.id) === String(item.id));
      
//         if (!gameData) {
//           console.log(`Game with ID ${item.id} not found!`);
//           return null;
//         }
//     return (
//     <>
//     {/* {favouriteData.map((item, index) => {
//         console.log('Item in favouriteData:', item);  // Check the item structure
//         const gameData = games.find((game) => String(game.id) === String(item.game_id));

//         if (!gameData) {
//           console.log(`Game with ID ${item.game_id} not found!`);
//           return null; // Skip rendering if game not found
//         }
     
//         console.log(`Rendering game: ${gameData.title}`);
//          */}
        
//           <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//             <div className='flex items-start gap-6'>
//               <img src={gameData.image} className='w-16 sm:w-20' alt={gameData.title} />
//               <div>
//                 <p className='text-sm sm:text-lg font-medium'>{gameData.title}</p>
//                 <div className='flex items-center gap-5 mt-2'>
//                   <p>{currency}{gameData.price}</p>
//                 </div>
//               </div>
//             </div>
//             <input 
//               onChange={(e) => {
//                 const value = e.target.value === '' || e.target.value === '0' ? null : Number(e.target.value);
//                 if (value) {
//                   updateQuantity(item.game_id, value);
//                 }
//               }} 
//               type="number" 
//               min={1} 
//               defaultValue={item.quantity} 
//               className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' 
//             />
//             <div className='flex gap-2'>
//               <button onClick={() => updateQuantity(item.game_id, 0)} className='w-4 sm:w-5 cursor-pointer'>
//                 <RiDeleteBinFill size={20} />
//               </button>
//               <button onClick={() => navigate('/play-game')} className='w-4 sm:w-5 cursor-pointer'>
//                 <MdOutlinePlayCircleFilled size={20} />
//               </button>
//             </div>
//           </div>
//      {/* })} */}
//     </>
//     );
//      })}
//     // );  

//     // return (
//     //     <div className='border-t pt-14 m-8'>
//     //         <div className="text-2xl mb-3">
//     //             <Title text1={'YOUR'} text2={'FAVOURITE GAME'} />
//     //         </div>
//     //         <div>
//     //             {favouriteData.map((item, index) => {
//     //                 // Find game data based on the _id
//     //                 const gameData = games.find((game) => game.id === item.id);
//     //                 // console.log(gameData);
                    
//     //                 // If gameData is not found, handle the case (e.g., return null or a placeholder)
//     //                 // if (!gameData) {
//     //                 //     return (
//     //                 //         <div key={index} className='py-4 border-t border-b text-gray-700'>
//     //                 //             <p>Game not found</p>
//     //                 //         </div>
//     //                 //     );
//     //                 // }

//     //                 return (
//                         // <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//                         //     <div className='flex items-start gap-6'>
//                         //         <img src={gameData.image} className='w-16 sm:w-20' alt={gameData.title} />
//                         //         <div>
//                         //             <p className='text-sm sm:text-lg font-medium'>{gameData.title}</p>
//                         //             <div className='flex items-center gap-5 mt-2'>
//                         //                 <p>{currency}{gameData.price}</p>
//                         //                 {/* <p className='px-2 sm:px-3 sm:py-1 bg-slate-50'>{item.lavels}</p> */}
//                         //             </div>
//                         //         </div>
//                         //     </div>
//                             // <input
//                             //     onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id, Number(e.target.value))}
//                             //     type="number"
//                             //     min={1}
//                             //     defaultValue={item.quantity}
//                             //     className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
//                             // />
//     //                         {/* <div className='flex items-center gap-5 mt-2'>
//     //                                     <p>{currency}{gameData.price}</p>
//     //                                 </div> */}
//     //                         {/* <img
//     //                             onClick={() => updateQuantity(item._id, item.lavels, 0)}
//     //                             src={assets.bin_icon}
//     //                             className='w-4 sm:w-5 cursor-pointer'
//     //                             alt="Delete"
//     //                         /> */}

//                         //     <div className='flex gap-2'>
//                         //         <button onClick={() => updateQuantity(item.id, 0)} className='w-4 sm:w-5 cursor-pointer'><RiDeleteBinFill size={20} /></button>
//                         //         <button onClick={() => navigate('/play-game')} className='w-4 sm:w-5 cursor-pointer' ><MdOutlinePlayCircleFilled size={20} /></button>
//                         //     </div>
//                         // </div>
//     //                 );
//     //             })}
//     //         </div>
//             // <div className='flex justify-end my-20'>
//             //     <div className='w-full sm:w-[450px]'>
//             //         <TotalFavourite />
//             //         <div className='w-full text-end'>
//             //             <button onClick={() => navigate('/play-game')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
//             //         </div>
//             //     </div>
//     //         </div>
//     //     </div>
//     // );
// };

// export default Favourite;
