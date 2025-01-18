const themes = {
  light: {
    colors: {
      primary: "#42554d", // Main text color for light mode (dark blue-gray for readability)
      secondary: "#ffffff", // Secondary color for light mode (used for text on dark backgrounds or bright areas)
      hover: "#212a26", // Hover color for links, buttons, and interactive elements (soft light blue)
      active: "#42554d", // Active state color for buttons and links (brighter blue for emphasis)
      navBackground: "#648074", // Navbar background color (dark blue for contrast against light theme)
      bodyBackground: "#c7ffe7", // Body background color (light blue-gray for a soothing base color)
      fontColor1: "#102a43",
      fontColor2: "#061610",
      fontColor3: "#010203",
    },
  },
  dark: {
    colors: {
      primary: "#102a43", // Main text color for dark mode (deep blue for contrast against dark backgrounds)
      secondary: "#ffffff", // Secondary color for dark mode (white for text and highlights)
      hover: "#90caf9", // Hover color for links, buttons, and interactive elements (soft blue, consistent with light theme)
      active: "#42a5f5", // Active state color for buttons and links (brighter blue for emphasis)
      navBackground: "#102a43", // Navbar background color (same deep blue as the primary text for consistency)
      bodyBackground: "#0a192f", // Body background color (dark blue-black for a modern, sleek look in dark mode)
      fontColor1: "#ffffff",
      fontColor2: "#80ffcf",
      fontColor3: "#90caf9",
    },
  },
};

export default themes;
