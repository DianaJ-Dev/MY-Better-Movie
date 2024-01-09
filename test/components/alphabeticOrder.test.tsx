import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlphabeticOrder } from "../../src/components/alphabeticOrder";

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
const orderAlphabetic: Movie[] = [
  { id: 1, title: "A Man of Reason", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:'' },
  { id: 2, title: "Fast X", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:'' },
  { id: 3, title: "Believer 2", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:'' },
  { id: 4, title: "Godzilla", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:'' },
  { id: 5, title: "Creed III", poster_path: "",vote_average:1, vote_count:1,release_date: "", genre_ids: [28], overview:''},
];

describe("alphabetiOrder", () => {
  it("debería mostrar películas en orden alfabético ascendente", () => {

    const onOrderChange = jest.fn(); //funciones simuladas 
    const setSelectOrder = jest.fn();

    render(
      <AlphabeticOrder movies={orderAlphabetic} onOrderChange={onOrderChange} selectOrder="asc" setSelectOrder={setSelectOrder} />
    );
    //(fireEvent) simula el cambio en un elemento
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "desc" } }); // ("combobox") se refiere a un elemento de select
    
    //(toHaveBeenCalledWith) se usa para validar si una funcion ha sido llamada como argumento
    expect(onOrderChange).toHaveBeenCalledWith(
      orderAlphabetic.sort((b, a) => a.title.localeCompare(b.title)
      )
    )

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "asc" } });
    expect(onOrderChange).toHaveBeenCalledWith(
      orderAlphabetic.sort((a,b) => a.title.localeCompare(b.title)
      )
    )

    

  });
});