import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

/* eslint-disable no-unused-vars */
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { signUpNewUser, session } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    try {
      setIsLoading(true);
      setErrorMsg('');
      const res = await signUpNewUser(email, password);
      if (!res.success) {
        throw new Error(res.error);
      }
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  if(session){
    return <Navigate to="/dashboard"/> 
  }

  return (
    <>
      <h1>Sign-up !</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">sign up!</button>
        {errorMsg && <p>{errorMsg}</p>}
      </form>
      <br />
      <p>
        already have an account ?, <Link to="/signin">login here</Link>{' '}
      </p>
    </>
  );
}

export default Signup;
