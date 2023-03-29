import React, { useEffect, useState } from 'react';
import { queryOneMovie, queryRemoveMovie } from '../FormAddMovie/query';
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../../store/movieActions";
import ModalConfirmation from '../ModalConfirmation';
import FormEditMovie from "../FormEditMovie";
import ModalMovie from '../ModalMovie';
import edit from '../../images/edit.svg'
import DeleteMovie from '../DeleteMovie';



const CardItem = ({ movie }) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.users.user.token);
    const movies = useSelector(state => state.movies.movies)

    const [actors, setActors] = useState();
    const [listActors, setListActors] = useState([]);
    const [modal, setModal] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false)

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

    const handlerClick = () => {
        setIsDeleted(false);
        setConfirmModal(true);
    }

    useEffect(() => {
        setActors(false)
    }, [movies]);

    useEffect(() => {
        if (isDeleted) {
            deleteCity(movie.id);  
            setConfirmModal(false);
        }
        
    }, [isDeleted])

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
                    <button className="btn-delete" onClick={() => handlerClick()}></button>
                    <div className='btn-edit' onClick={() => setModal(true)}><img src={edit} alt="edit" /></div>
                </div>

            </div>
            <ModalMovie active={modal} setActive={setModal}><FormEditMovie currentMovie={movie} setActive={setModal} listActors={listActors}/></ModalMovie>
            <ModalConfirmation active={confirmModal} setActive={setConfirmModal} >
                <DeleteMovie setDelete={setIsDeleted} />
            </ModalConfirmation>
        </>
    )

}
export default CardItem;