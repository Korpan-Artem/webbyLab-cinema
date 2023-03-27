import * as React from 'react';
import { useState } from 'react';
import FormAddMovie from '../FormAddMovie';




const Modal = (active=false, token) =>  {

    const [show, setShow] = useState(active);
    return (
        <>
            <div className={show ? "modal active" : "modal"} onClick={() => setShow(false)}>
                <div className='modal-content' onClick={(e) =>  e.stopPropagation()}>
                    <FormAddMovie/>
                </div>
            </div>
        </>
    )

}
export default Modal;