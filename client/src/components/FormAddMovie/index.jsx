import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { addMovie } from "../../store/movieActions";
import { useDispatch } from "react-redux";
import { readFileAsString, readFile } from "../../hooks"

function FormAddMovie() {
    const [moviesList, setMoviesList] = useState('');
    const dispatch = useDispatch();

    const add = (values) => {
        console.log('add', values);
        values.id = Math.trunc(Math.random() * (100000 - 10000) + 10000);
        dispatch(addMovie(values));
        values = {}
    }

    let objWithMovies = [];

    async function handleFileInput(event) {
        const file = event.target.files[0];
        readFileAsString(file, (fileString, error) => {
            if (error) {
                console.error(error);
            } else {
                setMoviesList(fileString);
            }
        });
    }

    const addFileMovies = () => {
        for(let i = 0;i < objWithMovies.length;i++) {
            add(objWithMovies[i])
        }
    }

    useEffect(() => {
        objWithMovies = readFile(moviesList)
        addFileMovies();
    }, [moviesList])


    return (
        <div className='add-movie-box'>
            <Formik
                initialValues={{
                    title: '',
                    releaseYear: '',
                    format: '',
                    stars: ''
                }}
                onSubmit={(values) => {
                    console.log("onsubmit", values);
                    add(values)
                }}
            >
                <Form>
                    <div className='add-file-movie'>
                        <p>Add Movie</p>
                        <div>
                            <input type="file" id="file" placeholder="Add file with movie" onChange={(event) => handleFileInput(event)} />
                        </div>
                    </div>
                    <Field
                        placeholder='Name movie..'
                        className='input-name-movie'
                        name="title"
                    />
                    <div className="small-input-movie">
                        <Field
                            placeholder='Year'
                            className='input-year'
                            name="releaseYear"
                        />
                        <Field
                            placeholder='Format'
                            className='input-format'
                            name="format"
                        />
                    </div>
                    <Field
                        placeholder='Actors..'
                        className='textarea-actors'
                        name="stars"
                    />
                    <button className='btn-submit' type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )

}
export default FormAddMovie;