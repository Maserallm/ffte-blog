import React from "react";

export default function VideoiFrame({ videoSrcUrl, videoTitle }) {
  return (
    <div className="youtube">
      <iframe
        width="760"
        height="420"
        src={videoSrcUrl}
        title={videoTitle}
        frameborder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
