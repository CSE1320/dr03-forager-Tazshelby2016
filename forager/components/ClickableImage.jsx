import React from 'react';
import BasicImage from './BasicImage';
import ClickableElement from './ClickableElement';

function ClickableImage({href="",imageTailwind="", showlikeness=false, likeness=0, hazard=false, alt="You need to replace me.", src=""}){
    return(
        <ClickableElement href={href}>
            <BasicImage src={src} alt={alt} showlikeness={showlikeness} likeness={likeness} imageTailwind={imageTailwind} hazard={hazard}/>
        </ClickableElement>
    );
}

export default ClickableImage;