import styled from "@emotion/styled";
import { Link, NavLink as RouterNavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.navBackground};
  color: ${({ theme }) => theme.colors.secondary};
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Press Start 2P", sans-serif;
  animation: fadeInDown 0.5s ease;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 1rem;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.active};
  text-decoration: none;
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 1rem;
  }

  &.active {
    display: flex;
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const NavLink = styled(RouterNavLink)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  &.active {
    color: ${({ theme }) => theme.colors.active};
    font-weight: bold;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 100%;
    text-align: left;
    padding: 0.5rem 0;
  }
`;

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  font-size: 1.5rem;
  transition:
    transform 0.2s,
    color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    align-self: flex-end;
    margin-top: 1rem;
  }
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
