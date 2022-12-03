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
                city:  action.payload,
                
            })
        },
        removeCity(state, action) {
            state.cities = state.cities.filter(item => item.city.id !== action.payload)
        },
        refreshCity(state, action) {
            console.log(action);
            const currentCity = state.cities.findIndex(
                item => item.city.id === action.payload.id
            )
            state.cities[currentCity] = {
                city: action.payload
            }
            const allo = {
                city: action.payload
            }
            console.log("allo",allo);
        },
    }
})

export const {addCity, removeCity, refreshCity} = sliceCity.actions;

export default sliceCity.reducer;