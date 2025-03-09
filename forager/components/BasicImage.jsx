import React from 'react';
import Text from './Text';

function BasicImage({imageStyle="", outerStyle="", hazard=false, showlikeness=false, likeness=0, alt="You need to replace me.", src=""}){
    const finalImgTail= imageStyle + " absolute w-full h-full"
    const finalTextStyle = "absolute w-auto h-auto text-left text-white bg-black"
    const finalOuterStyle = "relative size-40" + " " + outerStyle
    
    const formattedString = likeness + "%"

    const simpleReturn = (
        <img src={src} alt={alt} className = {imageStyle} />
    );
    const iconReturn = (
        <div className = {finalOuterStyle}>
            <img className = {finalImgTail} src={src} alt={alt} />
            <img className = "absolute w-auto h-auto" src="/icons/icon_warning.svg"></img>
        </div>
    );
    const simplelikenessReturn = (
        <div className={finalOuterStyle}>
            <img src={src} alt={alt} className={imageStyle} />
            <Text styles={finalTextStyle} text={formattedString}/>
        </div>
    );
    const iconlikenessReturn = (
        <div className ={finalOuterStyle}>
            <img className = {finalImgTail} src={src} alt={alt} />
            <Text styles={finalTextStyle} text={formattedString}/>
            <img className = "absolute left-8 w-auto h-auto" src="/icons/icon_warning.svg"></img>
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