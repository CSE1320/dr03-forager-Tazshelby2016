import React from 'react';

// This is for static, screen-covering images

function Background({alt="You need to replace me.", src=""}){
    return(
        <img className="full-w full-h AbsolutePosition" src={src} alt={alt}>
        </img>
    );
}

export default Background;