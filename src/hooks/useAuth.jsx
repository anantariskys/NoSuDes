import { jwtDecode } from 'jwt-decode';
import  { createContext, useContext, useEffect, useState } from 'react';


const AuthContext =createContext();


export const useAuth = () => {
  return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);



  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setIsAuthenticated(true)
    }else{
      setIsAuthenticated(false)
    }
  
   
  }, [])
  

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
