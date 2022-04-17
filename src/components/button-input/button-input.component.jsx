import React from "react";
import './button-input.styles.scss';

const ButtonInput = ({children, ...otherProps}) => {
    return(
        <div className="button-input" {...otherProps}>
            {children}
        </div>
    )
}

export default ButtonInput;