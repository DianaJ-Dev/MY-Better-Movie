import React from "react";
import styles from "../movies.module.css"

interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  genre_ids:number[];
  id:number
  vote_average:number;
  vote_count:number;
  overview:string 
}

interface InputProps{
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  input:string 
  setInput: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchMovie:React.FC<InputProps>  = ({ setMovies, input, setInput } : InputProps) => {
  
  const onInputChange = async (data:React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = data.target.value;
    setInput(inputValue);

    // Obtener resultados de búsqueda en tiempo real
    const searchResults = await searchMovies(inputValue);

    setMovies(searchResults);
  }

  const searchMovies = async (query:string) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&page=1&query=${query}&api_key=a96958b664d1a603a39c9d2064867790`);
    const data = await response.json();
    return data.results;
  };

  return (
    <div>
      <form>
        <input className={styles.searchmovie}
          type="text"
          placeholder='Search movie'
          value={input}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
}