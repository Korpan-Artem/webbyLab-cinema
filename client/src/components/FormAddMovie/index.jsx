import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { addMovie } from "../../store/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { queryAddMovie, queryImportMovies } from './query';
import { validationSchema } from './schema';
import { compareArrays } from '../../hooks'


function FormAddMovie({ setActive, setModalConfirmation }) {
    const token = useSelector(state => state.users.user.token)
    let listMovies = useSelector(state => state.movies.movies)

    const dispatch = useDispatch();

    const [correctData, setCorrectData] = useState(true);
    const [validation, setValidation] = useState(false);
    const [isSuccessfullyAdded, setIsSuccessfullyAdded] = useState(false);
    const [isExist, setIsExist] = useState(false);
    const [existsMovie, setExistsMovie] = useState([]);

    const add = async (values, resetForm) => {
        values.actors = values.actors.split(",");
        values.year = Number(values.year);

        let movie = await queryAddMovie(values, token);
        movie = JSON.parse(movie)

        if (movie?.error?.code === 'MOVIE_EXISTS') {
            setIsExist(true);
            setTimeout(() => {
                setIsExist(false);
            }, 2000);
            setValidation(false);
        } else {
            dispatch(addMovie(movie.data));
            setIsSuccessfullyAdded(true);

            setTimeout(() => {
                setIsSuccessfullyAdded(false);
            }, 2000);

            setValidation(false);
            resetForm();
        }
    }




    async function handleFileInput(event) {
        const file = event.target;
        let movies = await queryImportMovies(file, token);
        movies = JSON.parse(movies);
        setExistsMovie(compareArrays(movies.data, listMovies))
        if (!movies.error) {
            movies.data.map((item) => {
                dispatch(addMovie(item));
            })
            setIsSuccessfullyAdded(true);
            setTimeout(() => {
                setIsSuccessfullyAdded(false);
            }, 5000);
            setTimeout(() => {
                setActive(false);
            }, 2000);

        } else {
            setCorrectData(false);
        }
    }



    return (
        <>
            <div className='add-movie-box'>
                {
                    isSuccessfullyAdded ? (
                        <>
                            <div >The addition was successful!</div>
                            {
                                !!existsMovie.length > 0 &&
                                <div className='already-exists'>
                                    Already exists:
                                    <ul>
                                        {
                                            existsMovie.map((item, index) => <li key={index}> "{item.title}", </li>)
                                        }

                                    </ul>
                                </div>
                            }

                        </>
                    ) : (
                        <Formik
                            initialValues={{
                                title: '',
                                year: '',
                                format: 'DVD',
                                actors: '',
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
                                        {(errors.title || errors.year || errors.format || errors.actors) && validation ? (
                                            <>
                                                <div className='error-message'>Wrong data</div>
                                            </>
                                        ) : null}
                                        {
                                            isExist ? (
                                                <div className='error-message'>Movie is already exist</div>
                                            ) : null
                                        }
                                        {!correctData ? (
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
                                            <Field as='select' className='input-format' name='format'>
                                                <option value="DVD">DVD</option>
                                                <option value="VHS">VHS</option>
                                                <option value="Blu-Ray">Blu-Ray</option>
                                            </Field>
                                        </div>
                                        <Field
                                            placeholder='Actors..'
                                            className='textarea-actors'
                                            name="actors"
                                        />
                                        <button className='btn-submit' type="submit" onClick={() => setValidation(true)}>Add</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )
                }

            </div>
        </>
    )

}
export default FormAddMovie;