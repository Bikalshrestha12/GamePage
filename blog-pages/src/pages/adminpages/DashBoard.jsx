import React, { useState } from 'react'
import axios from 'axios'
import ShowGameItem from './ShowGameItem'
import AddGame from './AddGame'
import { useNavigate } from 'react-router-dom'
import {Link, NavLink } from 'react-router-dom';
import NavBar from './NavBar'
import Setting from './Setting'
import Sidebar from './Sidebar'
import Graph from './Graph'
import StyleSetting from './StyleSetting'
import Footers from './Footers'
import Footer from '../../components/Footer'

const DashBoard = () => {

    const navigate = useNavigate();
    const [navStyles, setNavStyles] = React.useState({
        textColor: '#ffffff',
        textSize: 16,
        textFont: 'Arial',
      });
      const [footerStyles, setFooterStyles] = React.useState({
        textColor: '#ffffff',
        textSize: 14,
        textFont: 'Arial',
      });

      const users = [
        { id: 1, username: "Player1", email: "player1@example.com", status: "Active" },
        { id: 2, username: "Player2", email: "player2@example.com", status: "Banned" },
        { id: 3, username: "Player3", email: "player3@example.com", status: "Active" },
      ];

    return (
        <div>
        
        {/* < Setting /> */}
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-1">
            <Sidebar 
              textColor={navStyles.textColor} 
              textSize={navStyles.textSize} 
              textFont={navStyles.textFont} 
            />
            <div className="flex-1 bg-gray-100">
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Game Admin Dashboard</h1>
                <Graph />
                
                <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Game Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Total Players</h3>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Active Sessions</h3>
              <p className="text-3xl font-bold text-green-600">567</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Daily Matches</h3>
              <p className="text-3xl font-bold text-purple-600">789</p>
            </div>
          </div>
        </div>

        <div className="p-6">
            <div className="flex px-6">
                <h2 className="text-2xl font-bold mb-4">User Management</h2>
                <h5 className='text-2xl font-bold ml-auto underline'><Link to='/dashboard/profile/'>All User</Link> </h5>
            </div>
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Username</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {users.map(user => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6">{user.id}</td>
                  <td className="py-3 px-6">{user.username}</td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6">{user.status}</td>
                  <td className="py-3 px-6 text-center">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">Edit</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Ban</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
                
              </div>
            </div>
          </div>

            
          
        </div>
        </div>
  )
}

export default DashBoard
