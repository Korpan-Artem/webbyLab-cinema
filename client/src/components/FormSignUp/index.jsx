import React, { useState } from 'react';
import { signUpAction } from '../../store/userActions';
import { useDispatch } from 'react-redux';
import { signUp } from './query';
import SignIn from './SignIn';
import SignUp from './SignUp';


function FormSignUp() {
    const [login, setLogin] = useState();
    const [correctData, setCorrectData] = useState(true);

    const dispatch = useDispatch();

    const loginUser = async (values, status) => {
        let token = await signUp(values, status)
        if(!token.error) {
            dispatch(signUpAction(token))
        } else {
            setCorrectData(false);
        }
    }

    return (
        <div className='add-movie-box'>
            {
                !!login ? (
                    <SignIn loginUser={loginUser} correctData={correctData}/>
                ) : (
                    <SignUp loginUser={loginUser} correctData={correctData}/>
                )
            }
            {
                !!login ? (
                    <div onClick={() => setLogin(!login)} className='change-login'>
                        Sign Up
                    </div>
                ) : (
                    <div onClick={() => setLogin(!login)} className='change-login'>
                        Log in
                    </div>
                )
            }
        </div>
    )

}
export default FormSignUp;