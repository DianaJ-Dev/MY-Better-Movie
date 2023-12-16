import React from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  genre_id:number;
  id:number
  vote_average:number;
  vote_count:number;

}
interface MovieDetailProps {
  movies: Movie[];
}

export const MovieDetail: React.FC<MovieDetailProps> = ({ movies }) => {
  const handleGoBack = () => {
    navigete(-1);
  }
  
  const navigete = useNavigate();
  const { id } = useParams();
  const includeImage = "https://image.tmdb.org/t/p/w200/";

  const detail = movies.find((movie) => movie.id.toString() === id);

  if (!detail) {
    return <div>No se encontró la película</div>;
  }

  return (
    <div>
      <h4>{detail.title}</h4>
      <img src={includeImage + detail.poster_path} alt={detail.title} />
      <h4>Fecha de lanzamiento: {detail.release_date}</h4>
      <h4>Generos de pelicula: {detail.genre_id}</h4>
      <h4>Promedio de Votación: {detail.vote_average}</h4>
      <h4>Total de Votos: {detail.vote_count}</h4>
      <button onClick={handleGoBack}>Volver</button>
    </div>
  );
};