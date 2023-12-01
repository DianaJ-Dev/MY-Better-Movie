/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { Movies } from "../../src/components/movies";
import "@testing-library/jest-dom";

declare const global: any;

const mockMoviesData = [
  { title: "Movie 1", poster_path: "/movie1.jpg", release_date: "2022-01-01" },
  { title: "Movie 2", poster_path: "/movie2.jpg", release_date: "2022-02-01" },
];

// Simulamos fetch
global.fetch = jest.fn(() => // (global) accede a variables globales de js
  Promise.resolve({
    json: () => Promise.resolve({ results: mockMoviesData }),
  } as Response)
);

describe("Movies", () => {
  it("Debe llamar de manera correcta la api", async () => {
    render(<Movies />);

    // waitFor espera a que se cumpla la condicion de global.fetch
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();

    });
  });
  it("Renderiza correctamente la información de la película", async () => {
    render(<Movies />);

    await screen.findByText("Movie 1");

    mockMoviesData.forEach((item) => { //itera sobre cada elemento del array
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByAltText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.release_date)).toBeInTheDocument();
    });
  });
});

