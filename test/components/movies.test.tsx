    import React from 'react';
    import { render, waitFor} from '@testing-library/react';
    import { Movies, ShowPaginated } from '../../src/components/movies';


    // Simulamos fetch
    global.fetch = jest.fn(() => // (global) accede a variables globales de js 
    Promise.resolve({
      json: () => Promise.resolve({ results: [{ title: 'Movie 1' }, { title: 'Movie 2' }] })
    } as Response)
  );
  
  describe('Movies', () => {
    it('Debe mostrarme las primeras 100 peliculas', async () => {
      render(<Movies />);
      
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(100); 
      })
    })
  })


  describe('ShowPaginated', () => {
    it('Debe retornar nombre de pelicula, imagen y fecha', ()  =>{
      const movie ={
        title: 'Leo',
        imag:'https://image.tmdb.org/t/p/w200',
        date:'2023-11-17',
        poster_path: '/ruta/al/poster.jpg',
        release_date: '2023-11-17'
      }
      ShowPaginated([movie]);
  
      expect(ShowPaginated).toHaveBeenCalledWith(movie)
      })

    })