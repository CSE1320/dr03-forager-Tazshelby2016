import React from 'react';
import Background from '../components/Background'


const BackgroundCamera = ({src="", outerStyle="", alt="You need to replace me."}) =>{
    return (
        <div className={outerStyle}>
          <Background  alt={alt} src={src}/>
        </div>
    );
}

export default BackgroundCamera;