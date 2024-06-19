import React from "react";
import ReactPlayer from "react-player";

export function Video() {
  return (
    <div id="video" className="text-center">
      <div className="container">
        <div className="video-container">
          <ReactPlayer
            url="https://www.youtube.com/shorts/4L58YnnWxwo"
            playing={true}
            controls={false}
            playIcon={false}
            width="100%"
             height={500}
            loop={true}
            muted={true}
          />
        </div>
      </div>
    </div>
  );
}
