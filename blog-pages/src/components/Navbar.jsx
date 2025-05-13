import React, { useContext, useEffect, useState } from 'react';
import {Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { IoPersonOutline } from "react-icons/io5";
import { GameContext } from '../contexts/GameContext';
import { MdFavorite } from 'react-icons/md';
import axios from 'axios';
import axiosWithAuth from '../pages/axiosWithAuth';
import { toast } from 'react-toastify';
import { IoIosLogOut } from 'react-icons/io';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getFavouriteCount, logout } = useContext(GameContext);
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if the user is logged in (this could be from localStorage or an auth API)
    useEffect(() => {
        const token = localStorage.getItem('access_token'); // Check if token exists in localStorage
        if (token) {
        setIsLoggedIn(false);
        } else {
        setIsLoggedIn(true);
        }
    }, []);

    

    // const handleLogout = async () => {
    //   const token = localStorage.getItem('token');
    //   console.log('Logout token:', localStorage.token);
    
    //   try {
        
    //     await axiosWithAuth().post('auth/logout/');
    //     // localStorage.removeItem('access_token');
    //     toast.success('Logged out successfully!');
    //   } catch (error) {
    //     console.error('Error logging out:', error);
    //     localStorage.removeItem('access_token');
    //     toast.error('Logout failed, but session ended.');
    //   } finally {
    //     localStorage.removeItem('token');
    //     setIsLoggedIn(false);
    //     navigate('/login');
    //   }
    // };

  //   const handleLogout = async () => {
  //     try {
  //       // Use axiosWithAuth to make a POST request for logout (if required by your API)
  //       const response = await axiosWithAuth().post('auth/logout/'); // Make sure '/logout' is your correct API endpoint
        
  //       // Handle logout success (e.g., clear token, redirect user)
  //       localStorage.removeItem('token');
  //       // Optionally, redirect the user to the login page
  //       window.location.href = 'auth/logout/'; // Or use a routing method like `history.push('/login')`
    
  //     } catch (error) {
  //       console.error('Error logging out:', error);
  //     }
  //   };
  //   // const token = localStorage.getItem('token');
  //   // console.log('local storage token : ', token)
  //   useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     console.log(localStorage.getItem('token'));
  //     setIsLoggedIn(!!token); // true if token exists, false otherwise
  // }, []);
  
  

    const [expandNavbar, setExpandNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setExpandNavbar(window.scrollY > window.innerHeight); // After scrolling 100vh
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`top-0 z-50 bg-white shadow transition-all duration-500 ${
          expandNavbar ? 'h-full' : 'h-full'
        }`}
      >
        {/* < div className="flex item-center justify-between py-5 font-medium"> */}
        <div className='mx-20'>
          <div className="flex item-center justify-between py-5 font-medium">
            <NavLink to='/'><img src={assets.logo} className='w-36 cursor-pointer rounded-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105 hover:shadow-xl' alt="" /></NavLink>
            {/* <p>EndGame</p> */}

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >
                <NavLink to='/' className='flex flex-col item-center gap-1 transition-colors duration-300 hover:text-yellow-400'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/game' className='flex flex-col item-center gap-1 transition-colors duration-300 hover:text-yellow-400'>
                    <p>Game</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/reviews' className='flex flex-col item-center gap-1 transition-colors duration-300 hover:text-yellow-400'>
                    <p>Reviews</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/news' className='flex flex-col item-center gap-1 transition-colors duration-300 hover:text-yellow-400'>
                    <p>News</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col item-center gap-1 transition-colors duration-300 hover:text-yellow-400'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
                </NavLink>
            </ul>

            {/* <div className="flex item-center gap-6 z-50">
                
                onClick={() => setShowSearch(true)}
                <img onClick={() => setShowSearch(true)}  src={assets.search_icon} className='w-5 h-5 cursor-pointer' alt="" />
                <div className="group relative">
                    <Link to='/login'>
                    <div  className='w-5 cursor-pointer'><IoPersonOutline size={20}/></div></Link>
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p> 
                            <p onClick={handleLogout} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/favourite' className='relative'>
                    <div ><MdFavorite className='w-5 min-w-5' size={20} /></div>
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-squer rounded-full text-[-8px]'>{getFavouriteCount()}</p> {/* {getCartCount()}
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div> */}
            <div className="flex items-center gap-6 z-50">
          {/* Conditional Rendering: If logged in, show profile and logout */}
          {isLoggedIn ? (
            <div className="flex">
              
                <div className="w-5 cursor-pointer">
                <Link to='myprofile'><IoPersonOutline size={20} className='text-black' /></Link>
                </div>
                <div className='mx-5 cursor-pointer'>
                <IoIosLogOut size={20} className='text-black' onClick={logout} />
                </div>
              
            </div>

              // <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              // <Link to="/login" className="text-sm font-semibold text-gray-900">
              //   Log in <span aria-hidden="true">&rarr;</span>
              // </Link>
              // </div> 
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to="/login" className="text-sm font-semibold text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            // <div className="group relative">
                      
            // <div className="w-5 cursor-pointer">
            //   <IoPersonOutline size={20} />
            // </div>

            // <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            // <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
            //   <p className="cursor-pointer hover:text-black">My Profile</p>
            //   <p onClick={handleLogout} className="cursor-pointer hover:text-black">
            //     Logout
            //   </p>
            // </div>
            // </div>
            // </div>
          )}

          {/* Favourite link */}
          <Link to="/favourite" className="relative">
            <div>
              <MdFavorite className="w-5 min-w-5 text-black" size={20} />
            </div>
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-xs">
              {/* {getFavouriteCount()} */}
              0
            </p>
          </Link>

          {/* Mobile menu icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>
            {/* sidebar menu for smaill screen  */}

            <div className= {`z-50 absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                        <p className='cursor-pointer'>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} to='/' className="py-2 pl-6 border">Home</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/game' className="py-2 pl-6 border">Game</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/reviews' className="py-2 pl-6 border">Reviews</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/news' className="py-2 pl-6 border">News</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/contact' className="py-2 pl-6 border">Contact</NavLink>
                </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default Navbar

