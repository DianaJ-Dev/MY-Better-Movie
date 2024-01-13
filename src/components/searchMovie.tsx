import React from "react";

export const SearchMovie = ({ movies, setMovies, input, setInput }) => {
  
  const onInputChange = async (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);

    // Obtener resultados de búsqueda en tiempo real
    const searchResults = await searchMovies(inputValue);

    // Actualizar el estado con las películas filtradas
    setMovies(searchResults);
  }

  const searchMovies = async (query) => {
    // Realizar una nueva solicitud a la API para obtener resultados de búsqueda
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&page=1&query=${query}&api_key=a96958b664d1a603a39c9d2064867790`);
    const data = await response.json();
    return data.results;
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder='Search movie'
          value={input}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
}