import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateGame = () => {

    const [image, setImage] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [release_date, setReleaseDate] = useState("")
    const [genre, setGanere] = useState("")
    const [platform, setPlatform] = useState("")
    const [price, setPrice] = useState("")
    const [online, setOnline] = useState(Boolean)
    const [types, setType] = useState(Boolean)
    const [rating, setRating] = useState("")  

    const navegate = useNavigate()
    const {id} = useParams()

    const handleRating = (newRating) => {
        setRating(newRating);
      };

    const loadGame = async() => {
        // const response = await fetch(`http://localhost:8000/api/${id}/`)
        const response = await axios.get(`http://localhost:8000/api/game/${id}/`)
        const data = await response.data
        // console.log(data);
        
        // const data = await response.json()
    
        setTitle(data.title)
        setDescription(data.description)
        setReleaseDate(data.release_date)
        setGanere(data.genre)
        setPlatform(data.platform)
        setPrice(data.price)
        setOnline(data.online)
        setType(data.types)
        setRating(data.rating)  
    }

    useEffect(() => {
        loadGame()
    },[])

    const updatetoGame = async (e) => {
        e.preventDefault();
    
        let formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('release_date', release_date);
        formData.append('genre', genre);
        formData.append('platform', platform);
        formData.append('price', price);
        formData.append('online', online === 'online');
        formData.append('types', types === 'paid');
        formData.append('rating', rating);
        
        if (image !== null) {
            formData.append('image', image);
        }
    
        // Log formData for debugging
        for (let pair of formData.entries()) {
            console.log(pair[0]+ ': ' + pair[1]);
        }
    
        try {
            await axios.patch(`http://127.0.0.1:8000/api/game/${id}/`, formData);
            navegate('/dashboard/showgameitem');
        } catch (error) {
            console.error("Update failed:", error);
            if (error.response) {
                alert(`Server responded with ${error.response.status}: ${JSON.stringify(error.response.data)}`);
            }
        }
    };

    // const updatetoGame = async(e) => {  
    //     e.preventDefault()
    //     let formData = new FormData()
    //     formData.append('name', title)
    //     formData.append('description', description)
    //     formData.append('release_date', release_date)
    //     formData.append('genre', genre)
    //     formData.append('platform', platform)
    //     formData.append('price', price)
    //     formData.append('online', online)
    //     formData.append('types', types)
    //     formData.append('rating', rating)
    //     formData.append('id', id)
    //     // console.log(typeof image,'image')
    //     if (image !== null) {
    //         formData.append('image', image)
            
    //     }
        

    //     // await axios.post(`http://127.0.0.1:8000/api/${id}/`, formData, {
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     }
    //     // })
    //     // navegate('/showgameitem')

    //     await axios.patch(`http://127.0.0.1:8000/api/${id}/`, formData, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
        

    //     // const response = await fetch(`http://127.0.0.1:8000/api/${id}`, {
    //     //     method: 'PUT',
    //     //     body: formData,
    //     // })
    //     // if (response.ok) {
    //     //     navegate('/showgameitem')
    //     // } else {
    //     //     console.error('Failed to update game');
    //     // }

    //     // console.log([...formData]); 
    // }

    // const updatetoGame = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('image', image);
    //     formData.append('name', title);
    //     formData.append('description', description);
    //     formData.append('release_date', release_date);
    //     formData.append('genre', genre);
    //     formData.append('platform', platform);
    //     formData.append('price', price);
    //     formData.append('online', online);
    //     formData.append('types', types);
    //     formData.append('rating', rating);
      
    //     try {
    //       const response = await axios.put(`http://localhost:8000/api/${id}`, formData, {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       });
    //       console.log('Game updated successfully:', response);
    //       navegate('/showgameitem');
    //     } catch (error) {
    //       console.error('Error updating game:', error);
      
    //       // Display error message to user
    //       if (error.response) {
    //         // The server responded with an error status
    //         console.error('Error Response:', error.response);
    //         alert(`Failed to update game. Status: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`);
    //       } else if (error.request) {
    //         // The request was made but no response was received
    //         console.error('Error Request:', error.request);
    //         alert('Failed to update game. No response from the server.');
    //       } else {
    //         // Other error (config, network, etc.)
    //         console.error('Error Message:', error.message);
    //         alert(`Error: ${error.message}`);
    //       }
    //     }
    //   };

    const handleFileChange = (e)=>{
            const file = e.target.files[0]
            console.log(file,'file')
            if(file){
                setImage(file)
            }
    }

    // Handling select change
        // const handleOnlineChange = (e) => setOnline(e.target.value);
        // const handleTypesChange = (e) => setType(e.target.value);

  return (
    <div className='container p-8 justify-center items-center max-w-3xl mx-auto'> 
        <h1 className='text-center text-3xl font-bold p-4 mb-5'>UPDATE GAME</h1>
        <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">

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
                                        value={title || ""}
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
                                        value={description || ""}
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
                                        value={release_date || ""}
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
                                        value={genre || ""}
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
                                        value={platform || ""}
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
                                        value={price || ""}
                                        onChange={(e) => setPrice(e.target.value)}  
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <img src={image ? URL.createObjectURL(image) : ""} width={300} height={250} alt="" /> */}
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
                                        onChange={(e) => handleFileChange(e)}  
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
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
                                <select onChange={(e) => setOnline(e.target.value === online)} value={online || ""} className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
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
                                <select onChange={(e) => setType(e.target.value === paid)} value={types || ""}  className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
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
                            value={rating || ""}
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
            <div className="flex items-center mb-4">
                <button
                    type="submit"
                    // onClick={() => console.log({image, title, description, releaseDate, genre, platform, price, online, Type, rating})}
                    onClick={updatetoGame}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-xl"
                >
                    UPDATE
                </button>
            </div>
    </div>
  )
}

export default UpdateGame
