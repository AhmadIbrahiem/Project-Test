import React, { useState } from "react";
import {
  NavLink,
  Nav,
  Logo,
  NavLinksContainer,
  ThemeToggle,
  Hamburger,
} from "./Navbar.styled";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../../assets/theme/ThemeContext";

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      {isMenuOpen ? null : <Logo to="/">Ahmad</Logo>}
      <Hamburger onClick={toggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </Hamburger>
      <NavLinksContainer className={isMenuOpen ? "active" : ""}>
        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </NavLink>
        <NavLink to="/aboutMe" onClick={() => setIsMenuOpen(false)}>
          About Me
        </NavLink>
      </NavLinksContainer>
    </Nav>
  );
};

export default NavBar;
