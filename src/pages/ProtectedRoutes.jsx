import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoutes({ children }) {
  const { session, isLoading } = useAuth();
  
  if (isLoading) return <h1>Loading.....</h1>;
  return session === null ? <Navigate to="/signin" /> : children;
}

export default ProtectedRoutes;
