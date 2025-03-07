import NavBar from '../../components/NavBar';
import Background from '../../components/Background'

export default function PhotoSearchPage() {
  return (
    <div className="relative">
      <h1 className="">Photo Search Page</h1>
      <Background src="image1.png" alt="Camera image"/>
      <NavBar className="absolute" />
    </div>
  );
}
