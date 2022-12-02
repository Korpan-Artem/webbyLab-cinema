import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"



function CityPage() {

    const { id } = useParams();
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=545ae3ab5fa66fd646fb60c5f9658236`;
    const [selectCity, setSelectCity] = useState();
    const searchCity = () => {
        if (id) {
            axios.get(url).then((response) => {
                setSelectCity(response.data);
            })
        }
    }
    useEffect(() => {
        searchCity();
    },[])
    return (
        <div>
            {!!selectCity && (
                <>
                 <h2>{selectCity.name}</h2>
                 <h3>{Math.round(selectCity.main.temp)} °C</h3>
                 <h3>{Math.round(selectCity.wind.speed)}mph</h3>
                 </>
            )}
           
        </div>
    );
}

export default CityPage;
