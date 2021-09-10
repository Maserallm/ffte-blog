import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";
import Footer from "./Footer";
// import Nav from "./Nav"

import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Post from "../styles/Post";

const BorderStyles = styled.div`
  padding: 1rem;
  display: grid;
  gap: 10px;
  padding: 5px;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;
const ContentStyles = styled.div`
  padding: 1rem;
  display: grid;
  gap: 10px;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Post />
      <BorderStyles>
        {/* <ContentStyles> */}
        {/* <Nav /> */}
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        {/* </ContentStyles> */}
      </BorderStyles>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
