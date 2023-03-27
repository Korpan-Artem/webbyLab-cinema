import React, { useState } from "react";
import CardMovie from "../../components/CardMovie";
import Modal from "../../components/ Modal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "../../components/Header";
import FormSignUp from "../../components/FormSignUp";
import { queryAllMovies } from "../../components/FormAddMovie/query";

function HomePage() {

  const [movie, setMovie] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()

  const listMovies = useSelector(state => state.movies.movies)
  const token = useSelector(state => state.users.user.token)
  // const dispatch = useDispatch();

  // console.log(listMovies[0].movie.actors);

  const filteredMovies = !!listMovies && listMovies.filter(item => {
    return (
      !!item.movie.title && item.movie.title.toLowerCase().includes(movie.toLowerCase()) ||
      !!item.movie.actor && item.movie.actors.join(', ').toLowerCase().includes(movie.toLowerCase())
    )
  })

  const toggleModal = () => {
    setShowModal(!showModal)
  }



  useEffect(() => {
  }, [])
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
              <div className={`sort-item sort-item-sub active`}>Alphabet ↓</div>
              <div className={`sort-item sort-item-sub active`}>Alphabet ↑</div>
            </div>
          </div>
          <div >
            <CardMovie movies={filteredMovies}/>
            {!!showModal && <Modal active={showModal}></Modal>}
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
