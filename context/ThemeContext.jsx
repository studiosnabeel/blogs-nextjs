'use client';

import { createContext, useState } from 'react';

//step 1 create context
export const ThemeContext = createContext();

//step 2 create a provider component
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  //step3 wrap the children in provider and pass values like function or state that are needed
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

//step4 you can find the step 4 in the main layout file.
