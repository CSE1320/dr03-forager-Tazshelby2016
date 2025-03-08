import "react"

function Pill (text=""){
    const [selectionState, setSelectionState] = useState("unselected");


    const selectedPill = (<Text text={text} style="bg-green-400"/>);
    const deselectedPill = (<Text text={text} style="bg-green-500"/>);
    const inactivePill = (<Text text={text} style="bg-gray-500"/>);


    const stateChanger = () => {
        if (selectionState !== "disabled")
        {
            if(selectionState==="selected"){
                setSelectionState("unselected")
            }
            else{
                setSelectionState("selected")
            }
        }
    }

    return
}

export default Pill;