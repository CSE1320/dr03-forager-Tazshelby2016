import React from 'react';
import Text from '../components/Text.jsx'
import BasicImage from './BasicImage.jsx';

function Polaroid({label="", src="", alt="", likeness=0, callerOuterStyle="", showlikeness=false, hazard=false}){
    const outerStyle = "text-black text-center bg-white";
    const finalOuterStyle = outerStyle + " " + callerOuterStyle;


    return(
        <div className={finalOuterStyle}>
            <BasicImage src={src} alt={alt} likeness={likeness} outerStyle="mx-1" showlikeness={showlikeness} hazard={hazard}/>
            <Text level={1} text={label}/>
        </div>
    );
}

export default Polaroid;