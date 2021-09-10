import React from "react";
import styled from "styled-components";

const PlaylistStyles = styled.div`
  div {
    font-size: 10px;
    color: #cccccc;
    line-break: anywhere;
    word-break: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
      Garuda, Verdana, Tahoma, sans-serif;
    font-weight: 100;
  }

  a {
    color: #cccccc;
    text-decoration: none;
  }
`;

export default function Playlist({
  playerUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1079887309&color=%23272727&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  profileUrl,
  profileName,
  playlistTitle,
  playlistUrl
}) {
  return (
    <>
      <iframe
        className="player"
        width="100%"
        height="100%"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={playerUrl}
      ></iframe>
      {/* <PlaylistStyles>
        <a href={profileUrl} title={profileName} target="_blank">
          {profileName}
        </a>{" "}
        ·{" "}
        <a href={playlistUrl} title={playlistTitle} target="_blank">
          {playlistTitle}
        </a>
      </PlaylistStyles> */}
    </>
  );
}
