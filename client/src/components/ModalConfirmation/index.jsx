import * as React from 'react';


function ModalConfirmation({active=false, setActive,children}) {
    return (
        <>
        <div className={active ? 'modal-confirmation active' : 'modal'} onClick={() => {setActive(false)}}>
            <div className={active ? 'modal-content-confirmation active': 'modal-content-confirmation'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
        </>
    )
}
export default ModalConfirmation;