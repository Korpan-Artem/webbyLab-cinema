import * as React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#000',
    width: '400px',
    height: '300px'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


function ModalItem() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <>
            <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p> ADD ITEM </p>
        <input
            placeholder='Name movie'
            className=''
            // value={city}
            // onKeyPress={(event) => add(event,city)}
            // onChange={(event) => setCity(event.target.value)}
          />
          <input
            placeholder='Year'
            className=''
            // value={city}
            // onKeyPress={(event) => add(event,city)}
            // onChange={(event) => setCity(event.target.value)}
          />
          <input
            placeholder='Format'
            className=''
            // value={city}
            // onKeyPress={(event) => add(event,city)}
            // onChange={(event) => setCity(event.target.value)}
          />
          <textarea
            placeholder='Actors..'
            className='input-search'
            // value={city}
            // onKeyPress={(event) => add(event,city)}
            // onChange={(event) => setCity(event.target.value)}
          />
          <a href="" className=''>Add movie</a>
      </Modal>
        </>
    )

}
export default ModalItem;