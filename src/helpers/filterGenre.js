
export const filterGenre = (movies, idGenre) => {
  
    return idGenre === 0
    ? movies
    : movies.filter(movie => movie.genreId.includes(idGenre));

}

