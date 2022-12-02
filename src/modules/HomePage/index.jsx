import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from "axios"
import { addCity,removeCity } from "../../store/cityActions";
import {NavLink } from "react-router-dom"
import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


function HomePage() {
  const listCity = useSelector(state => state.cities)
  const [city, setCity] = useState('');
  
  const dispatch = useDispatch();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=545ae3ab5fa66fd646fb60c5f9658236`;

  const searchCity = (event) => {
    if (city) {
      if (event.key === 'Enter') {
        axios.get(url).then((response) => {
          dispatch(addCity(response.data));
        })
        setCity('');
        console.log('list',listCity);
      }
    }
  }

  const deleteCity = (id) => {
    dispatch(removeCity(id))
    console.log(listCity.cities);
  }


  return (
    <>
    <div className="search-input">
      <Stack spacing={2} sx={{ width: 300 }} >
      <Typography align="center" variant="h2" color="textPrimary" gutterBottom>Weather</Typography>
        <TextField
          label="Search input"
          value={city}
          style={{borderRadius: "50%"}}
          onKeyPress={searchCity}
          onChange={(event) => setCity(event.target.value)}
        />
      </Stack>
      </div>
      <div >
        <Container maxWidth="sm">
          
          <Grid container spacing={4}>
            {
              listCity.cities.length > 0 && listCity.cities.map((cities,index) => (
                <Grid key={index} item justifyContent="center" xs={12} sm={6} md={4}>
                  <Card color="primary">
                    <CardContent className="card-item">
                      <Typography variant="h4">{cities.name}</Typography>
                      {!!cities.temp && (
                        <Typography variant="h5">{Math.round(cities.temp)} °C</Typography>
                      )}
                     <Typography variant="h5">{Math.round(cities.wind)}mph</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary"><NavLink>View</NavLink></Button>
                      <Button size="small" color="primary">Refresh</Button>
                      <Button size="small" color="primary" onClick={() => deleteCity(cities.id)}>Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
