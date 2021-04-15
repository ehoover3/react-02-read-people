// SOURCE: Face Recognition (face api.js) React application Tagalog Tutorial <https://www.youtube.com/watch?v=EejpxMtDg8M>
import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

// COMMAND LINE COMMANDS
// 1. npm install --global yarn
// 2. yarn start
// 3. npm i face-api.js
// 4. yarn add face-api.js

// 3. npm i face-api.js

console.log(faceapi);

function PlayVideo(props) {
  const videoHeight = 480;
  const videoWidth = 640;
  const [initializing, setInitializing] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      setInitializing(true);
      try {
        Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]).then(startVideo);
      } catch (e) {
        console.log("ERROR - IN THE PROMISE: ", e);
      }
    };
    loadModels();
    return () => {
      setPlayVideo(false);
      setInitializing(false);
    };
  }, []);

  const startVideo = () => {
    setPlayVideo(true);
    navigator.getUserMedia(
      {
        video: {},
      },
      (stream) => (videoRef.current.srcObject = stream),
      (err) => console.log(err)
    );
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (initializing) {
        setInitializing(false);
      }

      // the code currently breaks here
      // if the video is playing, then do the canvas stuff
      if (playVideo === true) {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          videoRef.current
        );
        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        };
        faceapi.matchDimensions(canvasRef.current, displaySize);
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceExpressions();
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );

        // the question marks say "if this currently exist, then do the .getContext and .clearRect"
        // canvasRef?.current
        //   ?.getContext("2d")
        canvasRef.current
          .getContext("2d")
          .clearRect(0, 0, videoWidth, videoHeight);
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
      }
    }, 1000);
  };

  return (
    <div className="PlayContainer">
      <div className="Play">
        <span>{initializing ? "Initializing" : "Ready"}</span>
        <div className="display-flex justify-content-center"></div>

        <video
          className="Play_Video"
          ref={videoRef}
          autoPlay
          muted
          height={videoHeight}
          width={videoWidth}
          onPlay={handleVideoOnPlay}
        />

        <canvas ref={canvasRef} className="position-absolute" />
      </div>
    </div>
  );
}

export default PlayVideo;
