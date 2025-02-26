import React from 'react';

function BasicImage({height=0, width=0, hazard=false, alt="You need to replace me.", src}){
    // Will do CSS magic trick later
    if (hazard){
        return (
            <>
                <svg src="././public/icons/icon_warning.svg"></svg>
                <img alt={alt} height={height} width={width}/>
            </>
        );
    }
    else{
        return (
            <>
                <img alt={alt} height={height} width={width}/>
            </>
        );
    }

}

export default BasicImage;