import React from 'react';
import styles from '../movies.module.css';

interface MovieItemProps {
  title: string;
  poster_path: string;
  release_date: string;
}

const includeImage = "https://image.tmdb.org/t/p/w200/";

export const MovieItem: React.FC<MovieItemProps> = ({ title, poster_path, release_date }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.tittle}>{title}</h4>
      <img
        className={styles.img}
        src={includeImage + poster_path}
        alt={title}
      />
      <h4 className={styles.tittle}>{release_date}</h4>
    </div>
  );
};

