'use client'

import React, {useState} from "react";
import TextButton from "./TextButton"

function Pill ({text=""}){
    const [selectionState, setSelectionState] = useState("unselected");

    const stateChanger = () => {
        if(selectionState==="selected"){
            setSelectionState("unselected")
        }
        else{
            setSelectionState("selected")
        }
    }

    const selectedPill = (<TextButton text={text} clickAction={stateChanger} innerStyle="text-gray-900" outerStyle="bg-green-700 rounded-xl px-2"/>);
    const deselectedPill = (<TextButton text={text} clickAction={stateChanger} innerStyle="text-gray-100" outerStyle="bg-green-900 rounded-xl px-2"/>);
    const inactivePill = (<TextButton text={text} innerStyle="text-white" outerStyle="bg-gray-700 rounded-l"/>);

    if (selectionState === "selected"){
        return(selectedPill);
    }
    else if (selectionState === "unselected"){
        return(deselectedPill);
    }
    else if (selectionState === "inactivePill"){
        return(inactivePill);
    }
}

export default Pill;