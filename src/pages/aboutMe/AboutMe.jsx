import React from "react";
import { Container, Title, Description, Button, Greet } from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <Container>
      <Greet>Hi , My name is </Greet>
      <Title>
        Ahmad Ibrahiem <br />I am a web Developer.
      </Title>
      <Description>
        A software engineer specializing in front-end development with expertise
        in React frameworks, dedicated to crafting exceptional digital
        experiences. Currently, I'm focused on creating accessible,
        user-friendly websites at Optimum Partners.
      </Description>
      <a
        href="../aboutMe/Ahmad-Ibrahiem-FlowCV-Resume-20241227.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Check out my Resume!</Button>
      </a>
    </Container>
  );
};

export default AboutMe;
