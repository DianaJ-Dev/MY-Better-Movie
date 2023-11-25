import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tittle } from './componest/title'
import { FiltrosByGenre } from './componest/filters.genre'
import './style.css'
import { Movies } from './componest/movies'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Tittle/>, <FiltrosByGenre/>, <Movies/>
  </React.StrictMode>,
)
