import React from "react";
import "./App.css";
import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Global, css } from "@emotion/react";
import { useTheme } from "./assets/theme/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
      {/* Global styles for dynamic body background */}
      <Global
        styles={(theme) => css`
          body {
            background-color: ${theme.colors.bodyBackground};
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
          }
        `}
      />
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
