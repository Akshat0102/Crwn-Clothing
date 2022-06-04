import React from "react";
import './button-input.styles.scss';

const ButtonInput = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <div className={`${isGoogleSignIn ? 'google-sign-in' : ''} button-input`} {...otherProps}>
            {children}
        </div>
    )
}

export default ButtonInput;