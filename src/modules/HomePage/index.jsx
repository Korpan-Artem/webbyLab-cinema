import React, { useState } from "react";
import CardMovie from "../../components/CardMovie";
import FormAddMovie from "../../components/FormAddMovie";
// import Modal from "../../components/ Modal";
import { useSelector } from "react-redux";


function HomePage() {

  const [movie, setMovie] = useState('');
  const listMovies = useSelector(state => state.movies.movies)
  const filteredMovies = listMovies.filter(item => {
    return (
      item.movie.title.toLowerCase().includes(movie.toLowerCase()) ||
      item.movie.stars.toLowerCase().includes(movie.toLowerCase())
    )
  })
  console.log(filteredMovies);
  return (
    <>
      <header className='header'>
        <div className='header-side'></div>
        <h1>WebbyLab Cinema</h1>
        <div className='header-side box-btns'>
          <a className='btn-login' href='#'>Log In</a>
          <a className='btn-login sing-color' href='#'>Sing Up</a>
        </div>
      </header>

      <div className='box-input'>
        <input
          placeholder='Search movies..'
          className='input-search'
          value={movie}
          // onKeyPress={(event) => add(event, city)}
          onChange={(event) => setMovie(event.target.value)}
        />
        <a href='' className='btn-add'></a>
      </div>
      <div >
        <CardMovie movies={filteredMovies} />
        {/* <Modal active={modalLoginActive}/> */}
      </div>

      <FormAddMovie />
    </>
  );
}

export default HomePage;
