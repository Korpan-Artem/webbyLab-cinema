import { createSlice } from "@reduxjs/toolkit";

const moviesList = createSlice({
    name: 'todos',
    initialState: {
        movies: [],
        status: 0
    },
    reducers: {
        addMovie(state, action) {
            console.log(action);
            const currentCity = !!state.movies && state.movies.find(
                item => item.movie.id == action.payload.id
            )
            console.log('current',currentCity)
            if(currentCity) {
                console.log(currentCity.movie.title + " is already");
            } else {
                state.movies.push({
                    movie:  action.payload,
                })
            }
        },
        removeMovie(state, action) {
            state.movies = state.movies.filter(item => item.movie.id !== action.payload)
        },
        
    }
})

export const { addMovie, removeMovie } = moviesList.actions;

export default moviesList.reducer;