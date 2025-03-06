/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import supabase from '../supabaseClient';
import { useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true); 
  console.log(session);
  // register function
  const signUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true, data: data };
  };

  // login function
  const signInUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true, data: data };
  };

  // logout function
  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
  };

  //listener for auth state change (basically when user login and logout);
  useEffect(() => {
    //fetching the current
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false); 
    });

    //listen on auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsLoading(false); 
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, isLoading, signUpNewUser, signInUser, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const provider = useContext(AuthContext);
  return provider;
}
