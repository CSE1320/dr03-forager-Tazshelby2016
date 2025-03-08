import BasicImage from "../../components/BasicImage";
import Polaroid from "../../components/Polaroid";

export default function SandboxPage() {
    return (
      <div className="page flex justify-center items-center flex-row">
        <BasicImage showlikeness={false} hazard={true} likeness={90} src="image 3.png" alt="Test"/>
        <Polaroid label="Test" src="image 3.png" alt="Test" hazard={true} showlikeness={true} likeness={90} className="bg-red aspect-4/3 full-w full-h"/>
      </div>
    );
}
  