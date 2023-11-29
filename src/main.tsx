import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tittle } from './components/title'
//import { FiltrosByGenre } from './components/filters.genre'
import './style.css'
import { Movies } from './components/movies'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Tittle/>, <Movies/>
  </React.StrictMode>,
)
