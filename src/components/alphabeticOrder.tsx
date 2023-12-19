 import React from 'react'
 import styles from "../movies.module.css"


 interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  genre_ids:number;
  id:number
  vote_average:number;
  vote_count:number;
  overview:string

}

 interface Order {
  movies: Movie[];
  onOrderChange: (filteredMovies: Movie[]) => void;
  selectOrder: string | undefined;
  setSelectOrder: (order: string) => void;

}

 export const AlphabeticOrder = ({ movies, onOrderChange, selectOrder, setSelectOrder }:Order) => {
  const orderAlphabetic = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrder = event.target.value;

    const orderedMovies = selectedOrder === 'asc'
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : [...movies].sort((b, a) => a.title.localeCompare(b.title));


    setSelectOrder(selectedOrder);
    onOrderChange(orderedMovies);
  };

  return (
    <div>
      <label className={styles.titulouno}>Ordenar Alfabéticamente:</label>
      <select className={styles.button} value={selectOrder} onChange={orderAlphabetic}>
        <option value=''>Seleccionar</option>
        <option value='asc'>A-Z</option>
        <option value='desc'>Z-A</option>
      </select>
    </div>
  );
};
 


