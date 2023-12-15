import React from 'react'

interface MovieItemProps {
  title: string;
  poster_path: string;
  release_date: string;
}

export const MovieDetail = ({detailMovies, setDetailMovies,movies}) => {
  
  function handleDetailClick(){
    setDetailMovies(detailMovies)

  }
  


  const includeImage = "https://image.tmdb.org/t/p/w200/";


 
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} onClick={handleDetailClick}>
          <h4>{movie.title}</h4>
          <img src = {includeImage + movie.poster_path }/>
          <h4>{movie.release_date}</h4>
          <h4>{movie.genre_ids}</h4>
          <h4>{movie.vote_average}</h4>
          <h4>{movie.vote_count}</h4>
        </div>
      ))}

    </div>
  )
}
