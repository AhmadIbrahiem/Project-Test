import React, { useState } from "react";
import {
  NavLink,
  Nav,
  Logo,
  NavLinksContainer,
  Hamburger,
} from "./Navbar.styled";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
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
