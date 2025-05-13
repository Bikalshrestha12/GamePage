import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Game from './pages/Game'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Reviews from './pages/Reviews'
import News from './pages/News'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import GameList from './pages/GameList'
import Favourite from './pages/Favourite'
import PlayGame from './pages/PlayGame'
import GamePlace from './pages/GamePlace'
import SignUp from './pages/SignUp'
import NavBar from './pages/adminpages/NavBar'
import DashBoard from './pages/adminpages/DashBoard'
import ShowGameItem from './pages/adminpages/ShowGameItem'
import AddGame from './pages/adminpages/AddGame'
import GameDetails from './pages/adminpages/GameDetails'
import UpdateGame from './pages/adminpages/UpdateGame'
import AdminLayout from './pages/adminpages/AdminLayout'
import UserLayout from './pages/UserLayout'
import Profile from './pages/adminpages/Profile'
import MyProfile from './pages/MyProfile'
import Setting from './pages/adminpages/Setting'
import useAutoLogout from './components/useAutoLogout'

function App() {
    useAutoLogout;
  return (
    
      <div className='bg-gray-200 text-black'>
      {/* <Navbar />
      <NavBar />
      <Routes>
        < Route path='/dashboard' element={<DashBoard />} />
        < Route path='/showgameitem' element={<ShowGameItem />} />
        < Route path='/AddGame' element={<AddGame />} />
        < Route path='/:id/' element={<GameDetails />} />
        < Route path='/:id/updategame' element={<UpdateGame />} />

        
        <Route path='/' element={<UserPage />} />
        < Route path='/' element={<Home />} />
        < Route path='/game' element={<Game />} />
        < Route path='/reviews' element={<Reviews />} />
        < Route path='/contact' element={<Contact />} />
        < Route path='/gamelist/:id' element={<GameList />} />
        < Route path='/news' element={<News />} />
        < Route path='/login' element={<Login />} />
        < Route path='/favourite' element={<Favourite />} />
        < Route path='/play-game' element={<PlayGame />} />
        < Route path='/game-place' element={<GamePlace />} />
        < Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer /> */}

    <Routes>
      {/* Admin Pages */}
      <Route path='/dashboard/' element={<AdminLayout />}>
        <Route index element={<DashBoard />} />
        <Route path='showgameitem' element={<ShowGameItem />} />
        <Route path='addgame' element={<AddGame />} />
        <Route path=':id' element={<GameDetails />} />
        <Route path=':id/updategame' element={<UpdateGame />} />
        <Route path= 'profile' element={<Profile />} />
        <Route path='setting' element={<Setting />} /> 
      </Route>

      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />

      {/* User Pages */}
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='game' element={<Game />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gamelist/:id' element={<GameList />} />
        <Route path='news' element={<News />} />
        <Route path='myprofile' element={<MyProfile />} />
        <Route path='favourite' element={<Favourite />} />
        <Route path='play-game' element={<PlayGame />} />
        <Route path='game-place' element={<GamePlace />} />
        {/* <Route path='signup' element={<SignUp />} /> */}
      </Route>
    </Routes>
  </div>
   
  )
}

export default App
