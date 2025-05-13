import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddGame = () => {

        const [image, setImage] = useState(null)
        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")
        const [release_date, setReleaseDate] = useState("")
        const [genre, setGanere] = useState("")
        const [platform, setPlatform] = useState("")
        const [price, setPrice] = useState("")
        const [lavel, setLavel] = useState("")
        const [online, setOnline] = useState(Boolean)
        const [types, setType] = useState(Boolean)
        const [rating, setRating] = useState("")  
        const [levels, setLevels] = useState([]);
        const [newLevel, setNewLevel] = useState('');
        // const [selectedLevel, setSelectedLevel] = useState('Beginner');
        // const history = useHistory();
        const navigate = useNavigate();
    
        const handleRating = (newRating) => {
            setRating(newRating);
          };
    
          const addtoGame = async() => {
            let formData = new FormData()
            if (image) {
                formData.append('image', image)  // Assuming image is a file input
            } else {
                console.error("Image is not selected")
            }
            // formData.append('image', image)
            formData.append('title', title)
            formData.append('description', description)
            formData.append('release_date', release_date)
            formData.append('genre', genre)
            formData.append('platform', platform)
            formData.append('price', price)
            formData.append('lavel', lavel)
            formData.append('online', online)
            formData.append('Type', types)
            formData.append('rating', rating)
    
    
            await fetch("http://localhost:8000/api/game/", {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
                // console.log(res.data)
        }

        const addNewLevel = () => {
            if (newLevel && !levels.includes(newLevel)) {
              setLevels([...levels, newLevel]);
              setNewLevel(''); // Clear the input after adding the level
            } else {
              alert('Please enter a valid level name or make sure it is unique.');
            }
          };

          const handleNewLevelChange = (event) => {
            setNewLevel(event.target.value);
          };

  return (
    <div>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">DASHBOARD</h2> 
        {/* <form> */}
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">GAME</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex flex-col items-center md:flex-row gap-4">
                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                Title:
                            </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}  
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex flex-col items-center md:flex-row gap-4">
                            <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                            Description :
                            </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                
                                    <input
                                        id="description"
                                        name="description"
                                        type="text"
                                        placeholder="Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}  
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex flex-col items-center md:flex-row gap-4">
                            <label htmlFor="releaseDate" className="block text-sm/6 font-medium text-gray-900">
                            ReleaseDate :
                            </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                
                                    <input
                                        id="releaseDate"
                                        name="releaseDate"
                                        type="date"
                                        placeholder="ReleaseDate"
                                        value={release_date}
                                        onChange={(e) => setReleaseDate(e.target.value)}  
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex flex-col items-center md:flex-row gap-4">
                            <label htmlFor="genre" className="block text-sm/6 font-medium text-gray-900">
                            Genre :
                            </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                
                                    <input
                                        id="genre"
                                        name="genre"
                                        type="text"
                                        placeholder="Genre"
                                        value={genre}
                                        onChange={(e) => setGanere(e.target.value)}  
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex flex-col items-center md:flex-row gap-4">
                            <label htmlFor="platform" className="block text-sm/6 font-medium text-gray-900">
                                platform :
                            </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                
                                    <input
                                        id="platform"
                                        name="platform"
                                        type="text"
                                        placeholder="Platform"
                                        value={platform}
                                        onChange={(e) => setPlatform(e.target.value)} 
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex flex-col items-center md:flex-row gap-4">
                            <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                                Price :
                            </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                
                                    <input
                                        id="price"
                                        name="price"
                                        type="number"
                                        placeholder="0.00"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}  
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex flex-col items-center md:flex-row gap-4">
                            <label htmlFor="image" className="block text-sm/6 font-medium text-gray-900">
                                Image :
                            </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                
                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        placeholder="Image"
                                        // multiple
                                        onChange={(e) => setImage(e.target.files[0])}  
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex flex-col items-center md:flex-row gap-4">
                            <div className="flex items-center mb-4">
                                <label htmlFor="addlevel" className="block text-sm/6 font-medium text-gray-900">
                                    Add Level :
                                </label>
                                <div className="mx-2">
                                    <input
                                    type="text"
                                    value={newLevel}
                                    onChange={handleNewLevelChange}
                                    className="px-4 py-2 mr-2 text-gray-700 border border-gray-300 rounded-md"
                                    placeholder="Enter new level"
                                    />
                                    <button
                                        onClick={addNewLevel}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                                        >
                                        Add Level
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold">Available Game Levels:</h3>
                        <ul className="list-disc pl-6">
                        {levels.map((level, index) => (
                            <li key={index} className="text-gray-700">
                            {level}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex flex-col items-center md:flex-row gap-4">
                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                Options :
                            </label>
                            <div className="mt-2">
                                <div >
                                <select onChange={(e) => setOnline(e.target.value === "online")} value={online ? "online" : "offline"} className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <option value="online">Online</option>
                                    <option value="offline">Offline</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 flex flex-col items-center md:flex-row gap-4">
                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                Options :
                            </label>
                            <div className="mt-2">
                                <div >
                                <select onChange={(e) => setType(e.target.value === "paid")} value={types ? "paid" : "free"}  className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <option value="paid">Paid</option>
                                    <option value="free">Free</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <p className="text-lg text-gray-800 mr-4">Your Rating:</p>
                        {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            value={rating}
                            onClick={() => handleRating(star)}
                            className={`text-xl cursor-pointer ${
                            star <= rating ? 'text-yellow-500' : 'text-gray-400'
                            }`}
                        >
                            ★
                        </button>
                        ))}
                    </div>

                </div>
            </div>
        {/* </form> */}
        
            <div className="flex items-center mb-4">
                <button
                    type="submit"
                    // onClick={() => console.log({image, title, description, releaseDate, genre, platform, price, online, Type, rating})}
                    onClick={addtoGame}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-xl"
                >
                    Submit
                </button>
            </div>
        
      
    </div>
    </div>
  )
}

export default AddGame
