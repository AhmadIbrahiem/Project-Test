import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  Title,
  Form,
  Input,
  TextArea,
  Button,
  SocialLinksContainer,
  SocialLink,
  IconContainer,
  StatusMesage,
} from "./Contact.styled";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7h9006s",
        "template_o9j8rgm",
        form.current,
        "QvEuizt0276yAMmtB"
      )
      .then(
        () => {
          console.log("Message sent to yourself successfully!");

          emailjs
            .sendForm(
              "service_7h9006s",
              "template_4fz7pet",
              form.current,
              "QvEuizt0276yAMmtB"
            )
            .then(
              () => {
                setStatus("Message sent successfully, and reply sent!");
                form.current.reset();
              },
              (error) => {
                console.error("Failed to send reply:", error);
                setStatus("Message sent, but reply failed.");
              }
            );
        },
        (error) => {
          console.error("Failed to send the message:", error);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <Container>
      <Title>Contact Me</Title>
      <SocialLinksContainer>
        <SocialLink
          href="https://www.linkedin.com/in/ahmad-ibrahiem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContainer>
            <FiLinkedin />
          </IconContainer>
          LinkedIn
        </SocialLink>
        <SocialLink
          href="https://github.com/ahmadibrahiem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContainer>
            <FiGithub />
          </IconContainer>
          GitHub
        </SocialLink>
        <SocialLink
          href="mailto:ahmadmibrahiem@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContainer>
            <FiMail />
          </IconContainer>
          Email
        </SocialLink>
      </SocialLinksContainer>
      <Form ref={form} onSubmit={handleSubmit}>
        <Input type="text" name="user_name" placeholder="Your Name" required />
        <Input
          type="email"
          name="user_email"
          placeholder="Your Email Address"
          required
        />
        <TextArea
          name="message"
          placeholder="Write your message here..."
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
      {status && <StatusMesage>{status}</StatusMesage>}
    </Container>
  );
};

export default Contact;
