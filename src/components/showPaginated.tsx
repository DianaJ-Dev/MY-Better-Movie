import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import React from 'react'
import styles from './showPaginated.module.css';

//Interfaz TypeScript que describe la estructura de objetos
interface Movie {
  title: string;
  poster_path: string;
  release_date: string;

}

interface PaginationProps{
  movies: Movie[]
}

const includeImage = 'https://image.tmdb.org/t/p/w200/'

export const ShowPaginated= ({movies}: PaginationProps) => {
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
        