import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tittle } from './components/title'
import { Movies } from './movies'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Tittle/>,<Movies/>
  </React.StrictMode>,
)
