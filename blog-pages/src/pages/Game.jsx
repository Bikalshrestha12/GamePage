import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../contexts/GameContext';
import { MdOutlineArrowDropDown } from "react-icons/md";
import Title from '../components/Title';
import Gameitem from '../components/Gameitem';
import ButtonAnimated from '../components/ButtonAnimated';
import { assets } from '../assets/assets';
import axios from 'axios'

const Game = () => {
  const { games, alphabet, showAlphabet, search, showSearch } = useContext(GameContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterGame, setFilterGame] = useState(games); // Initialize with all games
  const [types, setType] = useState([]); // Store selected type filters (Free/Paid)
  const [online, setOnline] = useState([]); // Store selected online filters (Online/Offline)
  const [shortType, setShortType] = useState('relavent'); // Store sorting criteria
  // const [game, setGame] = useState([])

  
  // backend connect 
  const getgames = async() => {
    const response = await axios.get('http://localhost:8000/api/game/')
    // console.log(response.data);
    setFilterGame(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getgames()
  },[])
  
  // Toggle online filter (Online / Offline)
  const toggleOnline = (e) => {
    const value = e.target.checked;  // Use checked property
    setOnline(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };


  const toggleType = (e) => {
    const value = e.target.checked;  // Use checked property
    setType(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

 
  
  // Apply filters
  const applyFilter = () => {
    let gamesCopy = games.slice(); // Create a copy of the games array
    // console.log("Alphabet:", alphabet, "Search:", search);        
    // console.log("Show Alphabet:", showAlphabet, "Show Search:", showSearch);

    if (showAlphabet && alphabet) {
      gamesCopy = gamesCopy.filter(item => item.title.toLowerCase().includes(alphabet.toLowerCase()));
    }
    
    if (showSearch && search) {
      gamesCopy = gamesCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (showSearch && search) {
      gamesCopy = gamesCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    // Filter games based on online status (true/false)
    if (online.length > 0) {
      gamesCopy = gamesCopy.filter(item => online.includes(item.online));
    }

    // Filter games based on paid status (true/false)
    if (types.length > 0) {
      gamesCopy = gamesCopy.filter(item => types.includes(item.true));
    }

    // Update filtered games list
    setFilterGame(gamesCopy);
  };

  const  sortGames = (gamesCopy) => {
    let fpCopy = filterGame.slice();

    switch(shortType){
      case 'low-high':
      setFilterGame(fpCopy.sort((a,b) => (a.price - b.price)))
      break;
      case 'high-low':
        setFilterGame(fpCopy.sort((a,b) => (b.price - a.price)))
        break;

      default:
        applyFilter();
        break;
    }
  }


  // useEffect(() => {
  //   setFilterGame(games); 
  // }, [games]);

  useEffect(() => {
    applyFilter();
  },[online, types, alphabet, showAlphabet, search, showSearch])

  useEffect(() => {
    sortGames();
  },[shortType])


  // Background Set
  // const [position, setPosition] = useState(0);

  // const speed = 2; // Speed of movement in pixels per frame
  // const boxWidth = 64; // Width of the boxes
  // const boxHeight = 64; // Height of the boxes
  // const screenWidth = window.innerWidth; // Full screen width
  // const screenHeight = window.innerHeight; // Full screen height
  // const containerHeight = screenHeight * 5; // 500vh container height

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Move boxes vertically and repeat once they reach the end of the container height
  //     setPosition((prev) => (prev + speed) % (containerHeight + boxHeight)); // Loop vertically
  //   }, 16); // ~60 FPS
  //   return () => clearInterval(interval);
  // }, []);
  

  
  return (
    <>
  {/* <div className="w-full h-[450vh] min-h-[900vh] relative bg-gradient-to-br from-purple-100 to-blue-200">
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${position - boxHeight}px`, // Vertical position
          left: "10%", // Horizontal position
          backgroundImage: "url('https://via.placeholder.com/64')",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${(position + 100) % (containerHeight + boxHeight) - boxHeight}px`, // Vertical position, looping
          left: "30%", // Horizontal position
          // background: "linear-gradient(to bottom, #4ade80, #22c55e)",
          backgroundImage: "url('https://via.placeholder.com/64')",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${position + 200 - boxHeight}px`, // Vertical position
          left: "50%", // Horizontal position
          backgroundImage: "url('https://via.placeholder.com/64')",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${(position + 300) % (containerHeight + boxHeight) - boxHeight}px`, // Vertical position, looping
          left: "70%", // Horizontal position
          // background: "linear-gradient(to bottom, #4ade80, #22c55e)",
          backgroundImage: "url('https://via.placeholder.com/64')",
          backgroundSize: "cover",
        }}
      />

      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${containerHeight - ((position + 300) % (containerHeight + boxHeight))}px`, // Move vertically up when it reaches the bottom
          left: "20%", // Horizontal position
          backgroundImage: "url('https://via.placeholder.com/64/FF0000')",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${containerHeight - ((position + 450) % (containerHeight + boxHeight))}px`, // Move vertically up when it reaches the bottom
          left: "40%", // Horizontal position
          // background: "linear-gradient(to bottom, #facc15, #eab308)",
          backgroundImage: "url('https://via.placeholder.com/64')",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${containerHeight - ((position + 300) % (containerHeight + boxHeight))}px`, // Move vertically up when it reaches the bottom
          left: "60%", // Horizontal position
          backgroundImage: "url('https://via.placeholder.com/64/FF0000')",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${containerHeight - ((position + 450) % (containerHeight + boxHeight))}px`, // Move vertically up when it reaches the bottom
          left: "80%", // Horizontal position
          // background: "linear-gradient(to bottom, #facc15, #eab308)",
          backgroundImage: "url('https://via.placeholder.com/64')",
          backgroundSize: "cover",
        }}
      /> */}



    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t m-10">
  {/* Sidebar */}
  <div className="min-w-60 sm:min-w-[250px]">
    {/* FILTER Title (collapsible on small screens) */}
    <p
      onClick={() => setShowFilter(!showFilter)}
      className="my-2 text-xl flex items-center cursor-pointer gap-2"
    >
      FILTER
      <img
        className={`h-3 sm:hidden transition-transform duration-200 ${showFilter ? 'rotate-90' : ''}`}
        src={assets.dropdown_icon}
        alt="dropdown"
      />
    </p>

    {/* Filter Sections */}
    <div className="h-[100vh] overflow-y-auto pr-2 no-scrollbar">
      {/* TYPES */}
      <div className="border border-gray-300 pl-5 py-3 mt-6 sm:block">
        <p className="mb-3 text-sm font-medium">TYPES</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700 mb-5">
          <label className="flex gap-2">
            <input type="checkbox" className="w-3" value="online" onChange={toggleOnline} />
            Online
          </label>
          <label className="flex gap-2">
            <input type="checkbox" className="w-3" value="offline" onChange={toggleOnline} />
            Offline
          </label>
        </div>
      </div>

      {/* SUBTYPES (collapsible on mobile) */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className="mb-3 text-sm font-medium">SUBTYPES</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <label className="flex gap-2">
            <input type="checkbox" className="w-3" value="types" onChange={toggleType} />
            Free
          </label>
          <label className="flex gap-2">
            <input type="checkbox" className="w-3" value="nonetypes" onChange={toggleType} />
            Paid
          </label>
        </div>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className="flex-1">
    {/* Header with sorting */}
    <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
      <Title text1="ALL" text2="GAME" />
      <select
        onChange={(e) => setShortType(e.target.value)}
        className="border-2 border-gray-300 text-sm px-2 py-1"
      >
        <option value="relavent">Sort by: Relevant</option>
        <option value="low-high">Sort by: Low to High</option>
        <option value="high-low">Sort by: High to Low</option>
      </select>
    </div>

    {/* Animated filter toggle button for mobile */}
    <div className="max-sm:hidden ">
      <ButtonAnimated className={`h-3 ${showFilter ? 'rotate-90' : ''}`} />
    </div>

    {/* Game grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-8">
      {filterGame.map((item, index) => (
        <Gameitem
          key={index}
          title={item.title}
          id={item.id}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  </div>
</div>
{/* </div> */}
</>
  )
}

export default Game



// import React, { useContext, useEffect, useState } from 'react';
// import { GameContext } from '../contexts/GameContext';
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import Title from '../components/Title';
// import Gameitem from '../components/Gameitem';
// import ButtonAnimated from '../components/ButtonAnimated';
// import { assets } from '../assets/assets';

// const Game = () => {
//   const { games } = useContext(GameContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterGame, setFilterGame] = useState(games); // Initialize with all games
//   const [type, setType] = useState([]); // Store selected type filters (Free/Paid)
//   const [online, setOnline] = useState([]); // Store selected online filters (Online/Offline)
//   const [shortType, setShortType] = useState('relavent'); // Store sorting criteria

//   // Toggle online filter (Online / Offline)
//   const toggleOnline = (e) => {
//     const value = e.target.value === 'true'; // Convert checkbox value to boolean (true/false)
//     setOnline(prev => {
//       if (prev.includes(value)) {
//         return prev.filter(item => item !== value); // Remove from selected online filters
//       } else {
//         return [...prev, value]; // Add to selected online filters
//       }
//     });
//   };

//   // Toggle type filter (Free / Paid)
//   const toggleType = (e) => {
//     const value = e.target.value === 'true'; // Convert checkbox value to boolean (true/false)
//     setType(prev => {
//       if (prev.includes(value)) {
//         return prev.filter(item => item !== value); // Remove from selected type filters
//       } else {
//         return [...prev, value]; // Add to selected type filters
//       }
//     });
//   };

//   // Apply filters
//   const applyFilter = () => {
//     let gamesCopy = games.slice(); // Create a copy of the games array

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

//   // Sort games based on selected sort type (e.g., low to high, high to low)
//   const sortGames = (gamesCopy) => {
//     switch (shortType) {
//       case 'low-high':
//         return gamesCopy.sort((a, b) => a.price - b.price);
//       case 'high-low':
//         return gamesCopy.sort((a, b) => b.price - a.price);
//       default:
//         return gamesCopy; // No sorting, return the original array
//     }
//   };

//   // Apply the filters whenever online or type changes
//   useEffect(() => {
//     applyFilter();
//   }, [online, type]);

//   // Apply the sorting whenever shortType changes
//   useEffect(() => {
//     const sortedGames = sortGames(filterGame);
//     setFilterGame(sortedGames); // Update filtered games after sorting
//   }, [shortType]);

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t m-10'>
      
//       <div className='min-w-60'>
//         <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
//           FILTER
//           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="filter icon" />
//         </p>

//         <div className={`border border-gray-300 pl-5 py-3 mt-6 sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700 mb-5'>
//             <p className='flex gap-2'>
//               <input type="checkbox" className='w-3' value='true' onChange={toggleOnline} /> Online
//             </p>
//             <p className='flex gap-2'>
//               <input type="checkbox" className='w-3' value='false' onChange={toggleOnline} /> Offline
//             </p>
//           </div>
//         </div>

//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>SUBTYPES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input type="checkbox" className='w-3' value='false' onChange={toggleType} /> Free
//             </p>
//             <p className='flex gap-2'>
//               <input type="checkbox" className='w-3' value='true' onChange={toggleType} /> Paid
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className='flex-1'>
//         <div className="flex justify-between text-base sm:text-2xl mb-4">
//           <Title text1={"ALL"} text2={'GAME'} />
//           <select onChange={(e) => setShortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//             <option value="relavent">Sort by: Relavent</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         <div>
//           <ButtonAnimated />
//         </div>

//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-8'>
//           {filterGame.length === 0 ? (
//             <p>No games found based on selected filters.</p>
//           ) : (
//             filterGame.map((item, index) => (
//               <Gameitem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Game;
