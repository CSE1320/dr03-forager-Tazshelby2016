import React from 'react';
import Text from '../components/Text.jsx'
import BasicImage from './BasicImage.jsx';

function Polaroid({label="", src="", alt="", likeness=0, showlikeness=false, hazard=false}){
    return(
        <div className="text-black text-center bg-white">
            <BasicImage src={src} alt={alt} likeness={likeness} showlikeness={showlikeness} hazard={hazard}/>
            <Text level={1} text={label}/>
        </div>
    );
}

export default Polaroid;