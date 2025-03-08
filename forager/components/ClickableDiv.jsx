import React, { Children } from 'react';
import ClickableElement from './ClickableElement';

function ClickableImage({href="", innerClassName="", children=""}){
    return(
        <ClickableElement href={href}>
            <div className={innerClassName}>
                {children}
            </div>
        </ClickableElement>
    );
}

export default ClickableImage;