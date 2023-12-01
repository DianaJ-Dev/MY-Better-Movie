import React, { useState, useEffect } from "react";
import { ShowPaginated } from "./showPaginated";
import styles from "./movies.module.css";

// Interfaz TypeScript que describe la estructura de objetos
interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
}

const includeImage = "https://image.tmdb.org/t/p/w200/";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // Actualiza el valor de estado de las peliculas  (desestructuración)
  const [currentPage, setCurrentPage] = useState(1); // Actualiza el valor de las paginas

  const movieFetch = (page: number) => {
    const initialUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=Action%2C%20Adventure%2CComedyAnimation%2CDrama%2C%20Science%20Fiction&api_key=a96958b664d1a603a39c9d2064867790`;

    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
  };

  // Nueva solicitud cada  vez que cambia la pelicula
  useEffect(() => {
    movieFetch(currentPage);
  }, [currentPage]);

  return (
    <div className={styles.movies}>
      {movies.map((item, index) => (
        <header className={styles.card} key={index}>
          <h4 className={styles.tittle}>{item.title}</h4>
          <img
            className={styles.img}
            src={includeImage + item.poster_path}
            alt={item.title}
          />
          <h4 className={styles.tittle}>{item.release_date}</h4>
        </header>
      ))}
      <ShowPaginated
        movies={movies}
        setCurrentPage={setCurrentPage}
        selected={currentPage}
      />
    </div>
  );
};
