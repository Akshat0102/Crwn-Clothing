import React from 'react';
import './userAuth.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/signup.component';

const UserAuthPage = () => {

    return (
        <div className="userAuth">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default UserAuthPage;