import React from 'react';
import Button from './Button'
import Text from './Text'

function TextButton({outerStyle="", clickAction="", innerStyle="", text=""}){
    return(
        <Button clickAction={clickAction} innerStyle={outerStyle}>
            <Text text={text} styles={innerStyle}/>
        </Button>
    );
}

export default TextButton;