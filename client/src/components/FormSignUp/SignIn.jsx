import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { validationSchemaLogIn } from './schema';


function SignIn({ loginUser, correctData }) {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={async (values, { resetForm }) => {
                loginUser(values, "sessions");
                // resetForm();
            }}
            validationSchema={validationSchemaLogIn}
        >
            {({ errors }) => (
                <Form>
                    <div className='add-box'>
                        {errors.email || errors.password ? (
                            <div className='error-message'>Wrong data</div>
                        ) : null}
                        {!correctData ? <div className='error-message'>Wrong email or password</div> :
                            null
                        }
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
            )}
        </Formik>
    )
}
export default SignIn;