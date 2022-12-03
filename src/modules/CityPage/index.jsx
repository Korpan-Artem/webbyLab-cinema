import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import { Card, CardActions, CardContent,Button, Grid, Container, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { refreshCity } from "../../store/cityActions"
import { msToTime } from "../../hooks"



function CityPage() {

  const { id } = useParams();
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=545ae3ab5fa66fd646fb60c5f9658236`;
  const dispatch = useDispatch();
  const listCity = useSelector(state => state.cities)
  const currentCity = listCity.cities.find(item => item.city.id == id);
  const [selectCity, setSelectCity] = useState();

  const  searchCity = async () => {
    if (id) {
       axios.get(url).then((response) => {
        setSelectCity(response.data);
      })
    }
  }

  // searchCity();
    // useEffect(() => {
    //   refresh();
    // }, [])

  const refresh = () => {
    searchCity();
    const newData = selectCity;
    dispatch(refreshCity(newData));
  }
  return (
    <div className="card-page">
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item justifyContent="center" xs={12} sm={12} md={12}>
            <Card color="primary">
              {!!currentCity.city && (
                <CardContent className="card-item">
                  <Typography variant="h4" gutterBottom>{currentCity.city.sys.country},{currentCity.city.name}      </Typography>
                  <Typography variant="h2" gutterBottom>{Math.round(currentCity.city.main.temp)} °C</Typography>
                  <Typography variant="h5" gutterBottom>Feels like: {Math.round(currentCity.city.main.feels_like)} °C</Typography>
                  <Typography variant="h5" gutterBottom>Wind: {Math.round(currentCity.city.wind.speed)}mph</Typography>
                  <Typography variant="h6" gutterBottom>Humidity: {currentCity.city.main.humidity}%</Typography>
                  <div>Sunrise: {msToTime(currentCity.city.sys.sunrise)}</div>
                  <div>{currentCity.city.weather[0].description}</div>
                </CardContent>
              )}
              <CardActions>
                {/* <Button size="small" color="primary"><NavLink to={`/${cities.city.id}`}>View</NavLink></Button> */}
                <Button size="small" color="primary" onClick={() => refresh()}>Refresh</Button>
                {/* <Button size="small" color="primary" onClick={() => deleteCity(cities.city.id)}>Delete</Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CityPage;
