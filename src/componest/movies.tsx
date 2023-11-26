import { useState, useEffect } from "react";
import styles from './movies.module.css';
import ReactPaginate from 'react-paginate';


// Interfaz TypeScript que describe la estructura de objetos
interface Movie {
  title: string;
  poster_path: string;
  release_date: string;

}

export const Movies = () => {
  // TRAER PELICULAS API
  const [movies, setMovies] = useState<Movie[]>([]); // Actualiza el valor de estado Movie (desestructuración)
  const initialUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&api_key=a96958b664d1a603a39c9d2064867790';
  const includeImage = 'https://image.tmdb.org/t/p/w200/'

  useEffect(() => {
    const fetchMovies = async () => {
      const promises = [];
      for (let page = 1; page <= 100; page++) {
        const url = `${initialUrl}&page=${page}`
        promises.push(fetch(url).then(response => response.json()))
      }
      const results = await Promise.all(promises)
      const allMovies = results.flatMap(result => result.results)
      setMovies(allMovies);
    };

    fetchMovies();
  }, [initialUrl])

  // PAGINAR
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState<Movie[]>([])
  const offset = currentPage * itemsPerPage;

  useEffect(() => {
    const dataToDisplay = movies.slice(offset, offset + itemsPerPage) // slice devuelve una copia de un array
    setCurrentPageData(dataToDisplay) // Actualiza el valor del estado de (currentPageDate)
  }, [movies, offset, itemsPerPage])

  const handlePageClick = (selectedPage:{ selected: number }) => { // maneja cambio de pagina y actualiza el estado
    setCurrentPage(selectedPage.selected);
  };

  return (
    <aside className={styles.container}>
      {currentPageData.map((item, index) => (
        <header className={styles.card} key={index}>
          <h4 className = {styles.tittle}>{item.title}</h4>
          <img className = {styles.img} src={includeImage + item.poster_path} alt={item.title} />
          <h4 className = {styles.tittle}>{item.release_date}</h4>
        </header>
      ))}
      {/* Paginación */}
      <ReactPaginate
        previousLabel={'Back'} 
        nextLabel={'After'}
        breakLabel={'...'}
        pageCount={Math.ceil(movies.length / itemsPerPage)} //devuelve el entero Mayor o igual al numero proximo
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </aside>
  )
}