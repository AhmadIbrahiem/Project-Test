import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10rem;
  height: 100vh;
  position: relative; /* For background effects */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

  @media (max-width: 1024px) {
    padding: 0 5rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const Greet = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontColor2};
  text-align: left;
  margin-bottom: -2rem;
  animation: fadeIn 0.8s ease both;

  @keyframes fadeIn {
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
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontColor2};
  text-align: left;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.fontColor2};
  text-align: left;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
  animation: fadeInLeft 1.2s ease both;

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.fontColor2};
  border: 2px solid ${({ theme }) => theme.colors.fontColor2};
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  animation: fadeInScale 1.5s ease both;

  &:hover {
    transform: translateY(-5px);
    background-color: ${({ theme }) => theme.colors.fontColor2};
    color: ${({ theme }) => theme.colors.bodyBackground};
  }

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`;
