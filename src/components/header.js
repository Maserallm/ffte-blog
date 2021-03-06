import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Nav from "./Nav";

import styled from "styled-components";

const impact =
  "https://res.cloudinary.com/dtxylaqlc/raw/upload/v1621866668/FFTE%20Website/impact_tsbvtk.ttf";
// const impact2 = "../assets/fonts/Impact.woff";

const HeaderStyles = styled.header`
  @font-face {
    font-family: "impact";
    src: url(${impact});
    font-weight: normal;
    font-style: normal;
  }

  background: black;
  // margin-bottom: 1.45rem;

  // div {
  //   margin: 0 auto;
  //   width: 100%;
  //   padding: 1.45rem 1.0875rem;
  //   display: grid;
  //   grid-template-columns: auto;
  //   text-align: center;
  // }

  h1 {
    text-align: center;
    margin: 50px
  }
  
  .title {
    font-family: impact;
    font-size: 3rem;
    color: white;
    text-decoration: none;
  }

  .title:hover {
    color: var(--red);
    animation: titleHover 0.5s;
  }

  @keyframes titleHover {
    from {
      color: white;
    }
    to {
      color: var(--red);
    }
  }

  // @media (max-width: 760px) {
  // }
  @media (max-width: 450px) {
    // display: flex;
    // position: relative;
    // h1 {
    //   font-size: 0rem;
    // }

  //   div {
  //     padding: 2rem 0rem;
  //   }

  line-height: 3rem;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link className="title" to="/">
          {/* {siteTitle} */}
          FFTE PRESENTS EASTEND LINK
        </Link>
      </h1>
      {/* <Nav /> */}
    </div>
  </HeaderStyles>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
