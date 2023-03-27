import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    year: Yup.string()
        .min(4, 'Too Short!')
        .max(4, 'Too Long!')
        .required('Required'),
    format: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    actors: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
})