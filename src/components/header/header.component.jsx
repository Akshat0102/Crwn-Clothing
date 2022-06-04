import React from "react";
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {

    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="nav-menu">
                <Link className="menu-option" to='/shop'>
                    SHOP
                </Link>
                <Link className="menu-option" to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="menu-option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="menu-option" to='/userAuth'>
                            SIGNIN
                        </Link>
                }
            </div>
        </div>
    )
}

export default Header;