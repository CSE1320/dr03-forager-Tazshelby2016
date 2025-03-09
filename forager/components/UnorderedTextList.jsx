import React from 'react';
import Text from './Text';

function UnorderedTextList({text=[{name: "", id:"1"}]}){

    const listedText = text.map(line => <li key={line.id}><Text text={line.name}/></li>);

    return(
        <ul className="p-2">
            {listedText}
        </ul>    
    );
}

export default UnorderedTextList;