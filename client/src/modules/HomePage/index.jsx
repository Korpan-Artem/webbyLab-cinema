import React, { useState } from "react";
import CardMovie from "../../components/CardMovie";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import FormSignUp from "../../components/FormSignUp";
import { queryAllMovies } from "../../components/FormAddMovie/query";
import { updateMovies } from "../../store/movieActions";
import FormAddMovie from "../../components/FormAddMovie";
import ModalMovie from "../../components/ModalMovie";
import { useEffect } from "react";

function HomePage() {

  const [movie, setMovie] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState('');
  const dispatch = useDispatch()

  const listMovies = useSelector(state => state.movies.movies)
  const token = useSelector(state => state.users.user.token)

  const filteredMovies = !!listMovies && listMovies.filter(item => {
    return (
      !!item.title && item.title.toLowerCase().includes(movie.toLowerCase())
      // !!item.movie.actor && item.movie.actors.join(', ').toLowerCase().includes(movie.toLowerCase())
    )
  })
  
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const sortByTitle = async (order) => {
      let movies;
      setSort(order);
      movies = await queryAllMovies(order, token);
      movies = JSON.parse(movies);
      dispatch(updateMovies(movies));
  }

  useEffect(() => {
    if(token){
      sortByTitle('ASC')
    }
  },[])

  return (
    <>
      <Header />
      {
        token ? (
          <div>
            <div className='box-input'>
              <input
                placeholder='Search movies..'
                className='input-search'
                value={movie}
                onChange={(event) => setMovie(event.target.value)}
              />
              <span className='btn-add' onClick={toggleModal}></span>
            </div>
            <div className='sort-box'>
              <div className='sort-content'>
                <div className='sort-item sort-item-main'>Sort by</div>
                <div className={sort === "ASC" ? `sort-item sort-item-sub active` : `sort-item sort-item-sub`} onClick={() => sortByTitle("ASC")}>Alphabet ↓</div>
                <div className={sort === "DESC" ? `sort-item sort-item-sub active` : `sort-item sort-item-sub `} onClick={() => sortByTitle("DESC")}>Alphabet ↑</div>
              </div>
            </div>
            <div >
              <CardMovie movies={filteredMovies} />
              <ModalMovie active={showModal} setActive={setShowModal}><FormAddMovie id={123} setActive={setShowModal}/></ModalMovie>
            </div>
          </div>
        ) : (
          <FormSignUp />
        )
      }

    </>
  );
}

export default HomePage;
