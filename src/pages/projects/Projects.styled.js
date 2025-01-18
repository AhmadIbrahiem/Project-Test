import styled from "@emotion/styled";

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Ensure wrapping for smaller screens */
  gap: 2rem;
  padding: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: radial-gradient(
      circle,
      rgba(100, 255, 218, 0.15) 10%,
      transparent 70%
    );
    z-index: -1;
    animation: moveBg 10s infinite alternate;
  }

  @keyframes moveBg {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-10px, -10px);
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem;
  border-radius: 8px;
  width: 45%; /* Default for medium/large screens */
  max-width: 400px; /* Ensure cards don't grow too large */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  animation: fadeIn 0.8s ease both;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 100%; /* Cards take full width on smaller screens */
    padding: 1.2rem;
  }
`;

export const ProjectTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.hover};
  text-transform: uppercase;
  letter-spacing: 1.2px;

  @media (max-width: 768px) {
    font-size: 1.3rem; /* Adjust font size for smaller screens */
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  animation: fadeInUp 1s ease both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly smaller font on mobile */
  }
`;

export const ProjectDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
  display: block;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.75rem; /* Adjust for readability on smaller screens */
  }
`;
