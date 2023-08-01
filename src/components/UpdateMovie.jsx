import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    year: '',
    director: '',
    genre: '',
    image: '',
    imdb: '',
    metascore: '',
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => setError(e.response?.data?.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movie/${id}`, movie)
      .then((res) => navigate('/'))
      .catch((e) => console.log(e));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={movie?.title}
          onChange={handleChange}
        ></input>
        <label htmlFor="">Year</label>
        <input
          type="text"
          name="year"
          value={movie?.year}
          onChange={handleChange}
        ></input>
        <label htmlFor="">Director</label>
        <input
          type="text"
          name="director"
          value={movie?.director}
          onChange={handleChange}
        ></input>
        <label htmlFor="">Genre</label>
        <input
          type="text"
          name="genre"
          value={movie?.genre}
          onChange={handleChange}
        ></input>
        <label htmlFor="">Image-link</label>
        <input
          type="text"
          name="image"
          value={movie?.image}
          onChange={handleChange}
        ></input>
        <label htmlFor="">IMDb-Rating</label>
        <input
          type="text"
          name="imdb"
          value={movie?.imdb}
          onChange={handleChange}
        ></input>
        <label htmlFor="">Metascore</label>
        <input
          type="text"
          name="metascore"
          value={movie?.metascore}
          onChange={handleChange}
        ></input>
        <button>Update Movie</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
