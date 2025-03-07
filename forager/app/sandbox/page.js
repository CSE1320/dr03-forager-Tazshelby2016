import Message from "../../components/Message";
import BasicImage from "../../components/BasicImage";

export default function SandboxPage() {
    return (
      <div className="page flex justify-center items-center flex-row">
        <BasicImage hazard={true} alt="Tester" height="200px" width="300px" src="image1.png"/>
        <Message/>
      </div>
    );
}
  