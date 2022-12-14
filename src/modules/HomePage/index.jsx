import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from "axios"
import { addCity, refreshCity } from "../../store/cityActions";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import CardCity from "../../components/CardCity";


function HomePage() {
  const [city, setCity] = useState('');
  const listCity = useSelector(state => state.cities)
  const dispatch = useDispatch();

  const addedCity = (event) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=545ae3ab5fa66fd646fb60c5f9658236`;
    if (city) {
      if (event.key === 'Enter') {
        axios.get(url).then((response) => {
          dispatch(addCity(response.data));
        })
        setCity('');
      }
    }
  }

  const refresh = (city) => {
    const urlRefresh = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=545ae3ab5fa66fd646fb60c5f9658236`;
    axios.get(urlRefresh).then((response) => {
      dispatch(refreshCity(response.data));
    })
  } 


  useEffect(() => {
    if(listCity.cities.length > 0) {
      listCity.cities.map((cities) => {
        refresh(cities.city.name);
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
            onKeyPress={addedCity}
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
