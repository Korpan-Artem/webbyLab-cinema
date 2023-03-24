import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { removeMovie } from "../../store/movieActions";


const CardMovie = () => {
  const listMovies = useSelector(state => state.movies.movies)
  const dispatch = useDispatch();
  const deleteCity = (title) => {
    dispatch(removeMovie(title))
  }
  console.log('listMovies',listMovies);
  return (
      <div className='card-items'>
        {
          listMovies && listMovies.map(({movie}, index) => (
            <div 
              key={index} 
              className='card-item' 
            >
                <div className='card-item-content'>
                  <h4 >{movie.title}</h4>
                  <h5>Actors: {movie.stars}</h5>
                  <h5>Format: {movie.format}</h5>
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