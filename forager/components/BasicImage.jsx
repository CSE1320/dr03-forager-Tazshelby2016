import React from 'react';

function BasicImage({imageTailwind="", hazard=false, alt="You need to replace me.", src=""}){
    const finalImgTail= imageTailwind + " absolute full-w full-h"
    
    // Will do CSS magic trick later
    const simpleReturn = (
        <img src={src} alt={alt} className={imageTailwind} />
    );
    const iconReturn = (
        <div className = "relative box-content size-32">
            <img className = {finalImgTail} src="/icons/icon_warning.svg"></img>
            <img className = {finalImgTail} src={src} alt={alt} />
        </div>
    );

    return hazard? iconReturn:simpleReturn;
}

export default BasicImage;