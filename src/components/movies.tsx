import { useState, useEffect } from "react";
import React from 'react'
import { ShowPaginated } from "./showPaginated";


// Interfaz TypeScript que describe la estructura de objetos
interface Movie {
  title: string;
  poster_path: string;
  release_date: string;

}

export const Movies = () => {
  // TRAER PELICULAS API
  const [movies, setMovies] = useState<Movie[]>([]); // Actualiza el valor de estado Movie (desestructuración)
  const initialUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=Action%2C%20Adventure%2CComedyAnimation%2CDrama%2C%20Science%20Fiction&api_key=a96958b664d1a603a39c9d2064867790';

  useEffect(() => {
    const fetchMovies = async () => {
      const promises = [];
      for (let page = 1; page <= 100; page++) {
        const url = `${initialUrl}&page=${page}`
        promises.push(fetch(url).then(response => response.json()))
      }
      const results = await Promise.all(promises)
      const allMovies = results.flatMap(result => result.results) // results informacion de cada pelicula 
      setMovies(allMovies);
    };

    fetchMovies();
  }, [initialUrl])

  return <ShowPaginated movies={movies} />
  
}
