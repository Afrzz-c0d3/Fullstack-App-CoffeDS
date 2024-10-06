/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

// Membuat konteks
const AuthContext = createContext();

// Provider untuk AuthContext
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("AuthProvider is rendered", { isAuthenticated });

  const login = () => {
    // Logika untuk login (misalnya, menyimpan token)
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Logika untuk logout (misalnya, menghapus token)
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk menggunakan AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
