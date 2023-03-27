import React, { useState } from "react";


export default function Search() {
  const [movie, setMovie] = useState('');
  return (
    <div className='box-input'>
      <input
        placeholder='Search movies..'
        className='input-search'
        value={movie}
        onChange={(event) => setMovie(event.target.value)}
      />
      {/* <span className='btn-add' onClick={toggleModal}></span> */}
    </div>
  );
}
