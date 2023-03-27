import React, { useEffect, useState } from "react";
import { queryAllMovies, querySearchMovie } from "../../components/FormAddMovie/query";
import { useSelector, useDispatch } from "react-redux";
import { updateMovies } from "../../store/movieActions";
import FormAddMovie from "../../components/FormAddMovie";
import ModalMovie from "../../components/ModalMovie";
import FormSignUp from "../../components/FormSignUp";
import CardMovie from "../../components/CardMovie";
import Header from "../../components/Header";


function HomePage() {

  const [movie, setMovie] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [listMovies, setListMovies] = useState([]);
  const [sort, setSort] = useState('');
  const dispatch = useDispatch()

  const list = useSelector(state => state.movies.movies)
  const token = useSelector(state => state.users.user.token)

  const searchMovies = async () => {
    let moviesToTitle = await querySearchMovie(movie, 'title', token);
    let moviesToActors = await querySearchMovie(movie, 'actor', token);

    moviesToTitle = JSON.parse(moviesToTitle).data
    moviesToActors = JSON.parse(moviesToActors).data

    const movies = moviesToTitle.concat(moviesToActors);
    setListMovies(movies);
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const sortByTitle = async (order) => {
    if (movie.length > 3) return;

    let movies;
    setSort(order);
    movies = await queryAllMovies(order, token);
    movies = JSON.parse(movies);
    dispatch(updateMovies(movies));
  }

  useEffect(() => {
    if (token) {
      sortByTitle('ASC')
    }
    setListMovies(list);
  }, [])

  useEffect(() => {
    if (movie.length > 3) {
      searchMovies();
    }
  }, [movie])

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
              <CardMovie movies={movie.length > 3 ? listMovies : list} />
              <ModalMovie active={showModal} setActive={setShowModal}><FormAddMovie id={123} setActive={setShowModal} /></ModalMovie>
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
