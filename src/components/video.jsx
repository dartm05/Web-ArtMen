import React from "react";
import ReactPlayer from "react-player";

export const Video = (props) => {
  return (
    <div id="video" className="text-center">
      <div className="container">
        <div className="video-container">
          <ReactPlayer
            url={props.data ? props.data.url : "Loading"}
            playing={true}
            controls={false}
            playIcon={false}
            width={props.data ? props.data.width : "100%"}
            height={props.data ? props.data.height : "500"}
            loop={props.data ? props.data.loop : true}
            muted={true}
          />
        </div>
      </div>
    </div>
  );
};
