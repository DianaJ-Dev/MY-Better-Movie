import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { byGenres} from '../components/filterGenre';
import styles from "../movies.module.css";


interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  genre_ids:number[];
  id:number
  vote_average:number;
  vote_count:number;
  overview:string
  

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
  

  const selectGenre = byGenres.find((genre) => detail.genre_ids.includes(genre.id))

  return (
    <div className={styles.containerDetail} >
      <button className={styles.back} onClick={handleGoBack}>Back</button>
      <img className={styles.imgDetail} src={includeImage + detail.poster_path} alt={detail.title} />
      <div>
      <h4 className={styles.tittleDetail}>{detail.title}</h4>  
      <h4 className={styles.info}>Fecha de lanzamiento: {detail.release_date}</h4>
      <div className={styles.info}>
        {selectGenre ? (
          <h4>Genero de película: {selectGenre.name}</h4>
        ) : (
          <p>No se encontró genero</p>
        )}
      </div>
      <p className={styles.p}>{detail.overview}</p>
      <h4 className={styles.info}>Promedio de Votación: {detail.vote_average}</h4>
      <h4 className={styles.info}>Total de Votos: {detail.vote_count}</h4>
      </div>
    </div>
  )
}