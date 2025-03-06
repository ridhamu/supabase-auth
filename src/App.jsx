/* eslint-disable no-unused-vars */
import { RouterProvider } from 'react-router-dom';
import { router } from './route';
import { useAuth } from './contexts/AuthContext';

function App() {
  const {user, session} = useAuth(); 

  return (
      <RouterProvider router={router} />
  );
}

export default App;
