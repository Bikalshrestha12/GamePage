import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../contexts/GameContext';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { Link } from 'react-router-dom';
import RelatedGames from '../components/RelatedGames';
import axios from 'axios';
// import axiosWithAuth from '../utils/axiosWithAuth';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

// const GameList = () => {
//   const { games, currency, addToFavourte } = useContext(GameContext);
//   const [gameData, setGameData] = useState({});
//   const [image, setImage] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const getSingleGame = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/api/gamedetail/${id}/`);
//       console.log('Game Data:', response.data.data);
//       setGameData(response.data.data);
//       setImage(response.data.data.image[0] || response.data.data.image); // Handle array or single URL
//     } catch (error) {
//       console.error('Error fetching game data:', error);
//     }
//   };

//   useEffect(() => {
//     getSingleGame();
//   }, [id]);

//   if (!gameData || !gameData.image) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 m-8'>
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         {/* Game Image */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='w-full sm:w-[80%]'>
//             <img className='w-full h-auto' src={image || gameData.image} alt={gameData.title || 'Game Image'} />
//           </div>
//         </div>
//         {/* Game Details */}
//         <div className='flex-1'>
//           <h1 className='font-medium mt-2 text-2xl'>{gameData.title}</h1>
//           <p className='mt-5 text-3xl font-medium'>{currency}{gameData.price}</p>
//           <p className='my-5 text-gray-500 md:w-4/5'>{gameData.description}</p>
//           <div className='flex flex-col md:flex-row gap-4'>
//             <button onClick={() => addToFavourte(gameData.id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>
//               ADD TO FAVOURITE GAME
//             </button>
//             <button onClick={() => navigate('/play-game')} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>
//               PLAY TO GAME
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GameList;

const GameList = () => {

  // const {gameId} = useParams();
  const { games, currency, addToGameCart, gameCart } = useContext(GameContext);
  const [gameData, setGameData] = useState({});
  const [image, setImage] = useState(null);
  const [lavels, setLavels] = useState('');
  const [rating, setRating] = useState('');
  const [game, setGame] = useState({});
  const navigate = useNavigate();
  const {id} = useParams()

  const getSingleGame = async() => {
    const response = await axios.get(`http://localhost:8000/api/gamedetail/${id}/`)
    // console.log(response.data.data);
    
    // setGameData(response.data.data)
    setGameData(response.data.data)
    
  }

  // const getSingleGame = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8000/api/gamedetail/${id}/`);
  //     const game = response.data.data;
  //     setGameData(game);

  //     if (game.image) {
  //       const fullImageUrl = game.image.startsWith('/')
  //         ? `http://localhost:8000${game.image}`
  //         : game.image;
  //       setImage(fullImageUrl);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching game data:', error);
  //   }
  // };
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/gamedetail/${id}/`); // Replace with your actual API URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        console.log('Parsed JSON:', jsonResponse.data);

        const game = jsonResponse.data;
        console.log('Game data:', game);
        setGameData(game);

        // Set the image URL
        if (game.image) {
          const fullImageUrl = `http://localhost:8000${game.image}`;
          setImage(fullImageUrl);
          // setGameData(fullImageUrl);
        }

      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStar);

  
  useEffect(() => {
    getSingleGame();
  },[])

  // useEffect(() => {
  //   fetchData();
  // }, [])
  

  if (!gameData || !gameData.image) {
    return <p>Loading...</p>;
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 m-8'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* gameImage */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          {/* <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              gameData.image.map((item, index) => (
                <img onClick={() => setImage(item)} key={index} src={image} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div> */}
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt={gameData.title} />
          </div>
        </div>
        {/* gameDetails */}
        <div className='flex-1'>
          <h1 className='font-medium mt-2 text-2xl'>{gameData.title}</h1>
          <div className='flex items-center gap-1 mt-2'>
          <div className='flex items-center gap-1 mt-2'>
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} />
      ))}

      {/* Half Star */}
      {halfStar > 0 && <FaStarHalfAlt  />}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`}  />
      ))}

      {/* <p className='pl-2'>({rating})</p> */}
    </div>
            {gameData.rating}
            <p className='pl-2'>(144)</p>
          </div>
          <div>
          <p className='mt-5 text-3xl font-medium'> {currency}{gameData.price} </p>
          <p className='my-5 text-gray-500 md:w-4/5'>{gameData.description} </p>
          {/* <div className='flex flex-col gap-4 my-8'>
            <p>Select Label</p>
            <div className='flex gap-2'>
                // {gameData.lavels.map((item, index) => (
                  // <button onClick={() => setLavels(item)} className={`border py-2 px-4 bg-gray-100 ${item === lavels ? 'border-orange-500' : ''}`} key={index}>{item} </button> ))} 
                  {gameData.lavels && Array.isArray(gameData.lavels) && gameData.lavels.length > 0 ? (
                  gameData.lavels.map((item, index) => (
                    <button
                      onClick={() => setLavels(item)}
                      className={`border py-2 px-4 bg-gray-100 ${item === lavels ? 'border-orange-500' : ''}`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))
                ) : (
                  <p>No levels available</p>
                )}
              </div>
            </div> */}

            <div className='flex flex-col md:flex-row gap-4'>
              <button onClick={() => addToGameCart(gameData.id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>ADD TO FAVOURITE GAME</button>
              <button onClick={() => navigate('/play-game')} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>PLAY TO GAME</button>
            </div>
              <hr className='mt-8 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Game.</p>
                {/* <p>Cash On delivery is available on this product.</p> */}
                <p>EAsy to Play Game</p>
              </div>
            
          </div>
        </div>
      </div>
      
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (144)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sint, temporibus dolore aut nemo libero labore? Aliquid dignissimos dolor deserunt distinctio voluptatum ea, nulla nostrum odio natus cum veniam sit cupiditate, nam aliquam! Nisi odit cupiditate placeat iste libero voluptates maiores, id magnam quos eligendi? Quibusdam, commodi ipsam! Repellat et omnis alias earum repudiandae aspernatur velit illo, rem cupiditate ex.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis libero dignissimos fuga nemo magni saepe dolores. Ipsam odit ipsa corporis numquam? Debitis in repudiandae rerum illo ea aliquam amet odio vitae! Ipsa, recusandae eveniet quas optio voluptas eum provident soluta ullam magnam obcaecati aut, in autem. Expedita provident id voluptas.</p>
        </div>
      </div>
      <RelatedGames online={games.online} type={games.type} />
    </div>
    
  )
}

export default GameList
