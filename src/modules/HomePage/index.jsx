import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { addCity, refreshCity } from "../../store/cityActions";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import CardCity from "../../components/CardCity";
import fetchCity from "../../hooks";


function HomePage() {
  const [city, setCity] = useState('');
  const listCity = useSelector(state => state.cities)
  const dispatch = useDispatch();

  const refrCity = (city) => {
    if(city) {
      const data = fetchCity(city);
        data.then((value) => {
        dispatch(refreshCity(value));
        })
    }
  } 

  const add = (event,city) => {
    if(event.key === 'Enter') {
      const data = fetchCity(city);
      data.then((value) => {
        dispatch(addCity(value));
        setCity('')
    })
    }
    
  }


  useEffect(() => {
    if(listCity.cities.length > 0) {
      listCity.cities.map((cities) => {
        !!cities.city && refrCity(cities.city.name);
      })
    }
  },[])



  return (
    <>
      <div className="search-input">
        <Stack spacing={2} sx={{ width: 300 }} >
          <Typography align="center" variant="h2" color="textPrimary" gutterBottom>Weather</Typography>
          <TextField
            label="Search input"
            value={city}
            style={{ borderRadius: "50%" }}
            onKeyPress={(event) => add(event,city)}
            onChange={(event) => setCity(event.target.value)}
          />
        </Stack>
      </div>
      <div >
        <CardCity/>
      </div>
    </>
  );
}

export default HomePage;
