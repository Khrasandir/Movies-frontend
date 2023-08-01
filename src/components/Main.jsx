import { Route, Routes } from 'react-router-dom';
import Movies from './Movies';
import NewMovie from './NewMovie';
import MovieDetails from './MovieDetails';
import UpdateMovie from './UpdateMovie';

//will be dynamic depending on route

const Main = () => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Movies />}
        />
        <Route
          path="/movies/new"
          element={<NewMovie />}
        />
        <Route
          path="/movies/:id"
          element={<MovieDetails />}
        />
        <Route
          path="/movies/update/:id"
          element={<UpdateMovie />}
        />
      </Routes>
    </main>
  );
};

export default Main;
