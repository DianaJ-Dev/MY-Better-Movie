import React, { useState, useEffect } from "react";
import './movies.module.css';
import ReactPaginate from 'react-paginate';


// Interfaz TypeScript que describe la estructura de objetos
interface Movie {
  title: string;
  poster_path: string;
  release_date: string;

}

export const Movies = () => {
  // tRAER PELICULAS API
  const [movies, setMovies] = useState<Movie[]>([]); // Actualiza el valor de estado Movie
  const initialUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&api_key=a96958b664d1a603a39c9d2064867790';
  const includeImage = 'https://image.tmdb.org/t/p/w200/';

  const movieFetch = (url: string) => {
    fetch(url)
      .then(response => response.json()) // convierte respuesta en formato JSON
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    movieFetch(initialUrl); // realiza solicitud  HTTP a la url inicial
  }, []);

  // PAGINAR
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState<Movie[]>([])
  const offset = currentPage * itemsPerPage;

  useEffect(() => {
    const dataToDisplay = movies.slice(offset, offset + itemsPerPage)
    setCurrentPageData(dataToDisplay) // Actualiza el valor del estado de (currentPageDate)
  }, [movies, offset, itemsPerPage])

  const handlePageClick = (selectedPage:{ selected: number }) => { // maneja cambio de pagina y actualiza el estado
    setCurrentPage(selectedPage.selected);
  };

  return (
    <aside>
      {currentPageData.map((item, index) => (
        <header key={index}>
          <h4>{item.title}</h4>
          <img src={includeImage + item.poster_path} alt={item.title} />
          <h4>{item.release_date}</h4>
        </header>
      ))}
      {/* Paginación */}
      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        pageCount={Math.ceil(movies.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </aside>
  );
};