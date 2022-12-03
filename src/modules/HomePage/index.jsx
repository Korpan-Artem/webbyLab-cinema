import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from "axios"
import { addCity } from "../../store/cityActions";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import CardCity from "../../components/CardCity";



function HomePage() {
  const [city, setCity] = useState('');
  const listCity = useSelector(state => state.cities)
  const dispatch = useDispatch();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=545ae3ab5fa66fd646fb60c5f9658236`;

  const searchCity = (event) => {
    if (city) {
      if (event.key === 'Enter') {
        axios.get(url).then((response) => {
          dispatch(addCity(response.data));
          // console.log(response.data);
        })
        setCity('');
      }
    }
  }


  // useEffect(() => {
  //   if(listCity.cities.length > 0) {
  //     listCity.cities.map((cities) => {
  //       // console.log(cities.city.name,cities);
  //     })
  //   }
    
  // },[])



  return (
    <>
      <div className="search-input">
        <Stack spacing={2} sx={{ width: 300 }} >
          <Typography align="center" variant="h2" color="textPrimary" gutterBottom>Weather</Typography>
          <TextField
            label="Search input"
            value={city}
            style={{ borderRadius: "50%" }}
            onKeyPress={searchCity}
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
