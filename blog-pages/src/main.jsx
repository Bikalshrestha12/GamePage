import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import GameContextProvider from './contexts/GameContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GameContextProvider>
      <App />
    </GameContextProvider>
      
  </BrowserRouter>,
)
