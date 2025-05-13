import React, {useEffect, useState} from 'react'
import { assets } from '../assets/assets';
import { Link} from 'react-router-dom';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
      {
        backgroundImage: `https://th.bing.com/th/id/OIP.Ve8WqogpMKMruvxi2ptdnQHaE7?w=230&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
        heading: "Welcome to Our Site",
        description: "This is the first slide description. Learn more about us.",
        buttonText: "Get Started",
        Link:'/game'
      },
      {
        backgroundImage: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600",
        heading: "Join Our Community",
        description: "Join our amazing community of like-minded people.",
        buttonText: "Join Now",
        Link:'contact'
      },
      {
        backgroundImage: "https://images.pexels.com/photos/220051/pexels-photo-220051.jpeg?auto=compress&cs=tinysrgb&w=600",
        heading: "Explore New Features",
        description: "Check out the newest features we have to offer.",
        buttonText: "Explore Now",
        Link:'news'
      },
    ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  // console.log(slides);
  // console.log(slides.backgroundImage);
  // console.log("Background Image:", slides?.backgroundImage);
  // console.log("Current Slide Background:", slides[currentIndex].backgroundImage);
  return (
    <div id="carouselExample" className="relative">
      <div className="relative overflow-hidden">
        {/* <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
          {slides.map((slide, index) => (
            
            <div
              className="w-full flex-shrink-0 relative text-black"
              key={index}
              
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width:'100%',
                height: '90vh',
                zIndex: -1,
                
              }}
            >              
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl font-semibold mb-4">{slide.heading}</h1>
                  <p className="mb-6">{slide.description}</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all cursor-pointer">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}

<div className="relative w-full h-[90vh] overflow-hidden">
  {/* Image as background */}
  <img
    src={slides[currentIndex].backgroundImage}
    alt="Slide"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />

  {/* Overlay content */}
  <div className="absolute inset-0 bg-opacity-50 z-10 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-4xl font-semibold mb-4">{slides[currentIndex].heading}</h1>
      <p className="mb-6 ">{slides[currentIndex].description}</p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all cursor-pointer">
        <Link to={slides[currentIndex].Link}>{slides[currentIndex].buttonText}</Link>
      </button>
    </div>
  </div>
</div>

      </div>

      {/* Left Button */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        <span className="text-2xl">&lt;</span>
      </button>

      {/* Right Button */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        <span className="text-2xl">&gt;</span>
      </button>
      {/* <img src="https://images.pexels.com/photos/220051/pexels-photo-220051.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
      
      {/* <img src={slides.backgroundImage} alt="test" /> */}
    </div>
  )
}

export default Hero
