import React, { createContext, useState, useEffect } from 'react';
import client from '../api/client';


export const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || '';
  });

  
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  
  const login = async (username, password) => {
    const { data } = await client.post('/auth/login', { username, password });
    setToken(data.token);
  };

  
  const logout = () => {
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
