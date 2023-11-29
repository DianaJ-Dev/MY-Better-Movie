  import React from 'react';
  import { render, waitFor} from '@testing-library/react';
  import { Movies } from '../../src/components/movies';

  // Simulamos fetch
   global.fetch = jest.fn(() => // (global) accede a variables globales de js 
   Promise.resolve({
     json: () => Promise.resolve({ results: [{ title: 'Movie 1' }, { title: 'Movie 2' }] }),
     status: 200,
     statusText: 'OK',
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