import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { removeMovie } from "../../store/movieActions";
import { queryOneMovie, queryRemoveMovie } from '../FormAddMovie/query';
import edit from '../../images/edit.svg'
import ModalMovie from '../ModalMovie';
import FormEditMovie from "../FormEditMovie";
import { useEffect } from 'react';


const CardItem = ({ movie }) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.users.user.token);
    const movies = useSelector(state => state.movies.movies)

    const [actors, setActors] = useState();
    const [listActors, setListActors] = useState([]);
    const [modal, setModal] = useState(false)

    const deleteCity = (id) => {
        queryRemoveMovie(id, token);
        dispatch(removeMovie(id))
    }

    const getMoreInfo = async (id) => {
        let movie = await queryOneMovie(id, token);
        movie = JSON.parse(movie);
        setListActors(movie.data.actors)
        setActors(true);
    }

    useEffect(() => {
        setActors(false)
    },[movies]);

    return (
        <>
            <div
                className='card-item'
            >
                <div className='card-item-content'>
                    <p className='title'>{movie.title} ({movie.year})</p>
                    <div>
                        <p>
                            {actors ? (
                                !!listActors && listActors.map((item, index) => (
                                    <span key={index}>{`${item.name},`}</span>
                                ))
                            ) : (
                                ""
                            )}
                        </p>
                        {actors ? (
                            <button type='button' className='more-info' onClick={() => setActors(false)}>Close</button>
                        ) : (
                            <button type='button' className='more-info' onClick={() => getMoreInfo(movie.id)}>Show actors</button>
                        )}
                    </div>
                    <div className='card-item-content-bottom'>
                        <p>Format: {movie.format}</p>
                        <p>ID: {movie.id}</p>
                    </div>
                </div>
                <div>
                    <button className="btn-delete" onClick={() => deleteCity(movie.id)}></button>
                    <div className='btn-edit' onClick={() => setModal(true)}><img src={edit} alt="edit" /></div>
                </div>

            </div>
            <ModalMovie active={modal} setActive={setModal}><FormEditMovie id={movie.id} setActive={setModal}/></ModalMovie>
        </>
    )

}
export default CardItem;