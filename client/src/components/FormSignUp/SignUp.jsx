import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { validationSchema } from './schema';


function SignUp({ loginUser, correctData }) {
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
                // resetForm();
            }}
            validationSchema={validationSchema}
        >
            {({ errors }) => (
                <Form>
                    <div className='add-box'>
                        {errors.email || errors.password ? (
                            <div className='error-message'>Wrong data</div>
                        ) : null}
                         {!correctData ? <div className='error-message'>Perhaps this email is busy or the passwords do not match.</div> :
                            null
                        }
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
            )}
        </Formik>
    )
}
export default SignUp;