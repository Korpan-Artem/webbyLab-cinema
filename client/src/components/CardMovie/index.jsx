import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { removeMovie } from "../../store/movieActions";
import { queryRemoveMovie } from '../FormAddMovie/query';


const CardMovie = (movies) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.users.user.token);

  const deleteCity = (id) => {
    queryRemoveMovie(id, token);
    dispatch(removeMovie(id))
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
              <p className='title'>{movie.title} ({movie.year})</p>
              <p>Actors: more</p>
              <div className='card-item-content-bottom'>
                <p>Format: {movie.format}</p>
                <p>Id: {movie.id}</p>
              </div>
            </div>
            <div>
              <button className="btn-delete" onClick={() => deleteCity(movie.id)}></button>
            </div>
          </div>
        ))
      }
    </div>
  )

}
export default CardMovie;