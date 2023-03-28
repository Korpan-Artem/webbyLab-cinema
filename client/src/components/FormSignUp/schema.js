import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short!')
        .email()
        .required('Required'),
    password: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    confirmPassword: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
})


export const validationSchemaLogIn = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Required'),
    password: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
})
