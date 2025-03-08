import React from 'react';
import Text from './Text';

function BasicImage({imageTailwind="", hazard=false, showlikeness=false, likeness=0, alt="You need to replace me.", src=""}){
    const finalImgTail= imageTailwind + " absolute full-w full-h"
    const finalTextStyle = "absolute full-w full-h text-white bg-black"
    
    const formattedString = likeness + "%"

    const simpleReturn = (
        <img src={src} alt={alt} className={imageTailwind} />
    );
    const iconReturn = (
        <div className = "relative box-content size-32">
            <img className = {finalImgTail} src={src} alt={alt} />
            <img className = "absolute full-w full-h" src="/icons/icon_warning.svg"></img>
        </div>
    );
    const simplelikenessReturn = (
        <div>
            <img src={src} alt={alt} className={imageTailwind} />
            <Text style={finalTextStyle} text={formattedString}/>
        </div>
    );
    const iconlikenessReturn = (
        <div className = "relative box-content size-32">
            <img className = {finalImgTail} src={src} alt={alt} />
            <Text style={finalTextStyle} text={formattedString}/>
            <img className = "absolute left-10 full-w full-h" src="/icons/icon_warning.svg"></img>
        </div>
    );

    if (hazard) {
        if (showlikeness){
            return iconlikenessReturn;
        }
        else {
            return iconReturn;
        }
    }
    else{
        if (showlikeness){
            return simplelikenessReturn;
        }
        else{
            return simpleReturn;
        }
    }
}

export default BasicImage;