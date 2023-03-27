import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { validationSchemaLogIn } from './schema';


function SignUp({ loginUser }) {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                name: '',
                confirmPassword: '',
            }}
            onSubmit={async (values, { resetForm }) => {
                loginUser(values, "users")
                resetForm();
            }}
            validationSchema={validationSchemaLogIn}
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
export default SignUp;