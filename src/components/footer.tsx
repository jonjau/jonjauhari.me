import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import theme from "../styles/theme";

const FooterWrapper = styled.div`
  display: flex;
  max-width: 50rem;
  margin: 0 auto;
  padding-bottom: ${({ theme }) => theme.spacing[32]};
`;

const Copyright = styled.span`
  padding: ${({ theme }) => theme.spacing[1]};
  margin-left: ${({ theme }) => theme.spacing[3]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize[1]};
  color: ${({ theme }) => theme.colors.textDark};
`;

const SocialLinks = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.spacing[2]};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize[3]};
  height: 44px;
  width: 44px;

  &:focus,
  &:hover {
    color: ${theme.colors.textLight};
  }
`;

const Footer = () => {
  // title is for info when hovered
  // target and rel is for "open in new tab" functionality
  return (
    <FooterWrapper>
      <Copyright>© {new Date().getFullYear()} Jonathan Jauhari </Copyright>
      <SocialLinks>
        <SocialLink
          title="My Github profile"
          href="https://github.com/jonjau"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          title="My Linkedin profile"
          href="https://www.linkedin.com/in/jonathanjauhari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink
          title="Send me an email"
          href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6A%6F%6E%63%6A%61%75%68%61%72%69%40%67%6D%61%69%6C%2E%63%6F%6D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>
    </FooterWrapper>
  );
};

export default Footer;
