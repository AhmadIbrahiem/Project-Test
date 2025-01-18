import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import themes from "./theme";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      console.log("Theme toggled to:", !prev ? "Dark" : "Light");
      return !prev;
    });
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  console.log("Current Theme Object:", currentTheme);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <EmotionThemeProvider theme={currentTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
