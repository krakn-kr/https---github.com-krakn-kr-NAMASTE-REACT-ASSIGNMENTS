import ReactPlayer from "react-player";
import React, { useRef } from "react";

const Movie = () => {
  const VIDEO_PATH = "../Media/mad.mp4";
  const playerRef = useRef(null);
  return (
    <div>
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
    </div>
  );
};
export default Movie;
