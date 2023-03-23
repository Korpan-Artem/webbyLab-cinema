import { createSlice } from "@reduxjs/toolkit";

const moviesList = createSlice({
    name: 'todos',
    initialState: {
        cities: []
    },
    reducers: {
        addMovie(state, action) {
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
        removeMovie(state, action) {
            state.cities = state.cities.filter(item => item.city.id !== action.payload)
        },
    }
})

export const {addMovie, removeMovie} = moviesList.actions;

export default moviesList.reducer;