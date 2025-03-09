import NavBar from '../../components/NavBar';
import BackgroundCamera from '../../components/BackgroundCamera'
import NavigationImageButton from '../../components/NavigationImageButton';

export default function PhotoSearchPage() {
  return (
    <div className="relative">
      <BackgroundCamera src="image1.png" alt="Camera image"/>
      <h1 className="absolute w-auto h-auto">Photo Search Page</h1>
      
      <NavigationImageButton aHref="/comparison" src="Rectangle 16.png" outerStyle="absolute size-15 left-16 top-44" alt="Camera button" imageStyle="" showlikeness={false} hazard={false}/>
      <NavBar className="absolute" />
    </div>
  );
}
