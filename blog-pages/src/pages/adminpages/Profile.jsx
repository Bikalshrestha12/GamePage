import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login'); // redirect if not logged in
      return;
    }

    axios.get('http://localhost:8000/api/profile/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setUser(res.data.data);
      // console.log(res.data.data)
    })
    .catch(err => {
      console.error("Error fetching profile:", err);
      localStorage.removeItem('token');
      navigate('/login'); // redirect if token is invalid
    });
  }, [navigate]);

  if (!user) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow my-3">
        <h1 className="text-xl font-bold mb-4">User Profile</h1>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Username:</strong> {user.fullname || '-'}</p>
      </div>
      <div
      class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] px-6 py-8 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4 mb-5">
      <div class="flex flex-wrap items-center gap-4">
        <h3 class="text-xl font-semibold flex-1 text-slate-900">All USER</h3>
        <p class="text-sm text-blue-500 font-medium cursor-pointer">See all</p>
      </div>

      <div class="mt-8 space-y-4 mb-5">
        <div
          class="flex flex-wrap items-center cursor-pointer shadow-[0_2px_6px_-1px_rgba(0,0,0,0.3)] rounded-lg w-full p-4">
          <img src='https://readymadeui.com/profile_2.webp' class="w-10 h-10 rounded-full" />
          <div class="ml-4 flex-1">
            <p class="text-sm text-slate-900 font-semibold">John Doe</p>
            <p class="text-xs text-slate-500 mt-0.5">johndoe23@gmail.com</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-gray-500" viewBox="0 0 32 32">
            <path
              d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
              data-original="#000000" />
          </svg>
        </div>

        <div
          class="flex flex-wrap items-center cursor-pointer shadow-[0_2px_6px_-1px_rgba(0,0,0,0.3)] rounded-lg w-full p-4">
          <img src='https://readymadeui.com/profile_3.webp' class="w-10 h-10 rounded-full" />
          <div class="ml-4 flex-1">
            <p class="text-sm text-slate-900 font-semibold">Mark</p>
            <p class="text-xs text-slate-500 mt-0.5">mark23@gmail.com</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-gray-500" viewBox="0 0 32 32">
            <path
              d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
              data-original="#000000" />
          </svg>
        </div>

        <div
          class="flex flex-wrap items-center cursor-pointer shadow-[0_2px_6px_-1px_rgba(0,0,0,0.3)] rounded-lg w-full p-4">
          <img src='https://readymadeui.com/profile_4.webp' class="w-10 h-10 rounded-full" />
          <div class="ml-4 flex-1">
            <p class="text-sm text-slate-900 font-semibold">Adele wotson</p>
            <p class="text-xs text-slate-500 mt-0.5">adele45@gmail.com</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-gray-500" viewBox="0 0 32 32">
            <path
              d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
              data-original="#000000" />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile
