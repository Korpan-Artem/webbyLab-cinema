import { createSlice } from "@reduxjs/toolkit";

const sliceCity = createSlice({
    name: 'todos',
    initialState: {
        cities: []
    },
    reducers: {
        addCity(state, action) {
            console.log(state);
            console.log(action);
            state.cities.push({
                id:  action.payload.id,
                name: action.payload.name,
                temp: action.payload.main.temp,
                wind: action.payload.wind.speed
            })
        },
        removeCity(state, action) {
            console.log(action.payload);
            state.cities = state.cities.filter(city => city.id !== action.payload)
        },
        // refreshCity(state, action) {},
    }
})

export const {addCity, removeCity} = sliceCity.actions;

export default sliceCity.reducer;