import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import Search from '../../components/Search'

export default function DashboardPage() {
  return (
    <div className="page">
      <h1>Dashboard Page</h1>
      <Search/>
      <NavBar />
    </div>
  );
}
