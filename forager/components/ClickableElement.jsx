import Link from 'next/link';
import React from 'react';

function ClickableElement({href="", children=""}){

    return(
        <Link href={href}>
            {children}
        </Link>
    );
}

export default ClickableElement;