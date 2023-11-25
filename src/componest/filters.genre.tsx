import './filters.genre.module.css'

const genre = [
    {title:'Accion',id:1},
    {title:'Terror',id:2},
    {title:'Comedia',id:3},
    {title:'Romance',id:4},
    {title:'Suspenso',id:5},
]


 const ButtonGenre = genre.map(genre => 
    <button key = {genre.id}>
        {genre.title}
    </button>
 )
export const FiltrosByGenre = () =>{
  return (
    <button>Genre
      <li> {ButtonGenre}</li>
    </button>
  )
} 

       