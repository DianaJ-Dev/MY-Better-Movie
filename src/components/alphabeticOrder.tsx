 import React from 'react'




 export const AlphabeticOrder = ({ movies, onOrderChange, selectOrder, setSelectOrder }) => {
  const orderAlphabetic = (event) => {
    const selectedOrder = event.target.value;

    const orderedMovies = selectedOrder === 'asc'
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : [...movies].sort((b, a) => a.title.localeCompare(b.title));

    console.log(orderedMovies);

    setSelectOrder(selectedOrder);
    onOrderChange(orderedMovies);
  };

  return (
    <div>
      <label>Ordenar Alfabéticamente:</label>
      <select value={selectOrder} onChange={orderAlphabetic}>
        <option value=''>Seleccionar</option>
        <option value='asc'>A-Z</option>
        <option value='desc'>Z-A</option>
      </select>
    </div>
  );
};
 


