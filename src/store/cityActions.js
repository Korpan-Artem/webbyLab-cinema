import { createSlice } from "@reduxjs/toolkit";

const sliceCity = createSlice({
    name: 'todos',
    initialState: {
        cities: []
    },
    reducers: {
        addCity(state, action) {
            const currentCity = state.cities.find(
                item => item.city.id === action.payload.id
            )
            if(currentCity) {
                console.log(currentCity.city.name + " is already");
            } else {
                state.cities.push({
                    city:  action.payload,
                })
            }
            
        },
        removeCity(state, action) {
            state.cities = state.cities.filter(item => item.city.id !== action.payload)
        },
        refreshCity(state, action) {
            let currentCity;
            console.log(action);
            currentCity = state.cities.findIndex(
                item => item.city.id == action.payload.id
            )
            console.log(currentCity);
            if(currentCity >= 0) {
                state.cities[currentCity] = {
                    city: action.payload
                }
            }
            
        },
    }
})

export const {addCity, removeCity, refreshCity} = sliceCity.actions;

export default sliceCity.reducer;