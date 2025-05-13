import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext';

const ButtonAnimated = () => {
  const { setAlphabet, setShowAlphabet } = useContext(GameContext);

  const handleAlphabetChange = (letter) => {
    setAlphabet(letter); // Set the alphabet to the selected letter
    setShowAlphabet(true); // Enable the alphabet filter (if you want to show it)
  };

  return (
    <>
    <style>{`
         @keyframes fadeIn {
            0% {
            opacity: 0,
            transform: translateY(-20px);
        },
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    },

    button {
        display: inline-block;
        opacity: 0;
        animation: fadeIn 0.5s ease forwards;
    }
    `}</style>
     {/* Animated A-Z Buttons */}
     <div className='grid grid-cols-9 md:grid-cols-13 lg:grid-cols-20 gap-4 gap-y-6 mt-8'>
        {[...Array(26)].map((_, i) => (
          <button
            key={i}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
            style={{
              animation: `fadeIn 0.5s ease forwards`,
              animationDelay: `${i * 0.1}s`,
            }}
            onClick={() => handleAlphabetChange(String.fromCharCode(65 + i))} // On click, call handleAlphabetChange
          >
            {String.fromCharCode(65 + i)} {/* A to Z */}
          </button>
        ))}
      </div>
   </>
  )
}

export default ButtonAnimated
