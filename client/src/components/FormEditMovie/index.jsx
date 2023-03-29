import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { updateOneMovie } from '../../store/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { queryUpdateMovie } from '../FormAddMovie/query';
import { validationSchema } from '../FormAddMovie/schema';


function FormEditMovie({ currentMovie, setActive }) {
    const token = useSelector(state => state.users.user.token)
    const dispatch = useDispatch();

    const [isSuccessfullyAdded, setIsSuccessfullyAdded] = useState(false);
    const [validation, setValidation] = useState(false);
    const [isExist, setIsExist] = useState(false);

    const update = async (values, resetForm) => {
        values.actors = values.actors.split(",");
        values.year = Number(values.year);

        let movie = await queryUpdateMovie(values, currentMovie.id, token);
        movie = JSON.parse(movie);

        if (movie?.error?.code === 'NOT_UNIQUE') {
            setIsExist(true);
            setTimeout(() => {
                setIsExist(false);
            }, 2000);
            setValidation(false);
        } else {
            dispatch(updateOneMovie(movie.data));
            setIsSuccessfullyAdded(true);

            setTimeout(() => {
                setIsSuccessfullyAdded(false);
            }, 2000);
            setTimeout(() => {
                setActive(false);
            }, 1000);

            setValidation(false);
            resetForm();
        }
    }

    return (
        <div className='add-movie-box'>
            {
                isSuccessfullyAdded ? (
                    <div>The updating was successful!</div>
                ) : (
                    <Formik
                        initialValues={{
                            title: currentMovie.title,
                            year: currentMovie.year,
                            format: currentMovie.format,
                            actors: ''
                        }}
                        onSubmit={(values, { resetForm }) => {
                            update(values, resetForm)
                        }}
                        validationSchema={validationSchema}
                    >
                        {({ errors }) => (
                            <Form>
                                <div className='add-box'>
                                    <div className='add-file-movie'>
                                        <p>Edit Movie (ID:{currentMovie.id})</p>
                                    </div>
                                    {(errors.title || errors.year || errors.format || errors.actors) && validation ? (
                                        <div className='error-message'>Wrong data</div>
                                    ) : null}
                                    {
                                        isExist ? (
                                            <div className='error-message'>Movie is already exist</div>
                                        ) : null
                                    }
                                    <Field
                                        placeholder='Name movie..'
                                        className='input-name-movie'
                                        name='title'
                                    />
                                    <div className='small-input-movie'>
                                        <Field
                                            placeholder='Year'
                                            className='input-year'
                                            name='year'
                                        />
                                        <Field as='select' className='input-format' name='format'>
                                            <option value="DVD">DVD</option>
                                            <option value="VHS">VHS</option>
                                            <option value="Blu-Ray">Blu-ray</option>
                                        </Field>
                                    </div>
                                    <Field
                                        placeholder='Actors..'
                                        className='textarea-actors'
                                        name='actors'
                                    />
                                    <button className='btn-submit' type='submit' onClick={() => setValidation(true)}>Edit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )}
        </div>
    )

}
export default FormEditMovie;