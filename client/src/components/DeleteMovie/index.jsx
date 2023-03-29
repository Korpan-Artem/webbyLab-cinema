import * as React from 'react';


const DeleteMovie = ({ setDelete })  => {

    return (
        <>
            <p>Are you sure you want to delete this movie?</p>
            <button className='btn-submit' onClick={() => setDelete(true)}>Yes!</button>
        </>
    )
}
export default DeleteMovie;