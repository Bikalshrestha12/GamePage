// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const Container = styled.div`
//   @keyframes pulse3D {
//     0% {
//       transform: translateZ(0);
//       opacity: 0.5;
//     }
//     50% {
//       transform: translateZ(50px);
//       opacity: 0.8;
//     }
//     100% {
//       transform: translateZ(0);
//       opacity: 0.5;
//     }
//   }

//   animation: pulse3D 4s infinite ease-in-out;
// `;
  

// const SignUp = () => {
//     const Navigate = useNavigate()
    
    
//   return (
    
//     <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
//       {/* 3D Animated Background */}
      
//       <div className="absolute inset-0 z-0">
//         <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500">
//           <div className="absolute w-full h-full bg-gradient-to-tl from-teal-400 via-green-500 to-blue-600 opacity-40">
//           <Container><div className="absolute w-full h-full bg-gradient-to-b from-purple-600 to-indigo-700 opacity-60 animate-pulse"></div></Container>
//           </div>
//         </div>
//       </div>
      
//       {/* Signup Form */}
//       <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
//         <form method="POST">
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             onClick={() => Navigate('/login')}
//             className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <button onClick={() => Navigate('/login')} className="text-blue-600 hover:underline cursor-pointer">
//             Log in
//           </button>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default SignUp






// import React, { useState } from 'react';
// import { useForm, Controller } from "react-hook-form";




// export const FormValues = {
//   FirstName: "",
//   MiddleName: "",
//   LastName: "",
//   RadioGroup: "female",
//   Email: "",
//   Password: "",
//   VerifyPassword: "",
// };

// const defaultValues = {
//   FirstName: "",
//   MiddleName: "",
//   LastName: "",
//   RadioGroup: "female",
//   Email: "",
//   Password: "",
//   VerifyPassword: "",
// };

// const SignUp = () => {
//   const { handleSubmit, register, reset, control, formState: { errors }, watch } = useForm({
//     defaultValues,
//   });

//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [verifyPasswordVisible, setVerifyPasswordVisible] = useState(false);
//   const password = watch("Password"); // Watch password field to validate against

//   const onSubmit = (data) => {
//       // Display form data in a formatted JSON style.
//     try {
//         console.log(data)
//     } catch (error) {
        
//     }
//   };

//   return (
    
//       <div className="flex justify-center items-center min-h-screen bg-gray-200">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          
//           {/* First Name */}
//           <div className="mb-4">
//             <label className="block text-sm font-semibold text-gray-700">First Name</label>
//             <input
//               {...register("FirstName", { required: "First Name is required" })}
//               className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.FirstName && <p className="text-red-500 text-xs mt-1">{errors.FirstName.message}</p>}
//           </div>

//           {/* Other fields */}

//           {/* Password */}
//           <div className="mb-4">
//             <label className="block text-sm font-semibold text-gray-700">Password</label>
//             <input
//               {...register("Password", { required: "Password is required" })}
//               type={passwordVisible ? "text" : "password"}
//               className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               onClick={() => setPasswordVisible(!passwordVisible)}
//               className="text-sm text-blue-600 mt-1"
//             >
//               {passwordVisible ? "Hide" : "Show"} Password
//             </button>
//             {errors.Password && <p className="text-red-500 text-xs mt-1">{errors.Password.message}</p>}
//           </div>

//           {/* Verify Password */}
//           <div className="mb-4">
//             <label className="block text-sm font-semibold text-gray-700">Verify Password</label>
//             <input
//               {...register("VerifyPassword", {
//                 required: "Verify Password is required",
//                 validate: value =>
//                   value === password || "Passwords do not match",
//               })}
//               type={verifyPasswordVisible ? "text" : "password"}
//               className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               onClick={() => setVerifyPasswordVisible(!verifyPasswordVisible)}
//               className="text-sm text-blue-600 mt-1"
//             >
//               {verifyPasswordVisible ? "Hide" : "Show"} Verify Password
//             </button>
//             {errors.VerifyPassword && <p className="text-red-500 text-xs mt-1">{errors.VerifyPassword.message}</p>}
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-between">
//             <button
//               type="button"
//               onClick={() => reset()}
//               className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400"
//             >
//               Reset
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
    
//   );
// };

// export default SignUp;




import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
    tc: false
  });

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    // Basic client-side validation
    if (formData.password !== formData.password2) {
      alert('Passwords do not match');
      return;
    }

    if (!formData.tc) {
      alert('You must accept the terms and conditions');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register/', formData);
      alert('Registration successful!');
      navigate('/login');  // Redirect to the login page after successful registration
    } catch (err) {
      console.error(err.response?.data || err);
      alert('Signup failed');
    }
  };

  return (
    <>
    {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullname}
              onChange={e => setFormData({ ...formData, fullname: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password2" className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              id="password2"
              type="password"
              placeholder="Confirm your password"
              value={formData.password2}
              onChange={e => setFormData({ ...formData, password2: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="tc"
              type="checkbox"
              checked={formData.tc}
              onChange={e => setFormData({ ...formData, tc: e.target.checked })}
              className="h-4 w-4 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="tc" className="text-sm text-gray-600">
              I accept the <a href="#" className="text-blue-500 hover:text-blue-700">Terms and Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/login')}
            className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
          >
            Already have an account? Log in here
          </button>
        </div>
      </div>
    </div> */}


    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl max-md:max-w-md w-full">
        <div>
          <h2 className='lg:text-5xl text-3xl font-bold lg:leading-[57px] text-slate-900'>Create Your Account</h2>
          <p className='text-sm mt-6 text-slate-500 leading-relaxed'>Welcome to our registration page! Get started by creating your account.</p>
          <h2 className="lg:text-5xl text-3xl font-bold lg:leading-[57px] text-slate-900">
          Simple & Secure Registration
          </h2>
          <p className="text-sm mt-6 text-slate-500 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
          
        </div>
        
        <form onSubmit={handleSignup} className="max-w-md md:ml-auto w-full">
          <h3 className="text-slate-900 lg:text-3xl text-2xl font-bold mb-8">
          Create an account
          </h3>

          <div className="space-y-6">
          <div>
              <label className='text-sm text-slate-800 font-medium mb-2 block'>FullNmae</label>
              <input name="fullname" 
              id="fullname"
              type="text"
              value={formData.fullname}
              onChange={e => setFormData({ ...formData, fullname: e.target.value })} required className="bg-slate-100 w-full text-sm text-slate-800 px-4 py-3 rounded-md outline-none border focus:border-blue-600 focus:bg-transparent" placeholder="Enter FullName" />
            </div>
            <div>
              <label className='text-sm text-slate-800 font-medium mb-2 block'>Email id</label>
              <input name="email" 
              id="email"
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required className="bg-slate-100 w-full text-sm text-slate-800 px-4 py-3 rounded-md outline-none border focus:border-blue-600 focus:bg-transparent" placeholder="Enter Email" />
            </div>
            <div>
              <label className='text-sm text-slate-800 font-medium mb-2 block'>Password</label>
              <input name="password" 
              id="password"
              type="password"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })} required className="bg-slate-100 w-full text-sm text-slate-800 px-4 py-3 rounded-md outline-none border focus:border-blue-600 focus:bg-transparent" placeholder="Enter Password" />
            </div>
            <div>
              <label className='text-sm text-slate-800 font-medium mb-2 block'>Confirm Password</label>
              <input name="password"
               id="password2"
               type="password"
               value={formData.password2}
               onChange={e => setFormData({ ...formData, password2: e.target.value })}
               required className="bg-slate-100 w-full text-sm text-slate-800 px-4 py-3 rounded-md outline-none border focus:border-blue-600 focus:bg-transparent" placeholder="Enter Confirm Password" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <input name="remember-me"
                id="tc"
                type="checkbox"
                checked={formData.tc}
                onChange={e => setFormData({ ...formData, tc: e.target.checked })} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-500">
                I accept the <a href="#" className="text-blue-500 hover:text-blue-700">Terms and Conditions</a>
                </label>
              </div>
            </div>
          </div>

          <div className="!mt-12">
            <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              create an account
            </button>
          </div>

          <div className="my-4  items-center gap-4">
            <hr className="w-full border-slate-300" />
            <p className="text-sm mt-12 text-slate-500 text-center">Already have an account? <button onClick={() => navigate('/login')} className="text-blue-600 font-medium hover:underline ml-1">Login here</button></p>
            <hr className="w-full border-slate-300" />
          </div>

          
        </form>
      </div>
    </div>


    </>
  );
};

export default SignUp;





// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     fullname: '',
//     email: '',
//     password: '',
//     password2: '',
//     tc: false
//   });

//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       await axios.post('http://localhost:8000/api/register/', formData);
//       alert('Registration successful!');
//       navigate('/');
//     } catch (err) {
//       console.error(err.response?.data || err);
//       alert('Signup failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <input
//         placeholder="Full Name"
//         onChange={e => setFormData({ ...formData, fullname: e.target.value })}
//       />
//       <input
//         placeholder="Email"
//         onChange={e => setFormData({ ...formData, email: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={e => setFormData({ ...formData, password: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Confirm Password"
//         onChange={e => setFormData({ ...formData, password2: e.target.value })}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={formData.tc}
//           onChange={e => setFormData({ ...formData, tc: e.target.checked })}
//         />
//         Accept Terms
//       </label>
//       <button onClick={handleSignup}>Sign Up</button>
//     </div>
//   );
// };

// export default SignUp;