import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [imdb, setImdb] = useState('');
  const [metascore, setMetascore] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`, {
        title,
        year,
        director,
        genre,
        image,
        imdb,
        metascore,
      })
      .then((res) => navigate('/'))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h2>Add new movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label htmlFor="">Year</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        ></input>
        <label htmlFor="">Director</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        ></input>
        <label htmlFor="">Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        ></input>
        <label htmlFor="">Image-link</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <label htmlFor="">IMDb-Rating</label>
        <input
          type="text"
          value={imdb}
          onChange={(e) => setImdb(e.target.value)}
        ></input>
        <label htmlFor="">Metascore</label>
        <input
          type="text"
          value={metascore}
          onChange={(e) => setMetascore(e.target.value)}
        ></input>
        <button>Add Movie</button>
      </form>
    </div>
  );
};

export default NewMovie;
