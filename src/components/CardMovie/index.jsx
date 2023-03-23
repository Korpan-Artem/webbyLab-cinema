import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { removeMovie } from "../../store/cityActions";


const CardMovie = () => {
  const [actors, setActors] = useState(false);
  const listCity = useSelector(state => state.cities)
  const dispatch = useDispatch();
  const deleteCity = (id) => {
    dispatch(removeMovie(id))
  }

  return (
      <div className='card-items'>
        {
          listCity.cities && listCity.cities.map((cities, index) => (
            <div 
              key={index} 
              className='card-item' 
              onMouseEnter={() => setActors(true)} 
              onMouseLeave={() => setActors(false)}
            >
                <div className='card-item-content'>
                  <h4 >Name movie (1935)</h4>
                  {!!actors && (
                    <h5>Actors: Actors 2</h5>
                  )}
                  <h5>Format: DVD</h5>
                </div>
                <div>
                  <button onClick={() => deleteCity(cities.city.id)}>Delete</button>
                </div>
            </div>
          ))
        }
      </div>
  )

}
export default CardMovie;