import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ShowPaginated } from "../../src/components/showPaginated";

interface Movie {
    title: string;
    poster_path: string;
    release_date: string;
    genre_id:number;
    id:number
  }

describe("ShowPaginated", () => {
    it("Debe traer las películas de la página seleccionada", async () => {
        const movies: Movie[] = [
            {
                title: "Movie 1",
                poster_path: "/movie1.jpg",
                release_date: "2022-01-01",
                genre_id:123,
                id:123
            },
            {
                title: "Movie 2",
                poster_path: "/movie2.jpg",
                release_date: "2022-02-01",
                genre_id:123,
                id:123
            },
        ];
        // Jest.fn() crea una función simulada
        const setCurrentPage = jest.fn(); 

        render(
            <ShowPaginated
                movies={movies}
                setCurrentPage={setCurrentPage}
                selected={1}
            />
        );

        // fireEvent simula una interacción
        fireEvent.click(screen.getByText("2"));

        expect(setCurrentPage).toHaveBeenCalledWith(2);
    });
});
