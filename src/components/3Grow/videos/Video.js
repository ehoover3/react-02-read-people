import React from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

function Video(props) {
  console.log(props);
  const opts = {
    height: "624",
    width: "1024",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (e) => {
    e.target.pauseVideo(); // access to player in all event handlers via event.target
  };

  return (
    <div className="Video_Container">
      <h3>{props.videoTitle}</h3>
      <YouTube videoId={props.videoId} opts={opts} onReady={_onReady} />
      <Link to="/Grow">Continue to Grow</Link>
    </div>
  );
}

export default Video;

// NEED TO FIGURE OUT HOW TO GET props.videoTitle & props.videoID
