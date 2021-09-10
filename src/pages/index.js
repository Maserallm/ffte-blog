import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Seo from "../components/seo";
import VideoiFrame from "../components/VideoiFrame";
import Playlist from "../components/PlaylistStyles";

const HomePageStyles = styled.div`
  display: grid;
  grid-template-columns: auto;

  .youtube {
    display: grid;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: auto;
    gap: 20px;
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
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 30vh;
      position: relative;
      top: 60px;
    }

    .player {
      display: flex;
      flex-direction: column;
      position: relative;
      height: 100%;
      top: 60px;
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
    <div className="post">
      <Playlist
        className="player"
        playerUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1122566086&color=%23141316&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        profileUrl="https://soundcloud.com/eazyffte"
        profileName=""
        playlistUrl="https://soundcloud.com/eazyffte/the-playlist-ep-1"
        playlistTitle=""
      />
      <VideoiFrame
        videoSrcUrl="https://www.youtube.com/embed/lIyvORcUn_U"
        videoTitle="YouTube video player"
      />

      <VideoiFrame
        videoSrcUrl="https://www.youtube.com/embed/4ffwKEPOi9s"
        videoTitle="Eastend Links X FFTE For Real BTS"
      />

      <VideoiFrame
        videoSrcUrl="https://www.youtube.com/embed/ljp9jS_mFCI"
        videoTitle="FFTE Presents Eastend Link"
      />
    </div>
  </HomePageStyles>
);

export default IndexPage;
