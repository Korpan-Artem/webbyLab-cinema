import React, { useEffect} from "react";
import { useParams } from "react-router-dom"
import { Card, CardActions, CardContent,Button, Grid, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios"
import {  useDispatch } from "react-redux";
import temperature from "../../images/temperature.png";
import wind from "../../images/wind.png";
import humidity from "../../images/humidity.png";
import cloud from "../../images/cloud.png";
import { refreshCity } from "../../store/cityActions"

function CityPage() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=545ae3ab5fa66fd646fb60c5f9658236`;

  const listCity = useSelector(state => state.cities)
  const currentCity = listCity.cities.find(item => item.city.id == id);

  const refresh = () => {
    axios.get(url).then((response) => {
      dispatch(refreshCity(response.data));
    })
  }

  useEffect(() => {
    refresh();
  },[])

  return (
    <div className="card-page">
      <Container maxWidth="xs">
        <Grid container spacing={4}>
          <Grid item justifyContent="center" xs={12} sm={12} md={12}>
            <Card color="primary" sx={{ bgcolor: 'primary.main' }}>
              {!!currentCity && (
                <CardContent className="card-item">
                  <Typography variant="h4" gutterBottom align="center" fontSize={"20"}>{currentCity.city.sys.country}, {currentCity.city.name}</Typography> 
                  <div className="box-image-sun">
                    <img className="sun-image" src={cloud} alt="sun"/>
                  </div>
                  <Typography variant="h5" gutterBottom align="center">{currentCity.city.weather[0].main}</Typography>   
                  <Typography variant="h5" gutterBottom align="center">{Math.round(currentCity.city.main.temp)} °C</Typography>
                  <div className="extra-info">
                    <Typography variant="h5" gutterBottom align="center"><img src={temperature}/> {Math.round(currentCity.city.main.feels_like)} °C</Typography>
                    <Typography variant="h5" gutterBottom align="center"><img src={wind}/> {Math.round(currentCity.city.wind.speed)}mph</Typography>
                    <Typography variant="h5" gutterBottom align="center"><img src={humidity}/> {currentCity.city.main.humidity}%</Typography>
                  </div>
                  
                </CardContent>
              )}
              <CardActions>
                <Button size="small" color="warning" onClick={() => refresh()}>Refresh</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CityPage;
