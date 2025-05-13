// import React from 'react'
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [forgotPassword, setForgotPassword] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigator = useNavigate();

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login submitted:", { email, password });
//     // You would normally send the data to your backend here
//   };

//   const handleResetPasswordSubmit = (e) => {
//     e.preventDefault();
//     console.log("Password reset email sent to:", resetEmail);
//     // You would normally call an API to reset the password here
//     setResetEmail('');
//     setForgotPassword(false);  // Hide reset form after submission
//   };

//   const handleLogin = async(e) => {
//     e.preventDefault();
//     try {
//       const response = await SiAxios.post('https:localhost:8000/login/',{username, password}); 
//       const {access, is_admin} = response.data;

//       // Store JWT token in localStorage
//       localStorage.setItem('token', access);

//       // Redirect to the dashboard or home page
//       // if (is_admin) {
//       //   navigator('/admin/dashboard');
//       // } else {
//       //   navigator('/dashboard');
//       // }

//       // Check if the user is admin and redirect accordingly
//       if (is_admin) {
//         navigator('/admin/dashboard');
//       } else {
//         navigator('/dashboard');
//       }
    

//     } catch (error) {
//       setError("Invalid username or password");
      
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

//       {forgotPassword ? (
//         <form onSubmit={handleResetPasswordSubmit} className="bg-white p-8 rounded-lg shadow-md">
//           <div className="mb-4">
//             <label htmlFor="resetEmail" className="block text-xl font-semibold text-gray-800 mb-2">
//               Enter your email to reset password
//             </label>
//             <input
//               type="email"
//               id="resetEmail"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               required
//               className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg text-gray-700 focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-xl"
//             >
//               Reset Password
//             </button>
//           </div>
//         </form>
//       ) : (
//         <form onSubmit={handleLoginSubmit} className="bg-white p-8 rounded-lg shadow-md">
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-xl font-semibold text-gray-800 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg text-gray-700 focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-xl font-semibold text-gray-800 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg text-gray-700 focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           <div className="text-center mb-4">
//             <button
//               onClick={() => navigator('/')}
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-xl"
//             >
//               Login
//             </button>
//           </div>

//           <div className="text-center flex flex-col md:flex-row gap-2">
//             <button
//               type="button"
//               onClick={() => setForgotPassword(true)}
//               className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer"
//             >
//               Forgot Password?
//             </button>
//             <button
//               type="button"
//               onClick={() => navigator('/signup')}
//               className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer">
//               Don't have an account? Register here
//               </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }

// export default Login


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
// import './Login.css';

const Login = () => {
  const {login} = useContext(GameContext)
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  // const handleLogin = (email, password) => {
  //   axios.post('http://localhost:8000/api/login/', { email, password })
  //     .then(response => {
  //       // Log only specific properties of the response, not the entire object
  //       console.log("Login successful:", response.data.user);
  //       console.log("Token:", response.data.token);
  
  //       // Check if the user exists
  //       if (response.data && response.data.user) {
  //         const { user, token } = response.data;
  //         console.log("User role:", user.role);  // Log just the role
  //       }
  //     })
  //     .catch(error => {
  //       if (error.response) {
  //         console.error("Login failed:", error.response.data);
  //       } else {
  //         console.error("Error:", error.message);
  //       }
  //     });
  // };


  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to reset the password (adjust API endpoint accordingly)
      const response = await axios.post('http://localhost:8000/api/changepassword/', {
        email: resetEmail
      });
      
      // alert('password forget successful!');
      console.log("Password reset email sent to:", resetEmail);
      alert("Password reset email sent!");
      setResetEmail('');
      setForgotPassword(false); // Hide reset form after submission
    } catch (error) {
      alert("Failed to send reset email.");
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/login/', {
  //       // Cookies.set('authToken', token, { expires: 7 }); // Token will expire in 7 days
  //       email,
  //       password
  //     });
  
  //     // console.log("Full response from backend:", response);
  
  //     const data = response.data?.data;
  
  //     if (!data || !data.token || !data.token.access || !data.user) {
  //       console.error("Login failed: Missing token or user data.");
  //       alert('Login failed: Missing token or user data.');
  //       return;
  //     }
  
  //     const accessToken = data.token.access.access; // ← access is nested here
  //     const user = data.user;
  
  //     // Save token in cookies and localStorage
  //     Cookies.set('authToken', accessToken, { expires: 7 });
  //     localStorage.setItem('token', accessToken);
  //     localStorage.setItem('user', JSON.stringify(user));
  //     toast.success('Logged in successfully!');
  
  //     // alert('Login successful!');
  //     // console.log("User:", user);
  //     // console.log("Role:", user.role);
  
  //     // Navigate based on user role
  //     if (user.role === 'admin') {
  //       navigate('/dashboard');
  //     } else {
  //       navigate('/');
  //     }
  
  //   } catch (error) {
  //     if (error.response) {
  //       console.error('Login failed:', error.response.data);
  //       toast.error("Invalid Email or Password")
  //       // alert(`Login failed: ${JSON.stringify(error.response.data)}`);
  //     } else {
  //       console.error('Login error:', error.message);
  //       alert('An error occurred during login.');
  //     }
  //   }
  // };

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/login/', {
  //       email,
  //       password
  //     });
  
  //     // Log the full response from the backend for debugging purposes
  //     console.log("Full response from backend:", response);
  
  //     const data = response.data;
  
  //     // Ensure the data contains the required fields
  //     if (!data || !data.token || !data.token.access || !data.user) {
  //       console.error("Login failed: Missing token or user data.");
  //       alert('Login failed: Missing token or user data.');
  //       return;
  //     }
  
  //     const accessToken = data.token.access; // Corrected token access path
  //     const user = data.user;
  
  //     // Save the access token in cookies and localStorage
  //     Cookies.set('authToken', accessToken, { expires: 7 });  // Token will expire in 7 days
  //     localStorage.setItem('token', accessToken);
  //     localStorage.setItem('user', JSON.stringify(user));
  
  //     // Success message
  //     toast.success('Logged in successfully!');
  
  //     // Redirect based on the user role
  //     if (user.role === 'admin') {
  //       navigate('/dashboard');
  //     } else {
  //       navigate('/');
  //     }
  
  //   } catch (error) {
  //     // Handle errors gracefully
  //     if (error.response) {
  //       console.error('Login failed:', error.response.data);
  //       toast.error("Invalid Email or Password");
  //     } else {
  //       console.error('Login error:', error.message);
  //       alert('An error occurred during login.');
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const tokenLocal = localStorage.getItem('token');
  //   const tokenCookie = Cookies.get('token');

  //   console.log('Token in LocalStorage:', tokenLocal);
  //   console.log('Token in Cookies:', tokenCookie);

  //   // Case 1: Both tokens are missing
  //   if (!tokenLocal && !tokenCookie) {
  //     // navigate('/home-gape'); 
  //     console.warn('Not Token Found');
  //   }
  //   else if (tokenLocal && tokenCookie && tokenLocal === tokenCookie) {
  //     // navigate('/use-page');
  //     console.warn('Token Founded');
  //   }
  //   else {
  //     // navigate('/login')
  //     console.warn('Token mismatch or partial presence.');
  //     // Optional: log out user or show message
  //   }
  // }, []);

  // console.log("Token in LocalStorage:", localStorage.getItem('token'));
  // console.log("Token in Cookies:", Cookies.get('authToken'));
  
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    email.length > 0 && loginUser(email, password)

    console.log(email)
    console.log(password)
   
  }

  return (
    <>
    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl max-md:max-w-md w-full">
        <div>
          <h2 className="lg:text-5xl text-3xl font-bold lg:leading-[57px] text-slate-900">
            Seamless Login for Exclusive Access
          </h2>
          <p className="text-sm mt-6 text-slate-500 leading-relaxed">Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.</p>
          <p className="text-sm mt-12 text-slate-500">Don't have an account <button       type="button"
            onClick={() => navigate('/signup')} className="text-blue-600 font-medium hover:underline ml-1">Register here</button></p>
        </div>

        <form className="max-w-md md:ml-auto w-full">
          <h3 className="text-slate-900 lg:text-3xl text-2xl font-bold mb-8">
            Sign in
          </h3>
          {!forgotPassword ? (
          <div>
            <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            
            <div>
              <label className='text-sm text-slate-800 font-medium mb-2 block'>Email</label>
              <input name="email" 
              id="email" 
              type="email" 
              // value={email} 
              // onChange={e => setEmail(e.target.value)} 
              required 
              className="bg-slate-100 w-full text-sm text-slate-800 px-4 py-3 rounded-md outline-none border focus:border-blue-600 focus:bg-transparent" placeholder="Enter Email" />
            </div>
            <div>
              <label className='text-sm text-slate-800 font-medium mb-2 block'>Password</label>
              <input name="password" 
                id="password"
                type="password"
                // value={password}
                // onChange={e => setPassword(e.target.value)} 
                required 
                className="bg-slate-100 w-full text-sm text-slate-800 px-4 py-3 rounded-md outline-none border focus:border-blue-600 focus:bg-transparent" placeholder="Enter Password" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-500">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <button type="button"
                  onClick={() => setForgotPassword(true)} className="text-blue-600 hover:text-blue-500 font-medium">
                  Forgot your password?
                </button>
              </div>
            </div>
          </div>

          <div className="!mt-12">
            <button type="button"
            // onClick={login}
             className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Log in
            </button>
          </div>
          </form>
          <div className="my-4 flex items-center gap-4">
            <hr className="w-full border-slate-300" />
            <p className="text-sm text-slate-800 text-center">or</p>
            <hr className="w-full border-slate-300" />
          </div>

          <div className="space-x-6 flex justify-center">
            <button type="button"
              className="border-none outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 512 512">
                <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z" data-original="#fbbd00" />
                <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z" data-original="#0f9d58" />
                <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z" data-original="#31aa52" />
                <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z" data-original="#3c79e6" />
                <path fill="#cf2d48" d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" data-original="#cf2d48" />
                <path fill="#eb4132" d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z" data-original="#eb4132" />
              </svg>
            </button>
            <button type="button"
              className="border-none outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 512 512">
                <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" data-original="#1877f2" />
                <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" data-original="#ffffff" />
              </svg>
            </button>
            <button type="button"
              className="border-none outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 22.773 22.773">
                <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" data-original="#000000"></path>
              </svg>
            </button>
          </div>
          </div>
          ) : (
            <div>
              <div className="mb-4">
                <label htmlFor="reset-email" className="block text-sm font-medium text-gray-600">Enter your email for password reset</label>
                <input
                  id="reset-email"
                  type="email"
                  value={resetEmail}
                  onChange={e => setResetEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
  
              <button
                onClick={handleResetPasswordSubmit}
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Reset Email
              </button>
  
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setForgotPassword(false)}
                  className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                >
                  Back to Login
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
      
    </div>
    

    {/* <div className="flex justify-center items-center min-h-screen bg-gray-100 shadow">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className='text-2xl font-semibold text-center mb-6 text-black'>WELL COME BACK</h1>
        <h2 className="text-2xl font-semibold text-center mb-6 text-black">Login</h2>

        {!forgotPassword ? (
          <div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>

            <div className='flex flex-col md:flex-row'>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setForgotPassword(true)}
                  className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                >
                  Back to Home
                </button>
              </div>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => navigate('/signup')}
                  className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                >
                  Don't have an account? Register here
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <label htmlFor="reset-email" className="block text-sm font-medium text-gray-600">Enter your email for password reset</label>
              <input
                id="reset-email"
                type="email"
                value={resetEmail}
                onChange={e => setResetEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <button
              onClick={handleResetPasswordSubmit}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Reset Email
            </button>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setForgotPassword(false)}
                className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
              >
                Back to Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div> */}
    </>
  );
};

export default Login;


// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [forgotPassword, setForgotPassword] = useState(false);
//   const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleResetPasswordSubmit = (e) => {
//          e.preventDefault();
//          console.log("Password reset email sent to:", resetEmail);
//          // You would normally call an API to reset the password here
//          setResetEmail('');
//          setForgotPassword(false);  // Hide reset form after submission
//        };

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('http://localhost:8000/api/login/', {
//                 email, password
//             });
//             const { access, user } = response.data;

//             localStorage.setItem('token', access);
//             localStorage.setItem('user', JSON.stringify(user));

//             if (user.role === 'admin') {
//                 navigate('/dashboard');
//             } else {
//                 navigate('/');
//             }
//         } catch (err) {
//             alert('Login failed');
//         }
//     };

//   return (
//     <div>
//       <div>
//             <h2>Login</h2>
//             <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
//             <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//         <div>
//         <button
//                type="button"
//                onClick={() => setForgotPassword(true)}
//                className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer"
//              >
//                Forgot Password?
//              </button>
        
//         <button
//               type="button"
//               onClick={() => navigate('/signup')}
//               className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer">
//               Don't have an account? Register here
//               </button>
//               </div>
//     </div>
//   )
// }

// export default Login
