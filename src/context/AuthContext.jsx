import { createContext, useCallback, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ username: null, isAuthenticated: false });
  console.log(user);
  const login = (username) => {
    setUser({ username: username, isAuthenticated: true });
  };

  const logout = () => {
    setUser({ username: null, isAuthenticated: false });
  };

  const checkSession = useCallback(async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}/sessions/check-session`, {
      method: 'POST',
      credentials: 'include',
    });
    if (!res.ok) {
      setUser({ username: null, isAuthenticated: false });
      return;
    }
    const body = await res.json();
    setUser({ username: body.data.username, isAuthenticated: true });
  }, [setUser]);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return <AuthContext.Provider value={{ user, login, logout, checkSession }}>{children}</AuthContext.Provider>;
}
