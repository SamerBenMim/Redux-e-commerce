import React from 'react'
import SignIn from '../../Components/signIn/sign-in'
import SignUp from '../../Components/sign-up/sign-up'
import './sign-in-up.scss'
const SignInUp = () => {
    return (
        <div className='sign-in-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInUp
