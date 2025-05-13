import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Title from '../../components/Title'
import { Link } from 'react-router-dom'

const GameDetails = () => {

    const [game, setGame] = useState([])
    const {id} = useParams()

    const getSingleGame = async() => {
        const response = await axios.get(`http://localhost:8000/api/game/${id}/`)
        console.log(response.data);
        
        setGame(response.data)
    }
    useEffect(() => {
        getSingleGame()
    },[])

    const deleteGame = async (id) => {
        try {
          await axios.delete(`http://localhost:8000/api/game/${id}/`);
          setGame(game.filter(item => item._id !== id)); // Remove deleted game from state
        } catch (error) {
          console.error("Error deleting game:", error);
        }
      }

  return (
    <div className='container p-8'>
        <h1 className='text-center text-3xl font-bold p-4 mb-5'>UPDATE GAME</h1>
        {/* <Title text1={'UPDATE'} text2={'GAMES'} /> */}
        <div className='row text-center font-semibold'>
            <div className='col-md-4'>
                <img src={game.image} alt={game.title} className='img-fluid items-center mb-4 mx-auto' />
            </div>
            <div className='col-md-8'>
                <h2 className='mb-4'>{game.title}</h2>
                <p className='mb-4'>{game.description}</p>
                <p className='mb-4'>Price: {game.price}</p>
                <p className='mb-4'>Platform: {game.platform}</p>
                <p className='mb-4'>Genre: {game.genre}</p>
                {/* <p className='mb-4'>Lavel: {game.level}</p> */}
                <p className='mb-4'>Online: {game.online ? 'Yes' : 'No'}</p>
                <p className='mb-4'>Paid: {game.paid ? 'Yes' : 'No'}</p>
                <p className='mb-4'>Rating: {game.rating}</p>
            </div>
        </div>
        <div className='flex justify-center gap-4 mt-4'>
            <Link to={`/dashboard/${game.id}/updategame`} className='bg-green-500 text-white p-2 rounded-full cursor-pointer'>Update</Link>
            <Link onClick={() => deleteGame(game.id)} className='bg-purple-500 text-white p-2 rounded-full cursor-pointer'>Delete</Link>
        </div>
    </div>
  )
}

export default GameDetails
