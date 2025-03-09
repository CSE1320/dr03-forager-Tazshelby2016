import React from 'react';
import Pill from './Pill';

function PillList({text=[{name: "", id:"1"}]}){

    const listedText = text.map(line => <li key={line.id}><Pill text={line.name}/></li>);

    return(
        <ul>
            {listedText}
        </ul>    
    );
}

export default PillList;