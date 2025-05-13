import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import LatestGame from '../components/LatestGame';
import BestOnlineGame from '../components/BestOnlineGame';
import BestOfflineGame from '../components/BestOfflineGame';
import LatestNews from '../components/LatestNews';
import Promo from '../components/Promo';
import WatingGame from '../components/WatingGame';


const Home = () => {

  // const [position, setPosition] = useState(0);

  // const speed = 2; // speed of movement in pixels per frame
  // const boxWidth = 64; // width of boxes
  // const boxHeight = 64; // height of boxes
  // const screenWidth = window.innerWidth; // full screen width
  // const screenHeight = window.innerHeight; // full screen height

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Move boxes vertically and repeat once they reach the end of the screen height
  //     setPosition((prev) => (prev + speed) % (screenHeight + boxHeight)); // Loop vertically
  //   }, 16); // ~60 FPS
  //   return () => clearInterval(interval);
  // }, []);

    // Stop after 5 seconds
  //   const timer = setTimeout(() => {
  //     clearInterval(interval);
  //     setIsStopped(true);
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //     clearTimeout(timer);
  //   };
  // }, [direction, isStopped]);

  return (
    <div>

{/* <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
  <div class="p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:scale-105">
    <img src="https://via.placeholder.com/300" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg" />
    <h2 class="text-white text-xl font-semibold text-center transition-colors duration-300 hover:text-yellow-400">Product Title</h2>
    <p class="text-white text-lg font-bold text-center mt-4 transition-colors duration-300 hover:text-yellow-400">$99.99</p>
    <button class="mt-4 w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105 hover:shadow-xl">Add to Cart</button>
  </div>

  <div class="p-6 bg-blue-600 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
    <img src="https://via.placeholder.com/300" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg" />
    <h2 class="text-white text-xl font-semibold text-center transition-colors duration-300 hover:text-orange-300">Product Title</h2>
    <p class="text-white text-lg font-bold text-center mt-4 transition-colors duration-300 hover:text-orange-300">$129.99</p>
    <button class="mt-4 w-full bg-orange-500 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-xl">Add to Cart</button>
  </div>

  <div class="p-6 bg-red-600 rounded-lg shadow-lg transform transition-all duration-300 hover:rotate-3 hover:opacity-90">
    <img src="https://via.placeholder.com/300" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg" />
    <h2 class="text-white text-xl font-semibold text-center transition-colors duration-300 hover:text-yellow-300">Product Title</h2>
    <p class="text-white text-lg font-bold text-center mt-4 transition-colors duration-300 hover:text-yellow-300">$89.99</p>
    <button class="mt-4 w-full bg-yellow-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:bg-yellow-700 hover:scale-105 hover:shadow-xl">Add to Cart</button>
  </div>
</div> */}

      <Hero />
      <LatestGame />
      < BestOnlineGame />
      < BestOfflineGame />
      {/* < LatestNews /> */}

      < Promo />
      < WatingGame />
      
    </div>
  )
}

export default Home
      {/* <div class="grid grid-cols-2 gap-4 p-4">
  <div class="p-6 bg-blue-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110">
    <p class="text-white text-center">Hover me to scale!</p>
  </div>

  <div class="p-6 bg-green-500 rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-80">
    <p class="text-white text-center">Hover me to change opacity!</p>
  </div>

  <div class="p-6 bg-red-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:rotate-6">
    <p class="text-white text-center">Hover me to rotate!</p>
  </div>

  <div class="p-6 bg-yellow-500 rounded-lg shadow-lg animate-pulse">
    <p class="text-white text-center">I am pulsing!</p>
  </div>
</div> */}

{/* <div class="grid grid-cols-2 gap-4 p-4">
  <div class="p-6 bg-blue-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110">
    <p class="text-white text-center">Hover to Scale</p>
  </div>

  <div class="p-6 bg-green-500 rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-70">
    <p class="text-white text-center">Hover to Change Opacity</p>
  </div>

  <div class="p-6 bg-red-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:rotate-6">
    <p class="text-white text-center">Hover to Rotate</p>
  </div>

  <div class="p-6 bg-yellow-500 rounded-lg shadow-lg animate-pulse">
    <p class="text-white text-center">Pulsing</p>
  </div>

  <div class="p-6 bg-purple-500 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl">
    <p class="text-white text-center">Hover to Increase Shadow</p>
  </div>

  <div class="p-6 bg-indigo-500 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-indigo-700">
    <p class="text-white text-center">Hover to Change Background Color</p>
  </div>

  <div class="p-6 bg-pink-500 rounded-lg shadow-lg transform transition-all duration-300 hover:blur-sm hover:rotate-3">
    <p class="text-white text-center">Hover to Blur and Rotate</p>
  </div>

  <div class="p-6 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
    <p class="text-white text-center">Hover to Scale with Gradient</p>
  </div>
</div> */}
      {/* <div className='w-full h-full min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-100 to-blue-200'> */}
      
      {/* <div
        className="absolute top-10 w-16 h-16 rounded shadow-lg"
        style={{
          left: `${position - boxWidth}px`,
          backgroundImage: "url('https://via.placeholder.com/64')",
          backgroundSize: "cover",
        }}
      />
        <div
        className="absolute top-10 w-16 h-16 rounded shadow-lg"
        style={{
          left: `${screenWidth - ((position + 300) % (screenWidth + boxWidth))}px`,
          backgroundImage: "url('https://via.placeholder.com/64/FF0000')",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute top-32 w-16 h-16 rounded shadow-lg"
        style={{
          left: `${(position + 150) % (screenWidth + boxWidth) - boxWidth}px`,
          background: "linear-gradient(to bottom, #4ade80, #22c55e)",
        }}
      />
      <div
        className="absolute top-32 w-16 h-16 rounded shadow-lg"
        style={{
          left: `${screenWidth - ((position + 450) % (screenWidth + boxWidth))}px`,
          background: "linear-gradient(to bottom, #facc15, #eab308)",
        }}
      /> */}

       {/* Left to right moving boxes */}
      {/* <div
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
          top: `${(position + 100) % (screenHeight + boxHeight) - boxHeight}px`, // Vertical position, looping
          left: "30%", // Horizontal position
          background: "linear-gradient(to bottom, #4ade80, #22c55e)",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${position +200 - boxHeight}px`, // Vertical position
          left: "50%", // Horizontal position
          backgroundImage: "url('https://via.placeholder.com/64')",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${(position + 300) % (screenHeight + boxHeight) - boxHeight}px`, // Vertical position, looping
          left: "70%", // Horizontal position
          background: "linear-gradient(to bottom, #4ade80, #22c55e)",
        }}
      />

      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${screenHeight - ((position + 300) % (screenHeight + boxHeight))}px`, // Move vertically up when it reaches the bottom
          left: "20%", // Horizontal position
          backgroundImage: "url('https://via.placeholder.com/64/FF0000')",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${screenHeight - ((position + 450) % (screenHeight + boxHeight))}px`, // Move vertically up when it reaches the bottom
          left: "40%", // Horizontal position
          background: "linear-gradient(to bottom, #facc15, #eab308)",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${screenHeight - ((position + 300) % (screenHeight + boxHeight))}px`, // Move vertically up when it reaches the bottom
          left: "60%", // Horizontal position
          backgroundImage: "url('https://via.placeholder.com/64/FF0000')",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute w-16 h-16 rounded shadow-lg"
        style={{
          top: `${screenHeight - ((position + 450) % (screenHeight + boxHeight))}px`, // Move vertically up when it reaches the bottom
          left: "80%", // Horizontal position
          background: "linear-gradient(to bottom, #facc15, #eab308)",
          backgroundSize: "cover",
        }}
      />
       
      </div>      */}
      
