import React from 'react';
import './userAuth.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';

const UserAuthPage = () => {

    return (
        <div className="userAuth">
            <SignIn />
        </div>
    )
}

export default UserAuthPage;