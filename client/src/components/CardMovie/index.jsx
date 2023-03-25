import React from 'react';
import { useDispatch } from "react-redux";

import { removeMovie } from "../../store/movieActions";


const CardMovie = (movies) => {
  const dispatch = useDispatch();
  const deleteCity = (title) => {
    dispatch(removeMovie(title))
  }
  return (
    <div className='card-items'>
      {
        !!movies.movies && movies.movies.map(({ movie }, index) => (
          <div
            key={index}
            className='card-item'
          >
            <div className='card-item-content'>
              <p className='title'>{movie.title}</p>
              <p>Actors: {movie.stars}</p>
              <div className='card-item-content-bottom'>
                <p>Format: {movie.format}</p>
                <p>Id: {movie.id}</p>
              </div>
            </div>
            <div>
              <button className="btn-delete" onClick={() => deleteCity(movie.title)}></button>
            </div>
          </div>
        ))
      }
    </div>
  )

}
export default CardMovie;