import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { signUpAction } from '../../store/userActions';
import { useDispatch } from "react-redux";
import { validationSchema } from './schema';
import { signUp } from './query';






function FormSignUp() {
    const [user, setUser] = useState('');
    const [login, setLogin] = useState();
    const dispatch = useDispatch();

    const addUser = async (values) => {
        let token = await signUp(values, "users")
        setUser(token);
        dispatch(signUpAction(user))
    }

    const loginUser = async (values) => {
        let token = await signUp(values, "sessions")
        setUser(token);
        dispatch(signUpAction(user))
    }

    useEffect(() => {

    }, [])

    return (
        <div className='add-movie-box'>
            {
                !!login ? (
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={async (values, { resetForm }) => {
                            loginUser(values)
                            resetForm();
                        }}
                    // validationSchema={validationSchema}
                    >
                        <Form>
                            <div className='add-box'>
                                <Field
                                    placeholder='Email'
                                    className='input-name-movie'
                                    name="email"
                                />
                                <Field
                                    placeholder='Password'
                                    className='input-name-movie'
                                    type="password"
                                    name="password"
                                />
                                <button className='btn-submit' type="submit">Sing In</button>
                            </div>
                        </Form>
                    </Formik>
                ) : (
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            name: '',
                            confirmPassword: '',
                        }}
                        onSubmit={async (values, { resetForm }) => {
                            addUser(values)
                            resetForm();
                        }}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <div className='add-box'>
                                <Field
                                    placeholder='Email'
                                    className='input-name-movie'
                                    name="email"
                                />
                                <Field
                                    placeholder='Name'
                                    className='input-name-movie'
                                    type="text"
                                    name="name"
                                />
                                <Field
                                    placeholder='Password'
                                    className='input-name-movie'
                                    type="password"
                                    name="password"
                                />
                                <Field
                                    placeholder='Confirm password'
                                    className='input-name-movie'
                                    type="password"
                                    name="confirmPassword"
                                />
                                <button className='btn-submit' type="submit">Sing Up</button>
                               
                            </div>

                        </Form>
                    </Formik>
                )
            }
             {
                                    !!login ? (
                                        <div onClick={() => setLogin(!login)} className="change-login">
                                            Sign Up
                                        </div>
                                    ) : (
                                        <div onClick={() => setLogin(!login)} className="change-login">
                                            Log in
                                        </div>
                                    )
                                }
        </div>
    )

}
export default FormSignUp;