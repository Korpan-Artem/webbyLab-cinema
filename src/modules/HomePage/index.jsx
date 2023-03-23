import React, { useState } from "react";
import { addMovie } from "../../store/cityActions";
import { useDispatch } from "react-redux";
import CardMovie from "../../components/CardMovie";
import fetchCity from "../../hooks";
import ModalItem from "../../components/ModalItem";


function HomePage() {
  const [city, setCity] = useState('');
  // const listCity = useSelector(state => state.cities)
  const dispatch = useDispatch();


  const add = (event,city) => {
    if(event.key === 'Enter') {
      const data = fetchCity(city);
      data.then((value) => {
        dispatch(addMovie(value));
        setCity('')
    })
    }
    
  }

  return (
    <>
    <header className='header'>
      <div className='header-side'></div>
      <h1>WebbyLab Cinema</h1>
      <div className='header-side box-btns'>
        <a className='btn-login' href=''>Log In</a>
        <a className='btn-login sing-color' href=''>Sing Up</a>
      </div>
    </header>
      
      <div className='box-input'>
          <input
            placeholder='Search movies..'
            className='input-search'
            value={city}
            onKeyPress={(event) => add(event,city)}
            onChange={(event) => setCity(event.target.value)}
          />
          <a href='' className='btn-add'></a>
      </div>
      <div >
        <CardMovie />
        <ModalItem/>
      </div>
    </>
  );
}

export default HomePage;
