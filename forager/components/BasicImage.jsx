import React from 'react';

function BasicImage({height, width, hazard, alt, src}){
    // Will do CSS magic trick later
    if (hazard){
        return (
            <div>
                <svg src="././public/icons/icon_warning.svg"></svg>
                <img alt={alt} height={height} width={width}/>
            </div>
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