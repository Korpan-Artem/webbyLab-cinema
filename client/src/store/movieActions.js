import { createSlice } from "@reduxjs/toolkit";

const moviesList = createSlice({
    name: 'todos',
    initialState: {
        movies: []
    },
    reducers: {
        addMovie(state, action) {
            const currentCity = !!state.movies && state.movies.find(
                item => item.movie.title == action.payload.title
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
            console.log(action);
            state.movies.map((item) => {
                console.log(item)
            })
            state.movies = state.movies.filter(item => item.movie.title !== action.payload)
        },
    }
})

export const {addMovie, removeMovie} = moviesList.actions;

export default moviesList.reducer;