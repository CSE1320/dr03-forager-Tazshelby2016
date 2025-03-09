import React from 'react';
import BasicImage from './BasicImage';
import ClickableElement from './ClickableElement';

function ClickableImage({href="",imageStyle="", showlikeness=false, likeness=0, hazard=false, alt="You need to replace me.", src=""}){
    return(
        <ClickableElement href={href}>
            <BasicImage src={src} alt={alt} showlikeness={showlikeness} likeness={likeness} imageStyle={imageStyle} hazard={hazard}/>
        </ClickableElement>
    );
}

export default ClickableImage;