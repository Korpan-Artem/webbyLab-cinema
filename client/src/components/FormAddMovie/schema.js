import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    title: Yup.string()
        .matches(/^[^\s][a-zA-Z0-9\s]*$/)
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    year: Yup.number()
        .min(1900)
        .max(2021)
        .required('Required'),
    actors: Yup.string()
        .matches(/^[^\s][a-zA-Z0-9\s,-]*$/)
        .min(2, 'Too Short!')
        .required('Required')
        .nullable(),
})