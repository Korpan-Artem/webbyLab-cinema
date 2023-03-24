import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { addMovie } from "../../store/movieActions";
import { useDispatch } from "react-redux";
import { readFile } from "../../hooks"

function FormAddMovie() {

    const dispatch = useDispatch();
    const add = (values) => {
        console.log('add', values);
        dispatch(addMovie(values));
    }

    return (
        <div className='add-movie-box'>
            <Formik
                initialValues={{
                    title: '',
                    releaseYear: '',
                    format: '',
                    stars: ''
                }}
                onSubmit={async (values) => {
                    console.log("onsubmit", values);
                    add(values)
                }}
            >
                <Form>
                    <div className='add-file-movie'>
                        <p>Add Movie</p>
                        <div>
                            <input type="file"  id="file" placeholder="Add file with movie" />
                            <a href="#" className="btn-add-file" onClick={() => readFile()}>Add file</a>
                        </div>
                    </div>
                    <Field
                        placeholder='Name movie..'
                        className='input-name-movie'
                        name="title"
                    //   value={city}
                    // onKeyPress={(event) => add(event,city)}
                    // onChange={(event) => setCity(event.target.value)}
                    />
                    <div className="small-input-movie">
                        <Field
                            placeholder='Year'
                            className='input-year'
                            name="releaseYear"
                        // value={city}
                        // onKeyPress={(event) => add(event,city)}
                        // onChange={(event) => setCity(event.target.value)}
                        />
                        <Field
                            placeholder='Format'
                            className='input-format'
                            name="format"
                        // value={city}
                        // onKeyPress={(event) => add(event,city)}
                        // onChange={(event) => setCity(event.target.value)}
                        />
                    </div>
                    <Field
                        placeholder='Actors..'
                        className='textarea-actors'
                        name="stars"
                    //   value={city}
                    // onKeyPress={(event) => add(event,city)}
                    // onChange={(event) => setCity(event.target.value)}
                    />
                    <button className='btn-submit' type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )

}
export default FormAddMovie;