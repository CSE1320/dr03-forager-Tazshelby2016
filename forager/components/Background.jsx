import React from 'react';

// This is for static, screen-covering images

function Background({alt="You need to replace me.", outerStyle="", src=""}){
    const finalStyle = "w-full h-auto absolute" + " " + outerStyle

    return(
        <img className={finalStyle} src={src} alt={alt}>
        </img>
    );
}

export default Background;