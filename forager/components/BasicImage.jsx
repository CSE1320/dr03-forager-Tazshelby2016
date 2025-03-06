import React from 'react';

function BasicImage({height=0, width=0, hazard=false, alt="You need to replace me.", src=""}){
    // Will do CSS magic trick later
    const simpleReturn = "<img alt=" + alt + " height=" + height + " width=" + width + "/>";
    const iconReturn = "<><svg src=\"././public/icons/icon_warning.svg\"></svg>" + simpleReturn + "</>";

    const fixPath = "\"" + src + "\""
gi
    if (hazard){
        return (
            <div>
                <svg src="././public/icons/icon_warning.svg"></svg>
                <img src={src} alt={alt} height={height} width={width}/>
            </div>
        );
    }
    else{
        return (
            <div>
                <img src={src} alt={alt} height={height} width={width}/>
            </div>
        );
    }

    //return hazard? iconReturn:simpleReturn;
}

export default BasicImage;