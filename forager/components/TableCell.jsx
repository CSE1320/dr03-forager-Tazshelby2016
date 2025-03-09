import React from 'react';

function TableCell({text="",scope=""}){
    const rowHeaderCell = (<th scope="row">{text}</th>);
    const colHeaderCell = (<th scope="col">{text}</th>);
    const dataCell = (<td scope="col">{text}</td>);

    if (scope==="column"){    
        return(
            {colHeaderCell}  
        );
    }
    else if (scope==="row"){
        return(
            {rowHeaderCell}
        );
    }
    else{
        return(
            {dataCell}
        );
    }
}

export default TableCell;