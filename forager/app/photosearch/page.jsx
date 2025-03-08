import NavBar from '../../components/NavBar';
import BackgroundCamera from '../../components/BackgroundCamera'
import BasicImage from '../../components/BasicImage'
import ClickableImage from '../../components/ClickableImage';

export default function PhotoSearchPage() {
  return (
    <div className="relative">
      <BackgroundCamera src="image1.png" alt="Camera image"/>
      <h1 className="absolute">Photo Search Page</h1>
      
      <ClickableImage href="/comparison" src="Rectangle 16.png" alt="Camera button" imageTailwind="absolute size-15 left-16 top-44" hazard={false}/>
      <NavBar className="absolute" />
    </div>
  );
}
