import React from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

import { useStore } from "../../store/store";

function Video() {
  const title = useStore((state) => state.videoTitle);
  const videoID = useStore((state) => state.videoId);

  console.log(title);
  console.log(videoID);

  const opts = {
    height: "624",
    width: "1024",
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (e) => {
    e.target.pauseVideo(); // access to player in all event handlers via event.target
  };

  return (
    <div className="Video_Container">
      <h3>{title}</h3>
      <YouTube videoId={videoID} opts={opts} onReady={_onReady} />
      <Link to="/Grow">Continue to Grow</Link>
    </div>
  );
}

export default Video;
