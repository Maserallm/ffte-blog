import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const FooterStyles = styled.footer`
  text-align: center;
  a {
    &:hover {
      color: var(--grey);
    }
  }

  padding: 2%;
`;

const Footer = () => (
  <FooterStyles>
    <p>
      Created by <Link to="/">Woo.Marc</Link> an affliate of &copy;{" "}
      <a href="https://www.farfromtheeast.com/">FFTE </a>
      {new Date().getFullYear()}
    </p>
  </FooterStyles>
);

export default Footer;
