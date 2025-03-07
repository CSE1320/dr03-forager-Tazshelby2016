import React from 'react';

function BasicImage({height=0, width=0, hazard="false", alt="You need to replace me.", src=""}){
    // Will do CSS magic trick later
    const simpleReturn = (<img src={src} alt={alt} height={height} width={width} />);
    const iconReturn = (<><svg src="/public/icons/icon_warning.svg"></svg> {simpleReturn}</>);

    return (hazard==="false")? iconReturn:simpleReturn;
}

export default BasicImage;