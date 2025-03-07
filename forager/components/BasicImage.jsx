import React from 'react';

function BasicImage({height=0, width=0, hazard=false, alt="You need to replace me.", src=""}){
    // Will do CSS magic trick later
    const simpleReturn = (
        <img src={src} alt={alt} height={height} width={width} />
    );
    const iconReturn = (
        <div >
            <img width="27px" height="27px" src="/icons/icon_warning.svg"></img>
            {simpleReturn}
        </div>
    );

    return hazard? iconReturn:simpleReturn;
}

export default BasicImage;