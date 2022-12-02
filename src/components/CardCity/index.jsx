import * as React from 'react';
import { Button, Card, CardActions, CardContent, Grid,Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeCity } from "../../store/cityActions";


const CardCity = () => {
  const listCity = useSelector(state => state.cities)
  const dispatch = useDispatch();
  const deleteCity = (id) => {
    dispatch(removeCity(id))
  }
  return (
    <Container maxWidth="sm">
      <Grid container spacing={4}>
        {
          listCity.cities.length > 0 && listCity.cities.map((cities, index) => (
            <Grid key={index} item justifyContent="center" xs={12} sm={6} md={4}>
              <Card color="primary">
                <CardContent className="card-item">
                  <Typography variant="h4">{cities.city.name}</Typography>
                  {!!cities.city.main && (
                    <Typography variant="h5">{Math.round(cities.city.main.temp)} °C</Typography>
                  )}
                  <Typography variant="h5">{Math.round(cities.city.wind.speed)} mph</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary"><NavLink to={`/${cities.city.id}`}>View</NavLink></Button>
                  <Button size="small" color="primary">Refresh</Button>
                  <Button size="small" color="primary" onClick={() => deleteCity(cities.city.id)}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )

}
export default CardCity;