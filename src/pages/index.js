import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Seo from "../components/seo";

const HomePageStyles = styled.div`
  display: grid;
  grid-template-columns: auto;

  .youtube {
    display: grid;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: auto;
  }

  .youtubeFrame {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 780px) {
    .youtubeFrame {
      height: 160%;
    }

    iframe {
      width: 600px;
    }
  }

  @media (max-width: 650px) {
    .youtubeFrame {
      height: 160%;
    }

    iframe {
      width: 500px;
      height: 315px;
    }
  }

  @media (max-width: 450px) {
    .youtube {
      height: 30vh;
    }

    .youtubeFrame {
      height: 160%;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
  }
`;

const IndexPage = () => (
  <HomePageStyles>
    <Seo title="Home" />
    <div className="youtube">
      <iframe
        width="760"
        height="420"
        src="https://www.youtube.com/embed/4ffwKEPOi9s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </HomePageStyles>
);

export default IndexPage;
