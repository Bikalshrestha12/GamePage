import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ textColor, textSize, textFont }) => {
  return (
    <div>
        <div className="w-64 bg-gray-800 h-screen p-4">
          <h2 
            className="text-2xl font-bold mb-6" 
            style={{ 
              color: textColor, 
              fontSize: `${textSize}px`, 
              fontFamily: textFont 
            }}
          >
            Game Admin
          </h2>
          <nav>
          
            <ul>
                <li  className="mb-4">
                  <Link to='/dashboard' 
                    className="hover:text-blue-400" 
                    style={{ 
                      color: textColor, 
                      fontSize: `${textSize}px`, 
                      fontFamily: textFont 
                    }}
                  >
                    Dashboard
                  </Link>
                  
                </li>
              
              <li className="mb-4">
                <Link to='/dashboard/profile' 
                    className="hover:text-blue-400" 
                    style={{ 
                      color: textColor, 
                      fontSize: `${textSize}px`, 
                      fontFamily: textFont 
                    }}
                  >
                    User
                  </Link>
                  </li>
                  <li className="mb-4">
                  <a 
                    href="#" 
                    className="hover:text-blue-400" 
                    style={{ 
                      color: textColor, 
                      fontSize: `${textSize}px`, 
                      fontFamily: textFont 
                    }}
                  >
                    Game Stats
                  </a>
                  </li>
                  <li className="mb-4">
                  <Link to='/dashboard/setting'  
                    className="hover:text-blue-400" 
                    style={{ 
                      color: textColor, 
                      fontSize: `${textSize}px`, 
                      fontFamily: textFont 
                    }}
                  >
                    Settings
                  </Link>
                  </li>
                  <li className="mb-4">
                  <Link to='/dashboard/addgame' 
                    className="hover:text-blue-400" 
                    style={{ 
                      color: textColor, 
                      fontSize: `${textSize}px`, 
                      fontFamily: textFont 
                    }}
                  >
                    Add Game
                  </Link>
                  </li>
                  <li className="mb-4">
                  <Link to='/dashboard/showgameitem' 
                    className="hover:text-blue-400" 
                    style={{ 
                      color: textColor, 
                      fontSize: `${textSize}px`, 
                      fontFamily: textFont 
                    }}
                  >
                    Show all Game
                  </Link>
                  </li>
              {/* <Link to='/dashboard/addgame' className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-xl'>Add Game</Link>
              <Link to='/dashboard/showgameitem' className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-xl'>Show Game</Link> */}
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Sidebar
