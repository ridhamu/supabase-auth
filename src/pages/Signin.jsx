/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { signInUser, session } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    try {
      setIsLoading(true);
      setErrorMsg('');
      const res = await signInUser(email, password);
      if (!res.success) {
        throw new Error(res.error);
      }
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  if (session) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <h1>Sign-in!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <br />
        <button type="submit">sign-in!</button>
        {errorMsg && <p>{errorMsg}</p>}
      </form>
      <br />
      <p>
        dont have an account ?, <Link to="/signup">Register here</Link>{' '}
      </p>
    </>
  );
}

export default Signin;
