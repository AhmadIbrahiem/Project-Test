import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  height: 100vh;
  position: relative;

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

  @media (max-width: 768px) {
    padding: 1.5rem; /* Reduce padding on smaller screens */
    height: auto; /* Allow flexible height on small screens */
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.fontColor1};
  text-align: center;
  animation: fadeInDown 1s ease both;

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
    font-size: 2rem; /* Adjust font size for mobile */
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  animation: fadeIn 0.8s ease both;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Allow links to wrap on small screens */
    gap: 1rem; /* Reduce gap for smaller devices */
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.fontColor1};
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  animation: fadeInLeft 1s ease both;

  &:hover {
    color: ${(props) => props.theme.colors.fontColor2};
    transform: scale(1.1);
  }

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
    font-size: 1rem; /* Adjust font size for mobile */
  }
`;

export const IconContainer = styled.span`
  font-size: 1.5rem;
  animation: fadeInScale 1.2s ease both;

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
    font-size: 1.2rem; /* Slightly smaller icons on mobile */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  animation: fadeInUp 1.3s ease both;

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

  @media (max-width: 768px) {
    max-width: 100%; /* Use full width on smaller screens */
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 2px solid ${(props) => props.theme.colors.hover};
  border-radius: 8px;
  resize: none;
  height: 150px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  transition: border-color 0.3s ease;
  animation: fadeIn 1.5s ease both;

  &:focus {
    border-color: ${(props) => props.theme.colors.active};
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for mobile */
    height: 120px; /* Reduce height for smaller screens */
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.hover};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  animation: fadeInScale 1.7s ease both;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover2};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.active};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for mobile */
    padding: 0.6rem 1.2rem; /* Reduce padding for smaller screens */
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 2px solid ${(props) => props.theme.colors.hover};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme.colors.active};
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for mobile */
  }
`;

export const StatusMesage = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
  color: ${(props) => (props.success ? "red" : "#80ffcf")}; /* Dynamic color */
  animation: fadeIn 0.5s ease-in-out;
  color: ${(props) => props.theme.colors.fontColor2};

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
