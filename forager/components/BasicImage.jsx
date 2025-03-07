import React from 'react';

function BasicImage({height=0, width=0, hazard=false, alt="You need to replace me.", src=""}){
    // Will do CSS magic trick later
    const simpleReturn = (
        <img src={src} alt={alt} height={height} width={width} />
    );
    const iconReturn = (
        <div className = "relative box-content size-32">
            <img className = "absolute full-w full-h" src="/icons/icon_warning.svg"></img>
            <img className = "absolute full-w full-h" src={src} alt={alt} />
        </div>
    );

    return hazard? iconReturn:simpleReturn;
}

export default BasicImage;