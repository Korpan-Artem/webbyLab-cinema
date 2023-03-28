import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { updateOneMovie } from "../../store/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { queryUpdateMovie } from '../FormAddMovie/query';
import { validationSchema } from '../FormAddMovie/schema';


function FormEditMovie({ id, setActive }) {
    const token = useSelector(state => state.users.user.token)
    const dispatch = useDispatch();

    const add = async (values,resetForm) => {
        console.log("on fn",values);
        values.actors = values.actors.split(",");
        values.year = Number(values.year);
        let movie = await queryUpdateMovie(values, id, token);
        movie = JSON.parse(movie)
        console.log(movie);
        dispatch(updateOneMovie(movie.data));
        setActive(false)
        resetForm();
      
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
                    console.log("on sub",values);
                    add(values,resetForm)
                }}
                validationSchema={validationSchema}
            >
                {({ errors }) => (
                    <Form>
                        <div className='add-box'>
                            <div className='add-file-movie'>
                                <p>Edit Movie (ID:{id})</p>
                            </div>
                            {errors.title || errors.year || errors.format || errors.actors ? (
                                <div className='error-message'>Wrong data</div>
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
                            <button className='btn-submit' type="submit">Edit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )

}
export default FormEditMovie;