import React, { createContext, useState, useEffect } from 'react';
import client from '../api/client';

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64    = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  } catch {
    return null;
  }
}

export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');
  const [user,  setUser]  = useState(() => {
  const t = localStorage.getItem('token');
  const p = t && parseJwt(t);
    return p ? { id: p.id, username: p.username } : null;
  });

  
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      const p = parseJwt(token);
      setUser(p ? { id: p.id, username: p.username } : null);
    } else {
      localStorage.removeItem('token');
      setUser(null);
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
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
