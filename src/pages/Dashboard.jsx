import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { signOutUser, session } = useAuth();
  const username = session?.user.email.split("@")[0]; 
  console.log(username); 

  return (
    <div>
      <h1>Hello, {username}</h1>
      <br />
      <button onClick={signOutUser}>logout</button>
    </div>
  );
}

export default Dashboard;
