import React from 'react';

function UnorderedTextList({text=[{name: "", id:"1"}]}){

    const listedText = text.map(line => <li key={line.id}><Text text={line.name}/></li>);

    return(
        <ul>
            {listedText}
        </ul>    
    );
}

export default UnorderedTextList;