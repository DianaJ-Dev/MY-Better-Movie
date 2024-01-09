import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FiltersGenre } from "../../src/components/filterGenre";

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

export const byGenres: Movie[] = [
  { id: 0, title: "All", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:'' },
  { id: 1, title: "Action", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:'' },
  { id: 2, title: "Adventure", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:'' },
  { id: 3, title: "Animation", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:'' },
  { id: 4, title: "Comedy", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:'' },
  { id: 5, title: "Crime", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:'' },
];

describe("FiltersGenre", () => {
  it("debería filtrar películas por género", () => {
    const onGenreChange = jest.fn(); // creo una funcion simulada 
    const setSelectedGenre = jest.fn();

    const { getByText, getByLabelText } = render(
      <FiltersGenre movies={byGenres} onGenreChange={onGenreChange} setSelectedGenre={setSelectedGenre} />
    )

    expect(getByText('All')).toBeInTheDocument()
    // (getByLabelText) selecciona un elemento que tiene una etiqueta especifica 
    fireEvent.change(getByLabelText('Select Genre'), { target: { value: '28' } })
    expect(setSelectedGenre).toHaveBeenCalledWith('28') 

    fireEvent.change(getByLabelText('Select Genre'), { target: { value: '0' } });
    expect(setSelectedGenre).toHaveBeenCalledWith('0')
  });
});