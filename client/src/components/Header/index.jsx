import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { signOutAction } from '../../store/userActions';




function Header() {
    const token = useSelector(state => state.users.user.token)
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutAction())
    }
    return (
        <header className='header'>
            {
                token ? (
                    <div className='header-side'></div>
                ) : ''
            }
            <div>
                <h1>WebbyLab Cinema</h1>
            </div>
            {
                token ? (
                    <div className='header-side box-btns'>
                        <a className='btn-login' href='#' onClick={signOut}>Sign out</a>
                    </div>
                ) : ""

            }

        </header>
    )
}
export default Header;