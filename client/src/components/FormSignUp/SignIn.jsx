import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { validationSchemaLogIn } from './schema';


function SignIn({loginUser}) {
    return (
        <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        onSubmit={async (values, { resetForm }) => {
            loginUser(values,"sessions");
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
                    placeholder='Password'
                    className='input-name-movie'
                    type="password"
                    name="password"
                />
                <button className='btn-submit' type="submit">Sing In</button>
               
            </div>

        </Form>
    </Formik>
    )
}
export default SignIn;