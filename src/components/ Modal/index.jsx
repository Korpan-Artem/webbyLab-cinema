import * as React from 'react';




const Modal = (active) =>  {
    return (
        <>
            <div className={active.active ? "modal active" : "modal"}>
                <div className='modal-content' onClick={(e) => e.stopPropagation()} >

                </div>
            </div>
        </>
    )

}
export default Modal;