import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>welcome to supabase auth demo</h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Home;
