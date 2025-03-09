import BasicImage from "../../components/BasicImage";
import Polaroid from "../../components/Polaroid";
import Pill from "../../components/Pill";
import Message from "../../components/Message";
import Background from "../../components/Background";
import NavigationImageButton from "../../components/NavigationImageButton";
import PillList from "../../components/PillList";
import UnorderedTextList from "../../components/UnorderedTextList";

export default function SandboxPage() {
    return (
      <ul className="w-auto h-auto page flex flex-wrap justify-center items-center flex-row">
        <li className="relative w-full h-auto">
          <Background src="image1.png" alt="Camera image" outerStyle="brightness-50"/>
        </li>
        <li className="relative bg-fuchsia-500">
          <NavigationImageButton aHref="/comparison" src="Rectangle 16.png" alt="Camera button" outerStyle="w-20 h-20" showlikeness={false} hazard={false}/>
        </li>
        <li className="relative bg-fuchsia-500">
          <BasicImage showlikeness={false} hazard={true} likeness={90} src="image 3.png" alt="Test"/>
          </li>
        <li className="relative bg-fuchsia-500">
          <Polaroid label="Test" src="image 3.png" alt="Test" hazard={true} showlikeness={true} likeness={90} callerOuterStyle="w-full h-full"/>
        </li>
        <li className="relative bg-fuchsia-500">
          <Pill text="Test Pill"/>
        </li>
        <li className="relative bg-fuchsia-500">
          <PillList text={[{name:"t",id:0},{name:"tt",id:1},{name:"ttt",id:2}]}/>
        </li>
        <li className="relative bg-fuchsia-500">
          <UnorderedTextList text={[{name:"t",id:0},{name:"tt",id:1},{name:"ttt",id:2}]}/>
        </li>
        <li className="relative bg-fuchsia-500">
          <Message/>
        </li>
      </ul>
    );
}
  