import React, { Children } from 'react';
import ClickableElement from './ClickableElement';

function ClickableImage({href="", passesHref=false, classNames="", children=""}){
    return(
        <ClickableElement href={href} passesHref={passesHref}>
            <div className={classNames}>
                {children}
            </div>
        </ClickableElement>
    );
}

export default ClickableImage;