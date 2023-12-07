import React, { useState, useEffect } from "react";
import { ShowPaginated } from "./components/showPaginated";
import styles from './movies.module.css';
import { MovieItem } from "./components/movieItem";
import { FiltersGenre } from "./components/filterGenre";
import {AlphabeticOrder} from "./components/alphabeticOrder";


// Interfaz TypeScript que describe la estructura de objetos
interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
  
}


export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // Actualiza el valor de estado de las peliculas  (desestructuración)
  const [currentPage, setCurrentPage] = useState(1); // Actualiza el valor de las paginas
  const [selectedGenre, setSelectedGenre] = useState();
  const [selectOrder, setSelectOrder] = useState()
  
  
  const handleGenreChange = (filteredMovies: Movie[] )  => {
    setMovies(filteredMovies);
  }

  const handleOrderChange = (orderedMovies: Movie[]) => {
    setMovies(orderedMovies);
  };
  

  const movieFetch = (page: number,with_genres: null, order:string) => {
    if(with_genres === 0) with_genres = null

    const initialUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&with_genres=${with_genres}&api_key=a96958b664d1a603a39c9d2064867790`;

    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setMovies(order== 'asc'?
        data.results.sort((a, b) => a.title.localeCompare(b.title)):
        data.results.sort((b, a) => a.title.localeCompare(b.title))))
     
  };

  // Nueva solicitud cada  vez que cambia la pelicula
  useEffect(() => {
    movieFetch(currentPage,selectedGenre,selectOrder);
  }, [currentPage,selectedGenre, selectOrder, movies]);





  return (
    <div className={styles.movies}>
       <FiltersGenre movies={movies} onGenreChange={handleGenreChange}  selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/> 
       <AlphabeticOrder movies={movies} onOrderChange={handleOrderChange} selectOrder={selectOrder} setSelectOrder={setSelectOrder}/>
       

      {movies.map((movie) => (
        <MovieItem
        key={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
        
        />
        
        ))}
      <ShowPaginated
        movies={movies}
        setCurrentPage={setCurrentPage}
        selected={currentPage}
      />
    </div>
  );
};
