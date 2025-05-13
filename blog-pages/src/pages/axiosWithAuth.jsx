import axios from 'axios';
import React from 'react'

// const axiosWithAuth = () => {

//     const token = localStorage.getItem('token');
//     return axios.create({
//         baseURL: 'http://localhost:8000/api',
//         headers: {
//         Authorization:token ? `Bearer ${token}` :"", 
//         'Content-Type': 'application/json',
//         },
//     });
    

// //   return (
// //     <div>
      
// //     </div>
// //   )
// }

// export default axiosWithAuth

const axiosWithAuth = () => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error("No access token found. User might not be logged in.");
  }

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`, // Attach token in the header
    },
  });
};

export default axiosWithAuth;

// // import React from 'react'

// // const axiosWithAuth = async (url, options = {}) => {

// //         const token = localStorage.getItem('token');
      
// //         const defaultHeaders = {
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${token}`,
// //         };
      
// //         const config = {
// //           ...options,
// //           headers: {
// //             ...defaultHeaders,
// //             ...(options.headers || {}),
// //           },
// //         };
      
// //         const baseURL = 'http://localhost:8000/api/';
// //         const fullURL = `${baseURL}${url}`;
      
// //         try {
// //           const response = await fetch(fullURL, config);
      
// //           // Optionally handle errors or response parsing here
// //           if (!response.ok) {
// //             throw new Error(`HTTP error! status: ${response.status}`);
// //           }
      
// //           return response.json(); // or response.text(), etc., depending on your API
// //         } catch (error) {
// //           console.error('Fetch error:', error);
// //           throw error;
// //         }
      
// // //   return (
// // //     <div>
      
// // //     </div>
// // //   )
// // };

// // export default axiosWithAuth


// // const axiosWithAuth = async (url, options = {}) => {
// //   // Get token from localStorage if available (it's not needed for login)
// //   const token = localStorage.getItem('token'); 

// //   // Set up the headers, excluding Authorization for login
// //   const defaultHeaders = {
// //     'Content-Type': 'application/json',  // Ensure the content type is JSON
// //     // Authorization: `Bearer ${token}`, // No token needed for login
// //   };

// //   const config = {
// //     ...options,
// //     headers: {
// //       ...defaultHeaders,
// //       ...(options.headers || {}),
// //     },
// //   };

// //   const baseURL = 'http://localhost:8000/api/';  // Base URL for the API
// //   const fullURL = `${baseURL.replace(/\/$/, '')}${url}`;

// //   console.log('Full URL:', fullURL);  // Debugging the full URL

// //   try {
// //     // Making the actual API request using fetch
// //     const response = await fetch(fullURL, config);
// //     if (!response.ok) {
// //       throw new Error(`HTTP error! status: ${response.status}`);
// //     }
    
// //     return response.json();  // Return parsed JSON response
// //   } catch (error) {
// //     console.error('Fetch error:', error);
// //     throw error;  // Rethrow the error
// //   }
// // };

// // export default axiosWithAuth;




// import React from 'react';
// import { jwtDecode } from 'jwt-decode';
// import dayjs from 'dayjs';



// const axiosWithAuth = () => {
//   return (
//     <div>
      
//     </div>
//   )
// };




// export default axiosWithAuth
