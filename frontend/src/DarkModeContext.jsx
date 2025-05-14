import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Context
const DarkModeContext = createContext();

// Create a provider for the context
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode state from localStorage (optional)
  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(savedTheme);
    if (savedTheme) {
      document.body.style.backgroundColor = '#2a2a72';
      document.body.style.color = 'aliceblue';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#2a2a72';
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', newMode);
      if (newMode) {
        document.body.style.backgroundColor = '#2a2a72';
        document.body.style.color = 'aliceblue';
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#2a2a72';
      }
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);
