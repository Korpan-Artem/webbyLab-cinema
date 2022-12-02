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
        // refreshCity(state, action) {},
    }
})

export const {addCity, removeCity} = sliceCity.actions;

export default sliceCity.reducer;