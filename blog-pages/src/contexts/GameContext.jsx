// import React, { createContext, useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import {newsArticles} from '../pages/News'
// import axiosWithAuth from '../pages/axiosWithAuth';
// // import jwt_decode from "jwt-decode";
// // import { decode as jwt_decode } from 'jwt-decode';
// // // import { decode } from 'jwt-decode';
// import * as jwtDecode from "jwt-decode";

// export const GameContext = createContext();

// const GameContextProvider = (props) => {
//   const currency = '$';
//   const tax = 13;
//   const [alphabet, setAlphabet] = useState('');
//   const [games, setGames] = useState([]);
//   const [showAlphabet, setShowAlphabet] = useState(false);
//   const [search, setSearch] = useState('');
//   const [showSearch, setShowSearch] = useState(false);
//   const [favouriteItems, setFavouriteItems] = useState({});
//   const [gameCart, setGameCart] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();
//   // const [itemPrice, getItemPrice] = useState('')
//   // const [isLoggedIn, setIsLoggedIn] = useState(false)

//   // Utility to check login status (assuming token)
//   const isLoggedIn = () => !!localStorage.getItem('token'); 

  

//   // Axios instance with auth header
//   // const axiosWithAuth = () => {
//   //   const token = localStorage.getItem('token');
//   //     return axios.create({
//   //       baseURL: 'http://localhost:8000/api/',
//   //       headers: {
//   //         Authorization: `Bearer ${token}`
//   //       }
//   //     });
//   //   };

//   const login = async (credentials) => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/login/', credentials);
      
//       const token = response.data.access;
//       localStorage.setItem('token', token);
//       Cookies.set('token', token, { expires: 7 }); // optional, for persistence
  
//       toast.success('Login successful!');
//       navigate('/'); // or wherever you want to redirect
//     } catch (error) {
//       console.error('Login failed:', error);
//       toast.error('Login failed!');
//     }
//   };
  
//   // const axiosWithAuth = () => {
//   //   // const token = Cookies.get('token');  // Get token from cookies
//   //   const token = localStorage.getItem('token');
//   //   // console.log('Token retrieved in axiosWithAuth:', token);
//   //   if (!token) {
//   //     throw new Error('No token found');
//   //   }
  
//   //   return axios.create({
//   //     baseURL: 'http://localhost:8000/api/',
//   //     headers: {
//   //       Authorization: `Bearer ${token}`,
//   //     }
//   //   });
    
//   // };


//   const getGames = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/api/game/`);
//       setGames(response.data);
//     } catch (error) {
//       console.error('Error fetching games:', error);
//     }
//   };

//   // const getGameCart = async () => {
//   //   if (!isLoggedIn()) return;
//   //   try {
//   //     const response = await axiosWithAuth.get(`/gamecart/`);
//   //     setGameCart(response.data);

//   //     const newFavourites = {};
//   //     response.data.forEach((item) => {
//   //       newFavourites[item.game_id] = item.quantity;
//   //     });
//   //     setFavouriteItems(newFavourites);
//   //   } catch (error) {
//   //     console.error('Error fetching game cart:', error);
//   //   }
//   // };

//   const getGameCarts = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       // console.log("Using token:", token);
  
//       const response = await fetch('http://localhost:8000/api/gamecart/', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
  
//       // console.log("Response status:", response.status);
//       // console.log(response.token)
  
//       if (response.status === 401) {
//         console.warn("Unauthorized - redirecting to login.");
//         navigate('/')
//         return;
//       }
  
//       const data = await response.json();
//       // console.log("Game cart data:", data.data);
//       setGameCart(data.data);
  
//       const newFavourites = {};
//       data.data.forEach((item) => {
//         newFavourites[item.game_id] = item.quantity;
//       });
  
//       setFavouriteItems(newFavourites);
  
//       // console.log("Game cart:", data.data);
//     } catch (error) {
//       console.error("Error fetching game cart:", error);
//     }
//   };
  
//   // const getGameCart = async () => {
//   //   const token = localStorage.getItem('token'); // Retrieve token from localStorage or cookies
  
//   //   if (!token) {
//   //     console.log('No token found, redirecting to login');
//   //     navigate('/login');
//   //     return;
//   //   }
  
//   //   try {
//   //     const response = await axiosWithAuth('/gamecart/', {
//   //       method: 'GET',
//   //       headers: {
//   //         'Authorization': `Bearer ${token}`,
//   //       },
//   //     });
  
//   //     console.log('Game cart data:', response.data);
//   //     return response.data;
//   //   } catch (error) {
//   //     console.error('Error fetching game cart:', error);
//   //     if (error.response && error.response.status === 401) {
//   //       // Redirect to login if unauthorized
//   //       console.log('Unauthorized - redirecting to login');
//   //       navigate('/login');
//   //     }
//   //   }
//   // };

//   // const getGameCart = async (gameId = "") => {
//   //   if (!isLoggedIn()) return;
  
//   //   try {
//   //     const url = gameId
//   //       ? `http://localhost:8000/api/gamecart/?game_id=${gameId}`
//   //       : `http://localhost:8000/api/gamecart/`;
  
//   //     const response = await axiosWithAuth().get(url);
  
//   //     const cartArray = Array.isArray(response.data) ? response.data : [];
//   //     setGameCart(cartArray);
  
//   //     const newFavourites = {};
//   //     cartArray.forEach((item) => {
//   //       newFavourites[item.game_id] = item.quantity;
//   //     });
//   //     setFavouriteItems(newFavourites);
//   //   } catch (error) {
//   //     if (error.response) {
//   //       // Server responded with an error
//   //       if (error.response.status === 401) {
//   //         console.error('Unauthorized: Token might be expired or invalid');
//   //         // Optionally handle token refresh or redirect to login
//   //       } else {
//   //         console.error('Error fetching game cart:', error.response.data);
//   //       }
//   //     } else if (error.request) {
//   //       // No response received from the server
//   //       console.error('No response received:', error.request);
//   //     } else {
//   //       // Something else went wrong
//   //       console.error('Request setup error:', error.message);
//   //     }
//   //   }
//   // };

//   const decodeToken = (token) => {
//   try {
//     return jwtDecode(token);
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// };

// const isTokenExpired = (token) => {
//   const decoded = decodeToken(token);

//   if (!decoded) return true; // If token is invalid, treat as expired

//   const expiryTime = decoded.exp * 1000; // JWT expiry time is in seconds, convert to milliseconds
//   return Date.now() > expiryTime;
  
// };

// // Check if the token is valid or expired
// const refreshTokenIfNeeded = async () => {
//   const token = localStorage.getItem('access_token');
  
//   if (token && isTokenExpired(token)) {
//     // Token is expired, try to refresh it or redirect to login
//     const refreshToken = localStorage.getItem('refresh_token');
//     if (refreshToken) {
//       try {
//         const response = await axios.post('http://localhost:8000/api/refresh-token/', { refresh_token: refreshToken });
//         const { access_token } = response.data;
//         localStorage.setItem('access_token', access_token);  // Save new access token
//         console.log('Token refreshed successfully');
//         return access_token;
//       } catch (error) {
//         console.error("Failed to refresh token:", error);
//         // Optionally handle redirect or logout
//       }
//     } else {
//       console.log('No refresh token available, logging out...');
//       logout();
//     }
//   } else if (token) {
//     // Token is still valid
//     const decoded = decodeToken(token);
//     console.log('Token is valid:', decoded);
//   } else {
//     console.log('No token found, redirecting to login...');
//     logout();
//   }
// };

// // Call refreshTokenIfNeeded on app load
// useEffect(() => {
//   refreshTokenIfNeeded();
// }, []);

//   const getGameCart = async (gameId = "") => {
//     const token = localStorage.getItem('access_token');
//     if (!token) {
//       console.error("No token found. Please log in.");
//       return;
//     }
  
//     try {
//       const url = gameId
//         ? `http://localhost:8000/api/gamecart/?game_id=${gameId}`
//         : `http://localhost:8000/api/gamecart/`;
  
//       const response = await axiosWithAuth().get(url);  // Use axiosWithAuth to include the token
  
//       const cartArray = Array.isArray(response.data) ? response.data : [];
//       setGameCart(cartArray);
  
//       const newFavourites = {};
//       cartArray.forEach((item) => {
//         newFavourites[item.game_id] = item.quantity;
//       });
//       setFavouriteItems(newFavourites);
//     } catch (error) {
//       if (error.response) {
//         if (error.response.status === 401) {
//           console.error('Unauthorized: Token might be expired or invalid');
//           // You can also handle token refresh here or prompt the user to log in again
//         } else {
//           console.error('Error fetching game cart:', error.response.data);
//         }
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//       } else {
//         console.error('Request setup error:', error.message);
//       }
//     }
//   };

//   console.log("Sending token:", localStorage.getItem('token'));
  
//   useEffect(() => {
//     getGames();
//     getGameCart();
//   }, []);

//   const logout = async () => {
//     try {
//       // Optionally, make an API call to logout the user (if required)
//       // await axiosWithAuth().post('http://localhost:8000/api/logout/');
      
//       // Clear user data from localStorage and cookies
//       localStorage.removeItem('access_token');
//       localStorage.removeItem('user');
//       Cookies.remove('authToken');
  
//       // Redirect to login page after logout
//       navigate('/');
//       toast.success('Logged out successfully!');
//     } catch (error) {
//       console.error('Error logging out:', error);
//       toast.error('Logout failed, but session ended.');
//     }
//   };

//   const addToFavourte = async (itemId) => {
//     if (!isLoggedIn()) {
//       toast.warning('Please log in to add to favourites!');
//       navigate('/login');
//       return;
//     }
  
//     try {
//       const updatedFavourites = structuredClone(favouriteItems);
//       let quantity = updatedFavourites[itemId] ? updatedFavourites[itemId] + 1 : 1;
//       updatedFavourites[itemId] = quantity;
      
//       setFavouriteItems(updatedFavourites);
//       const itemPrice = getItemPrice(itemId);
//       const itemTotal = itemPrice * quantity;
  
//       await axios().post('http://localhost:8000/api/gamecart/', {
//         game_id: itemId,
//         quantity,
//         total_price: itemTotal
//       });
  
//       toast.success('Successfully added game to favourites!');
//     } catch (error) {
//       console.error('Error adding to favourites:', error);
//       toast.error('Failed to add game to favourites!');
//     }
//   };

//   const getFavouriteCount = () => {
//     return Object.values(favouriteItems).reduce((total, count) => total + count, 0);
//   };

//   const getItemPrice = (itemId) => {
//     const game = games.find((g) => g.id === Number(itemId));
//     return game ? game.price : 0;
//   };
  
//   const updateQuantity = async (itemId, quantity) => {
//     try {
//       console.log('Updating quantity for:', itemId);
//       const updatedFavourites = structuredClone(favouriteItems);
  
//       if (updatedFavourites[itemId] === undefined) {
//         console.warn(`Game with ID ${itemId} not found`);
//         return;
//       }
  
//       updatedFavourites[itemId] = quantity;
//       setFavouriteItems(updatedFavourites);
  
//       const itemPrice = getItemPrice(itemId);
//       const total_price = itemPrice * quantity;
  
//       const payload = {
//         game: Number(itemId), 
//         quantity,
//         total_price,
//       };
  
//       await axios().put(`http://localhost:8000/api/gamecart/${itemId}/`, payload);
  
//       toast.success('Favourite quantity updated!');
//     } catch (error) {
//       console.error('Error updating quantity:', error.message || error);
//       toast.error('Failed to update quantity.');
//     }
//   };


//   const value = {
//     games,
//     currency,
//     tax,
//     newsArticles,
//     alphabet,
//     setAlphabet,
//     showAlphabet,
//     setShowAlphabet,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     favouriteItems,
//     setFavouriteItems,
//     addToFavourte,
//     getFavouriteCount,
//     navigate,
//     updateQuantity,
//     gameCart,
//     setGameCart,
//     isLoggedIn,
//     logout,
//   };

//   return (
//     <GameContext.Provider value={value}>
//       {props.children}
//       <ToastContainer />
//     </GameContext.Provider>
//   );
// };

// export default GameContextProvider;


import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useNavigation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import * as jwtDecode from 'jwt-decode';
import axiosWithAuth from '../pages/axiosWithAuth';
import jwt_decode from "jwt-decode";

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const [games, setGames] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState({});
  const [gameCart, setGameCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

   const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );

    const [user, setUser] = useState(() => 
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    );

    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

  // Utility function to check if the user is logged in
  const isLoggedIn = () => !!localStorage.getItem('access_token');
  console.log("localStorage", localStorage)

  // Function to handle login
  // const login = async (credentials) => {
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/login/', credentials);
  
  //     // Log only the response data
  //     console.log('Login response:', response.data);
  
  //     const { access, refresh } = response.data;
  //     if (access && refresh) {
  //       Cookies.set('authToken', accessToken, { expires: 7 }); 
  //       localStorage.setItem('access_token', access);
  //       localStorage.setItem('refresh_token', refresh);

  //       console.log('Saved Access Token:', localStorage.getItem('access_token'));
  //       console.log('Saved Refresh Token:', localStorage.getItem('refresh_token'));

  //       toast.success('Login successful!');
  //       navigate('/');
  //     } else {
  //       console.error('Access token or refresh token is missing');
  //       toast.error('Login failed: Missing token data');
  //     }
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     toast.error('Login failed!');
  //   }
  // };

  // const login = async () => {
  //     try {
  //       const response = await axios.post('http://localhost:8000/api/login/', {
  //         email,
  //         password
  //       });
    
  //       // Log the full response from the backend for debugging purposes
  //       console.log("Full response from backend:", response);
    
  //       const data = response.data;
  //       console.log("response data: ", response.data)
    
  //       // Ensure the data contains the required fields
  //       if (!data || !data.token || !data.token.access || !data.user) {
  //         console.error("Login failed: Missing token or user data.");
  //         alert('Login failed: Missing token or user data.');
  //         return;
  //       }
    
  //       const accessToken = data.token.access; // Corrected token access path
  //       const user = data.user;
    
  //       // Save the access token in cookies and localStorage
  //       Cookies.set('authToken', accessToken, { expires: 7 });  // Token will expire in 7 days
  //       localStorage.setItem('token', accessToken);
  //       localStorage.setItem('user', JSON.stringify(user));
    
  //       // Success message
  //       toast.success('Logged in successfully!');
    
  //       // Redirect based on the user role
  //       if (user.role === 'admin') {
  //         navigate('/dashboard');
  //       } else {
  //         navigate('/');
  //       }
    
  //     } catch (error) {
  //       // Handle errors gracefully
  //       if (error.response) {
  //         console.error('Login failed:', error.response.data);
  //         toast.error("Invalid Email or Password");
  //       } else {
  //         console.error('Login error:', error.message);
  //         alert('An error occurred during login.');
  //       }
  //     }
  //   };

  const loginUser = async (email, password) => {
        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await response.json()
        console.log(data);

        if(response.status === 200){
            console.log("Logged In");
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data))
            history.push("/")
            swal.fire({
                title: "Login Successful",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })

        } else {    
            console.log(response.status);
            console.log("there was a server issue");
            swal.fire({
                title: "Username or passowrd does not exists",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }

    const token = localStorage.getItem('access_token');
if (!token) {
  console.log('No token found.');
  // Handle the case when the user is not logged in
}
   
  // document.cookie = `authToken=${access}; path=/; expires=Fri, 16 May 2025 10:13:48 GMT; SameSite=None; Secure`;


  // Fetch game data
  const getGames = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/game/');
      setGames(response.data);
    } catch (error) {
      console.error('Error fetching games:', error);
      setErrorMessage('Failed to fetch games');
    }
  };

  // Fetch user's game cart
  const getGameCart = async () => {
    if (!isLoggedIn()) return;

    try {
      const response = await axiosWithAuth().get('/gamecart/');
      setGameCart(response.data);
    } catch (error) {
      console.error('Error fetching game cart:', error);
      if (error.response?.status === 401) {
        navigate('/login');
        toast.error('Session expired. Please log in again.');
      }
    }
  };

  // Token handling logic: decode token and check expiry
  const decodeToken = (token) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  const isTokenExpired = (token) => {
    const decoded = decodeToken(token);
    if (!decoded) return true;
    const expiryTime = decoded.exp * 1000;
    return Date.now() > expiryTime;
  };

  const refreshTokenIfNeeded = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      console.log('No token found.');
      return;
    }

    if (isTokenExpired(token)) {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const response = await axios.post('http://localhost:8000/api/refresh-token/', { refresh_token: refreshToken });
          const { access_token } = response.data;
          localStorage.setItem('access_token', access_token);
          console.log('Token refreshed successfully');
        } catch (error) {
          console.error('Failed to refresh token:', error);
          logout();
        }
      } else {
        console.log('No refresh token available.');
        logout();
      }
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
    toast.success('Logged out successfully!');
  };

  // const token = localStorage.getItem('access_token');
  // console.log("Access token from localStorage:", token);

  // Function to handle adding items to favourites
  const addToFavourte = async (itemId) => {
    if (!isLoggedIn()) {
      toast.warning('Please log in to add to favourites!');
      navigate('/login');
      return;
    }

    try {
      const updatedFavourites = { ...favouriteItems };
      const quantity = updatedFavourites[itemId] ? updatedFavourites[itemId] + 1 : 1;
      updatedFavourites[itemId] = quantity;
      setFavouriteItems(updatedFavourites);

      const itemPrice = getItemPrice(itemId);
      const itemTotal = itemPrice * quantity;

      await axiosWithAuth().post('/gamecart/', { game_id: itemId, quantity, total_price: itemTotal });
      toast.success('Successfully added game to favourites!');
    } catch (error) {
      console.error('Error adding to favourites:', error);
      toast.error('Failed to add game to favourites!');
    }
  };

  // Helper to get item price
  const getItemPrice = (itemId) => {
    const game = games.find((g) => g.id === Number(itemId));
    return game ? game.price : 0;
  };

  // Function to update favourite quantity
  const updateQuantity = async (itemId, quantity) => {
    try {
      const updatedFavourites = { ...favouriteItems };
      updatedFavourites[itemId] = quantity;
      setFavouriteItems(updatedFavourites);

      const itemPrice = getItemPrice(itemId);
      const total_price = itemPrice * quantity;

      await axiosWithAuth().put(`/gamecart/${itemId}/`, { game: Number(itemId), quantity, total_price });
      toast.success('Favourite quantity updated!');
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error('Failed to update quantity.');
    }
  };

  useEffect(() => {
    getGames();
    if (isLoggedIn()) {
      refreshTokenIfNeeded();
      getGameCart();
    }
  }, []);

  // Provide context values to the app
  const value = {
    games,
    favouriteItems,
    addToFavourte,
    getItemPrice,
    updateQuantity,
    gameCart,
    logout,
    isLoggedIn,
    login,
  };

  return (
    <GameContext.Provider value={value}>
      {props.children}
      <ToastContainer />
    </GameContext.Provider>
  );
};

export default GameContextProvider;









// import React, { useContext, useEffect, useState } from 'react';
// import { createContext } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// export const GameContext = createContext();

// const GameContextProvider = (props) => {
//     const currency = '$'
//     const [alphabet, setAlphabet] = useState('');
//     const [games, setGames] =useState([]);
//     const [showAlphabet, setShowAlphabet] = useState(false);
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [favouriteItems, setFavouriteItems] = useState({});
//     const [gameCart, setGameCart] = useState([])
//     const navigate = useNavigate();

//     const getgames = async () => {
//       const response = await axios.get(`http://localhost:8000/api/game/`);
//       setGames(response.data);
//     };

//     const getgamecart = async () => {
//       const response = await axios.get(`http://localhost:8000/api/gamecart/`)
//       setGameCart(response.data);
//     };
    
//     useEffect(() => {
//       getgames(), getgamecart;
//     }, [])

//       const addToFavourte = async (itemId) => {
//         let favouriteData = structuredClone(favouriteItems);
    
//         if (favouriteData[itemId]) {
//             favouriteData[itemId] += 1;
//         } else {
//             favouriteData[itemId] = 1;
//         }
    
//         setGameCart(favouriteData);
//         toast.success('Game added to favourites!');
//     };

//       const getFavouriteCount = () => {
//         let totalCount = 0;
//         // for (const itemId in favouriteItems) {
//         //     totalCount += favouriteItems[itemId];
//         // }
//         for(const items in favouriteItems){
//           for( const item in favouriteItems [items]){
//               try {
//                   if(favouriteItems[items] [item] > 0){
//                   totalCount += favouriteItems[items][item];
//               }} catch (error) {
                  
//               }
//             }
//           }
//         return totalCount;
//     };

//     const updateQuantity = async (itemId, quantity) => {
//       let favouriteData = structuredClone(favouriteItems);
//       favouriteData[itemId] = quantity;
//       setFavouriteItems(favouriteData);
//   };
    
//     const value = { 
//       games, currency, 
//       alphabet, setAlphabet, showAlphabet, setShowAlphabet, search, setSearch, showSearch, setShowSearch,
//       favouriteItems, setFavouriteItems, addToFavourte, getFavouriteCount, navigate, updateQuantity,
//       gameCart, setgmae
//     }

//   return (
//     <div>
//       <GameContext.Provider value={value}>
//         {props.children}
//       </GameContext.Provider>
//     </div>
//   )
// }

// export default GameContextProvider;




// import React, { useContext, useState } from 'react';
// import { games } from '../assets/assets';
// import { createContext } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// export const GameContext = createContext();

// const GameContextProvider = (props) => {
//     const currency = '$';
//     const [alphabet, setAlphabet] = useState('');
//     const [showAlphabet, setShowAlphabet] = useState(false);
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [favouriteItems, setFavouriteItems] = useState([]); // Changed to an array
//     const navigate = useNavigate();

//     const addToFavourte = async (itemId, lavels) => {
//         if (!lavels) {
//             toast.error('Select Game Lavel');
//             return;
//         }

//         let favouriteData = [...favouriteItems];  // Spread to clone the array

//         const existingItem = favouriteData.find(item => item._id === itemId && item.size === lavels);

//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else {
//             favouriteData.push({ _id: itemId, size: lavels, quantity: 1 });
//         }

//         setFavouriteItems(favouriteData);
//     };

//     const getFavouriteCount = () => {
//         let totalCount = 0;
//         favouriteItems.forEach(item => {
//             totalCount += item.quantity;
//         });
//         return totalCount;
//     };

//     const value = { 
//       games, 
//       currency, 
//       alphabet, 
//       setAlphabet, 
//       showAlphabet, 
//       setShowAlphabet, 
//       search, 
//       setSearch, 
//       showSearch, 
//       setShowSearch,
//       favouriteItems, 
//       setFavouriteItems, 
//       addToFavourte, 
//       getFavouriteCount, 
//       navigate
//     };

//     return (
//         <div>
//             <GameContext.Provider value={value}>
//                 {props.children}
//             </GameContext.Provider>
//         </div>
//     );
// };

// export default GameContextProvider;



// import React, { createContext, useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import axiosWithAuth from '../pages/axiosWithAuth';

// export const GameContext = createContext();

// const GameContextProvider = (props) => {
//   const currency = '$';
//   const tax = 13;
//   const [alphabet, setAlphabet] = useState('');
//   const [games, setGames] = useState([]);
//   const [showAlphabet, setShowAlphabet] = useState(false);
//   const [search, setSearch] = useState('');
//   const [showSearch, setShowSearch] = useState(false);
//   const [favouriteItems, setFavouriteItems] = useState({});
//   const [gameCart, setGameCart] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0); // Added missing state
//   const navigate = useNavigate();

//   // Check if user is logged in
//   const isLoggedIn = () => !!localStorage.getItem('token');

//   // Login function
//   const login = async (credentials) => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/login/', credentials);
//       const token = response.data.access;
//       localStorage.setItem('token', token);
//       Cookies.set('token', token, { expires: 7 });
//       toast.success('Login successful!');
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error);
//       toast.error('Login failed!');
//     }
//   };

//   // Fetch all games
//   const getGames = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/game/');
//       setGames(response.data);
//     } catch (error) {
//       console.error('Error fetching games:', error);
//     }
//   };

//   // Fetch game cart
//   const getGameCart = async () => {
//     if (!isLoggedIn()) {
//       navigate('/login');
//       return;
//     }
//     try {
//       const response = await axiosWithAuth().get('http://localhost:8000/api/gamecart/');
//       const cartData = response.data || [];
//       setGameCart(cartData);

//       const newFavourites = {};
//       cartData.forEach((item) => {
//         newFavourites[item.game_id] = item.quantity;
//       });
//       setFavouriteItems(newFavourites);
//     } catch (error) {
//       console.error('Error fetching game cart:', error);
//       if (error.response?.status === 401) {
//         toast.error('Session expired. Please log in again.');
//         navigate('/login');
//       }
//     }
//   };

//   // Add item to favorites
//   const addToFavourte = async (itemId) => {
//     if (!isLoggedIn()) {
//       toast.warning('Please log in to add to favourites!');
//       navigate('/login');
//       return;
//     }

//     try {
//       const updatedFavourites = { ...favouriteItems };
//       let quantity = updatedFavourites[itemId] ? updatedFavourites[itemId] + 1 : 1;
//       updatedFavourites[itemId] = quantity;
//       setFavouriteItems(updatedFavourites);

//       const itemPrice = getItemPrice(itemId);
//       const itemTotal = itemPrice * quantity;

//       await axiosWithAuth().post('http://localhost:8000/api/gamecart/', {
//         game_id: itemId,
//         quantity,
//         total_price: itemTotal,
//       });

//       setTotalAmount((prevTotal) => prevTotal + itemPrice);
//       toast.success('Successfully added game to favourites!');
//       await getGameCart(); // Refresh cart to sync with backend
//     } catch (error) {
//       console.error('Error adding to favourites:', error);
//       toast.error('Failed to add game to favourites!');
//     }
//   };

//   // Remove item from favorites
//   const removeFromFavourite = async (itemId) => {
//     if (!isLoggedIn()) {
//       toast.warning('Please log in to remove from favourites!');
//       navigate('/login');
//       return;
//     }

//     try {
//       const updatedFavourites = { ...favouriteItems };
//       if (!updatedFavourites[itemId]) {
//         toast.warning('Item not in favourites!');
//         return;
//       }

//       const itemPrice = getItemPrice(itemId);
//       const quantity = updatedFavourites[itemId];
//       delete updatedFavourites[itemId];
//       setFavouriteItems(updatedFavourites);

//       await axiosWithAuth().delete(`http://localhost:8000/api/gamecart/${itemId}/`);
//       setTotalAmount((prevTotal) => prevTotal - itemPrice * quantity);
//       toast.success('Successfully removed game from favourites!');
//       await getGameCart(); // Refresh cart to sync with backend
//     } catch (error) {
//       console.error('Error removing from favourites:', error);
//       toast.error('Failed to remove game from favourites!');
//     }
//   };

//   // Update item quantity
//   const updateQuantity = async (itemId, quantity) => {
//     if (!isLoggedIn()) {
//       toast.warning('Please log in to update favourites!');
//       navigate('/login');
//       return;
//     }

//     try {
//       if (quantity <= 0) {
//         await removeFromFavourite(itemId);
//         return;
//       }

//       const updatedFavourites = { ...favouriteItems };
//       if (!updatedFavourites[itemId]) {
//         toast.warning('Item not in favourites!');
//         return;
//       }

//       updatedFavourites[itemId] = quantity;
//       setFavouriteItems(updatedFavourites);

//       const itemPrice = getItemPrice(itemId);
//       const total_price = itemPrice * quantity;

//       await axiosWithAuth().put(`http://localhost:8000/api/gamecart/${itemId}/`, {
//         game_id: Number(itemId),
//         quantity,
//         total_price,
//       });

//       setTotalAmount((prevTotal) => {
//         const oldQuantity = favouriteItems[itemId];
//         return prevTotal + itemPrice * (quantity - oldQuantity);
//       });

//       toast.success('Favourite quantity updated!');
//       await getGameCart(); // Refresh cart to sync with backend
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//       toast.error('Failed to update quantity.');
//     }
//   };

//   // Get item price
//   const getItemPrice = (itemId) => {
//     const game = games.find((g) => g.id === Number(itemId));
//     return game ? game.price : 0;
//   };

//   // Get favorite count
//   const getFavouriteCount = () => {
//     return Object.values(favouriteItems).reduce((total, count) => total + count, 0);
//   };

//   useEffect(() => {
//     getGames();
//     if (isLoggedIn()) {
//       getGameCart();
//     }
//   }, []);

//   const value = {
//     games,
//     currency,
//     tax,
//     alphabet,
//     setAlphabet,
//     showAlphabet,
//     setShowAlphabet,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     favouriteItems,
//     setFavouriteItems,
//     addToFavourte,
//     removeFromFavourite,
//     getFavouriteCount,
//     updateQuantity,
//     gameCart,
//     setGameCart,
//     isLoggedIn,
//     login,
//     totalAmount,
//   };

//   return (
//     <GameContext.Provider value={value}>
//       {props.children}
//       <ToastContainer />
//     </GameContext.Provider>
//   );
// };

// export default GameContextProvider;