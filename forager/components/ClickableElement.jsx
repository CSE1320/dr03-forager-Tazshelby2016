import Link from 'next/link';
import React from 'react';

function ClickableElement({href="", passesHref=false, children=""}){
    const pass = (
        <Link href={href} passesHref>
            {children}
        </Link>
    );
    const nopass = (
        <Link href={href}>
            {children}
        </Link>
    );

    return passesHref? pass:nopass;
}

export default ClickableElement;