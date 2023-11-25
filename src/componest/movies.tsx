import { useState, useEffect } from "react";
import './movies.module.css';

// interfaz TypeScript describe la estructura de objectos
interface Movie { //
    title: string;
    poster_path: string;  
    release_date :string;
}


export const Movies = () => {

    const [movie, setMovie] = useState<Movie[]>([])
    const initialUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&api_key=a96958b664d1a603a39c9d2064867790'
    const icludeImage = 'https://image.tmdb.org/t/p/w200/'
    
    const movieFetch =(url: string)=>{
     fetch(url)
          .then(response => response.json())
          .then(data => setMovie(data.results))
          .catch(err => console.error(err))
     }

    useEffect (()=>{
     movieFetch(initialUrl);
    }, [])

    return (
        <aside className='movie-container'>
            {movie.map((item, index) => (
                <header key={index} className='movie-card'>
                    <h4>{item.title}</h4>
                    <img src={icludeImage + item.poster_path} alt={item.title} />
                    <h4>{item.release_date}</h4>
                </header>
            ))}
        </aside>
    )
}