import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => setError(e.response?.data?.message));
  }, []);

  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => navigate('/'))
      .then(alert(`${movie.title} succesfully deleted`))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <p>by {movie.director}</p>
          <Link to={`/movies/update/${id}`}>Update Movie</Link>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
