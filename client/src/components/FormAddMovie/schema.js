import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    year: Yup.number()
        .min(1900)
        .max(2021)
        .required('Required'),
    format: Yup.string()
        .oneOf(['DVD', 'VHS', 'Blu-ray'])
        .required('Required'),
    actors: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
})