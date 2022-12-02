import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from "axios"
import { Container, Typography } from "@mui/material";
// import { makeStyles } from"@mui/styles"

// const useStyles = makeStyles((theme) => ({
  
// })) 


function HomePage() {
    // const classes = useStyles();

    const [city, setCity] = useState('');
    const [listCity, setListCity] = useState([]);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=545ae3ab5fa66fd646fb60c5f9658236`;
    
    const searchCity = (event) => {
        if (city) {
            if (event.key === 'Enter') {
                axios.get(url).then((response) => {
                    setListCity(old => [...old, response.data]);
                    console.log(response.data);
                })
                setCity('');
            }
        }
    }

    return (
        <>
            <Stack spacing={2} sx={{ width: 300 }}>
                <TextField
                    label="Search input"
                    value={city}
                    onKeyPress={searchCity}
                    onChange={(event) => setCity(event.target.value)}
                />
            </Stack>
            <div >
              <Container maxWidth="sm">
                <Typography align="center" variant="h2" color="textPrimary">Allo Front-End</Typography>
              </Container>
            </div>
            {
                !!listCity && listCity.map((item, index) => (
                    <div key={index}>
                        <div>{item.name}</div>
                        {!!item.main && (
                            <div>{Math.round(item.main.temp)} C</div>
                        )}
                        <div>12mph</div>
                    </div>
                ))
            }

        </>
    );
}

export default HomePage;
