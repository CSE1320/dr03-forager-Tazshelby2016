import React from 'react';
import TableCell from './TableCell';

function PillList({cells=[{text: "", scope: ""}]}){

    const row = cells.map(line => <TableCell text={line.text} scope={line.scope} sc/>);

    return(
        <tr>
            {row}
        </tr>    
    );
}

export default PillList;