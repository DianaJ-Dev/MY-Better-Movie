import React from 'react';

const byGenres = [
  { "id": 0, "name": "All" },
  { "id": 28, "name": "Action" },
  { "id": 12, "name": "Adventure" },
  { "id": 16, "name": "Animation" },
  { "id": 35, "name": "Comedy" },
  { "id": 80, "name": "Crime" }
];

interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  genre_ids:number
}
interface GenreProps {
  movies: Movie[];
  onGenreChange: () => void
  setSelectedGenre: (genre: string) => void;
  selectedGenre:string
 

}

export const FiltersGenre = ({ movies,  onGenreChange, setSelectedGenre, selectedGenre }: GenreProps) => {
  

  const handleGenreChange = (event) => {
    const selectedGenreId = parseInt(event.target.value); //(parseInt) convierte cadena en numero
    setSelectedGenre(selectedGenreId)
    
    const filteredMovies = selectedGenreId === 0
      ? movies
      : movies.filter(movie => movie.genre_ids.includes(selectedGenreId));
    onGenreChange(filteredMovies);
  }

  return (
    <div>
      <select value={selectedGenre} onChange={handleGenreChange}>
        {byGenres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};