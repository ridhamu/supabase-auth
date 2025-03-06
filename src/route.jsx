import { createBrowserRouter } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Home from './pages/Home';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/signin', element: <Signin /> },
  { path: '/signup', element: <Signup /> },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
  },
]);
