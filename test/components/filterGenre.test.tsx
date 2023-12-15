import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FiltersGenre } from "../../src/components/filterGenre";

interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  genre_id: number;
  id: number;
}

const byGenres: Movie[] = [
  { id: 0, title: "All", poster_path: "", release_date: "", genre_id: 0 },
  { id: 1, title: "Action", poster_path: "", release_date: "", genre_id: 28 },
  { id: 2, title: "Adventure", poster_path: "", release_date: "", genre_id: 12 },
  { id: 3, title: "Animation", poster_path: "", release_date: "", genre_id: 16 },
  { id: 4, title: "Comedy", poster_path: "", release_date: "", genre_id: 35 },
  { id: 5, title: "Crime", poster_path: "", release_date: "", genre_id: 80 },
];

describe("FiltersGenre", () => {
  it("debería filtrar películas por género", () => {
    const onGenreChange = jest.fn(); // creo una funcion simulada 
    const setSelectedGenre = jest.fn();

    const { getByText, getByLabelText } = render(
      <FiltersGenre movies={byGenres} onGenreChange={onGenreChange} setSelectedGenre={setSelectedGenre} />
    )

    expect(getByText('All')).toBeInTheDocument()
    fireEvent.change(getByLabelText('Select Genre'), { target: { value: '28' } })
    expect(setSelectedGenre).toHaveBeenCalledWith('28') 

    fireEvent.change(getByLabelText('Select Genre'), { target: { value: '0' } });
    expect(setSelectedGenre).toHaveBeenCalledWith('0')
  });
});
