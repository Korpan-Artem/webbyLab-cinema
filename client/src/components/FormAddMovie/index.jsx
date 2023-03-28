import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { addMovie } from "../../store/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { queryAddMovie, queryImportMovies } from './query';
import { validationSchema } from './schema';


function FormAddMovie({ setActive }) {
    const token = useSelector(state => state.users.user.token)
    const dispatch = useDispatch();

    const [correctData, setCorrectData] = useState(true);

    const add = async (values, resetForm) => {
        values.actors = values.actors.split(",");
        values.year = Number(values.year);
        let movie = await queryAddMovie(values, token);
        movie = JSON.parse(movie)
        dispatch(addMovie(movie.data));
        setActive(false)
        resetForm();
    }

    async function handleFileInput(event) {
        const file = event.target;
        let movies = await queryImportMovies(file, token);
        movies = JSON.parse(movies);
        if(!movies.error) {
            movies.data.map((item) => {
                dispatch(addMovie(item));
            })
            setActive(false)
        } else {
            setCorrectData(false);
        }
    }

    return (
        <div className='add-movie-box'>
            <Formik
                initialValues={{
                    title: '',
                    year: '',
                    format: '',
                    actors: [],
                    file: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    add(values, resetForm)
                }}
                validationSchema={validationSchema}
            >
                {({ errors }) => (
                    <Form>
                        <div className='add-box'>
                            <div className='add-file-movie'>
                                <p>Add Movie</p>
                                <div>
                                    <input
                                        type="file"
                                        id="file"
                                        name="file"
                                        className="custom-file-input"
                                        placeholder="Add file with movie"
                                        onChange={(event) => handleFileInput(event)}
                                    />
                                </div>
                            </div>
                            {errors.title || errors.year || errors.format || errors.actors ? (
                                <div className='error-message'>Wrong data</div>
                            ) : null}
                            {!correctData? (
                                <div className='error-message'>File is not correct</div>
                            ) : null}
                            <Field
                                placeholder='Name movie..'
                                className='input-name-movie'
                                name="title"
                            />
                            <div className="small-input-movie">
                                <Field
                                    placeholder='Year'
                                    className='input-year'
                                    name="year"
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
                                name="actors"
                            />
                            <button className='btn-submit' type="submit">Add</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )

}
export default FormAddMovie;