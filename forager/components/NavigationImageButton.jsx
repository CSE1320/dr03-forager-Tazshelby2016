import React from 'react';
import BasicImage from './BasicImage'

function ImageButton({outerStyle="", aHref="", imageStyle="", showlikeness=false, likeness=0, hazard=false, alt="You need to replace me.", src=""}){
    return(
        <button type="button" className={outerStyle}>
            <a href={aHref}>
                <BasicImage imageStyle={imageStyle} showlikeness={showlikeness} likeness={likeness} hazard={hazard} alt={alt} src={src}/>
            </a>
        </button>
    );
}

export default ImageButton;