import { createSlice } from "@reduxjs/toolkit";

const moviesList = createSlice({
    name: 'todos',
    initialState: {
        movies: [],
        status: 0
    },
    reducers: {
        addMovie(state, action) {
            const currentMovie = !!state.movies && state.movies.find(
                item => item.title == action.payload.title
            )
            if(currentMovie) {
                console.log(currentMovie.title + " is already");
            } else {
                state.movies.push(
                    action.payload,
                )
            }
        },
        removeMovie(state, action) {
            state.movies = state.movies.filter(item => item.id !== action.payload)
        },
        updateMovies(state, action) {
            state.movies = []
            action.payload.data.map(item => {
                state.movies.push(item)
            })
        },
        updateOneMovie(state, action) {
            const existMovie = !!state.movies && state.movies.find(
                item => item.title == action.payload.title
            )
            if(!existMovie) {
                const currentMovie = state.movies.findIndex(item => item.id === action.payload.id)
                state.movies[currentMovie] = action.payload;
            }
        }
    }
})

export const { addMovie, removeMovie, updateMovies, updateOneMovie } = moviesList.actions;

export default moviesList.reducer;