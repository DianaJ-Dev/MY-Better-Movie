import ReactPaginate from "react-paginate";
import styles from "./movies.module.css";
import React from "react";

//Interfaz TypeScript que describe la estructura de objetos
interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
}

interface PaginationProps {
  movies: Movie[];
  setCurrentPage: (pageNumber: number) => void; // void quiere decir que no trae ningun valor 
  selected: number;

}

export const ShowPaginated = ({ setCurrentPage }: PaginationProps) => {
  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <aside className={styles.container}>
      {/* Paginación */}
      <ReactPaginate
        previousLabel={"Back"}
        nextLabel={"After"}
        breakLabel={"..."}
        pageCount={10} //devuelve el entero Mayor o igual al numero proximo
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </aside>
  );
};
