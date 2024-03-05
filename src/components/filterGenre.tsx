import React from 'react';
import styles from "../movies.module.css"


const byGenres = [
  { "id": 0, "name": " " },
  { "id": 28, "name": "Action" },
  { "id": 12, "name": "Adventure" },
  { "id": 16, "name": "Animation" },
  { "id": 35, "name": "Comedy" },
  { "id": 80, "name": "Crime" }
];

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

interface GenreProps {
  movies: Movie[];
  onGenreChange: (filteredMovies: Movie[]) => void;
  setSelectedGenre: (genre: string | null) => void;
  selectedGenre?: string | null ;
}

export const FiltersGenre = ({ movies,  onGenreChange, setSelectedGenre, selectedGenre }: GenreProps) => {
  

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => { // se ejecuta cuando cambia el valor de select
    const selectedGenreId = parseInt(event.target.value); //(parseInt) convierte cadena en numero
    setSelectedGenre(selectedGenreId.toString()) // (toString()) convierte valores numericos en string
    
    const filteredMovies = selectedGenreId === 0
      ? movies
      : movies.filter(movie => movie.genre_ids.includes(selectedGenreId));
    onGenreChange(filteredMovies);
  }

  return (
    <div>
      <label className={styles.titulouno}>Filter by gender:  </label>
      <select className={styles.button} value={selectedGenre || ''} onChange={handleGenreChange} aria-label="Select Genre">
        {byGenres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};