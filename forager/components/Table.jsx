import React from 'react';
import TableRow from './TableRow';

function PillList(tableInfo={headerRows:[{cells:[{text: "", scope: ""}]}],bodyRows:[{cells:[{text: "", scope: ""}]}]}){

    const tableHead = tableInfo.map(line => <TableRow cells={line.headerRows.cells}/>);
    const tableBody = tableInfo.map(line => <TableRow cells={line.bodyRows.cells}/>);

    return(
        <table>
            {row}
        </table>    
    );
}

export default PillList;