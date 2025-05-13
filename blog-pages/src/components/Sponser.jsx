import React from 'react'
import './Sponser.css'

const Sponser = () => {
  return (
    <div>
      <div className="min-h-screen  overflow-hidden relative">
                    {/* Header */}
                    {/* <header className="flex justify-between p-5 absolute w-full top-0">
                        <div className="text-xl font-bold text-gray-800">VendreSociety</div>
                        <div className="space-x-3">
                            <button className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 transition">
                                Menu
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 transition">
                                Book a call
                            </button>
                        </div>
                    </header> */}

                    {/* Main Content */}
                    <main className="flex justify-center items-center h-screen">
                        <h1 className="text-5xl font-bold text-gray-800 text-center animate-fade-in">
                            OURE <span className="border-b-4 border-gray-800">SPONSOR.</span>
                        </h1>
                    </main>

                    {/* Profile Pictures with Animation */}
                    <div className="w-20 h-20 bg-gray-300 rounded-full absolute top-[20%] left-[10%] animate-bounce-in delay-1"><img src="https://th.bing.com/th?id=OIF.EKbNN23ZVeWq7jW29dx%2b5Q&w=177&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /></div>
                    <div className="w-20 h-20 bg-gray-300 rounded-full absolute top-[40%] left-[5%] animate-bounce-in delay-2"><img src="https://th.bing.com/th/id/OIP.ipoibtf1ySAvS8hqzddPRAHaGD?w=175&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /></div>
                    <div className="w-20 h-20 bg-gray-300 rounded-full absolute top-[60%] left-[10%] animate-bounce-in delay-3"><img src="https://th.bing.com/th?id=OIF.nZtvYajO8HLLh%2b0GnbcOAw&w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /></div>
                    <div className="w-20 h-20 bg-gray-300 rounded-full absolute top-[80%] left-[15%] animate-bounce-in delay-4"><img src="https://th.bing.com/th/id/OIF.a0MGaPHFSmqxSX9MYcP7CA?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /></div>
                    <div className="w-20 h-20 bg-gray-300 rounded-full absolute top-[30%] right-[5%] animate-bounce-in delay-5"><img src="https://th.bing.com/th?id=OIF.iuIHQ1YBfIO%2bDmUTOKmzUg&w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /></div>
                    <div className="w-20 h-20 bg-gray-300 rounded-full absolute top-[50%] right-[10%] animate-bounce-in delay-6"><img src="https://th.bing.com/th/id/OIF.VBBLx6s04L2YpMq7Ius3jg?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /></div>
                    <div className="w-20 h-20 bg-gray-300 rounded-full absolute top-[70%] right-[15%] animate-bounce-in delay-7"><img src="https://th.bing.com/th?id=OIF.ET12HIacSWtSp9q%2fq3V9sQ&w=182&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /></div>
                    <div className="w-20 h-20 bg-gray-300 rounded-full absolute bottom-[10%] right-[10%] animate-bounce-in delay-8"><img src="https://th.bing.com/th/id/OIF.rVMICkR2Jsvf4FoxcxBcsA?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /></div>
                    <div className="w-20 h-20 bg-gray-300 rounded-full absolute top-[10%] right-[15%] animate-bounce-in delay-9"><img src="https://th.bing.com/th/id/OIP.5aE1qb72PpXemtAjhQAGgwAAAA?w=126&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /></div>
                </div>
    </div>
  )
}

export default Sponser
