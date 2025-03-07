import NavBar from '../../components/NavBar';
import Background from '../../components/Background'

export default function PhotoSearchPage() {
  return (
    <div className="page Relative">
      <h1 className="Absolute">Photo Search Page</h1>
      <Background src="image1.png" alt="Camer image"/>
      <NavBar className="Absolute" />
    </div>
  );
}
