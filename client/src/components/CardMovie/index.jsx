import React, { useState }  from 'react';

import CardItem from '../CardItem';


const CardMovie = ({ movies }) => {
  return (
    <div className='card-items'>
      {
        !!movies && movies.map((movie, index) => (
          <CardItem
            movie={movie}
            key={index}
            className='card-item'
          />

        )
        )
      }
    </div>
  )

}
export default CardMovie;