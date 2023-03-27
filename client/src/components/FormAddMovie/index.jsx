import React from 'react';
import { Formik, Field, Form } from 'formik';
import { addMovie } from "../../store/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { queryAddMovie, queryImportMovies } from './query';
import { validationSchema } from './schema';


function FormAddMovie({ setActive }) {
    const token = useSelector(state => state.users.user.token)
    const dispatch = useDispatch();

    const add = async (values) => {
        values.actors = values.actors.split(",");
        values.year = Number(values.year);
        let movie = await queryAddMovie(values, token);
        movie = JSON.parse(movie)
        dispatch(addMovie(movie.data));
    }

    async function handleFileInput(event) {
        const file = event.target;
        let movies = await queryImportMovies(file, token);
        movies = JSON.parse(movies);
        setActive(false)
        movies.data.map((item) => {
            dispatch(addMovie(item));
        })
    }

    return (
        <div className='add-movie-box'>
            <Formik
                initialValues={{
                    title: '',
                    year: '',
                    format: '',
                    actors: [],
                }}
                onSubmit={(values, { resetForm }) => {
                    add(values)
                    setActive(false)
                    resetForm();
                }}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className='add-box'>
                        <div className='add-file-movie'>
                            <p>Add Movie</p>
                            <div>
                                <input
                                    type="file"
                                    id="file"
                                    title=""
                                    className="custom-file-input"
                                    placeholder="Add file with movie"
                                    onChange={(event) => handleFileInput(event)}
                                />
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
                        <button className='btn-submit' type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )

}
export default FormAddMovie;