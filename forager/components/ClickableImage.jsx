import React from 'react';
import BasicImage from './BasicImage';
import ClickableElement from './ClickableElement';

function ClickableImage({href="", passesHref=false, imageTailwind="", hazard=false, alt="You need to replace me.", src=""}){
    return(
        <ClickableElement href={href} passesHref={passesHref}>
            <BasicImage src={src} alt={alt} imageTailwind={imageTailwind} hazard={hazard}/>
        </ClickableElement>
    );
}

export default ClickableImage;