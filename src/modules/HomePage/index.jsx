import React, { useState } from "react";
import CardMovie from "../../components/CardMovie";
import FormAddMovie from "../../components/FormAddMovie";
// import Modal from "../../components/ Modal";


function HomePage() {

  const [movie, setMovie] = useState('');

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
        <CardMovie />
        {/* <Modal active={modalLoginActive}/> */}
      </div>
      {/* <input type='file' name='movie-file' id="file" />
      <button className="btn-add-file" onClick={() => addMovies()}>Add file</button> */}

      <FormAddMovie/>
    </>
  );
}

export default HomePage;
