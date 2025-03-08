import React from 'react';
import Background from '../components/Background'


const BackgroundCamera = ({src="", alt="You need to replace me."}) =>{
    return (
        <>
          <Background alt={alt} src={src}/>
        </>
    );
}

export default BackgroundCamera;