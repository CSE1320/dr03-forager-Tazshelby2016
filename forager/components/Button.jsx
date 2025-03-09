import React from 'react';

function Button({clickAction="", innerStyle="", children=""}){
    return(
        <button onClick={clickAction} type="button" className={innerStyle}>
            {children}
        </button>
    );
}

export default Button;