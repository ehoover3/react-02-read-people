// SOURCE: Face Recognition (face api.js) React application Tagalog Tutorial <https://www.youtube.com/watch?v=EejpxMtDg8M>
import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

// COMMAND LINE COMMANDS
// npm i face-api.js

console.log(faceapi);

function PlayVideo(props) {
  const videoHeight = 480;
  const videoWidth = 640;
  const [initializing, setInitializing] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();
  const tracks = useRef();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      setInitializing(true);
      Promise.all([
        // run all asynchronous calls in parallel, to make it easier to execute // "/models" is passing in all of the models
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };
    loadModels();

    return () => {
      setPlayVideo(false);
      clearInterval(window.myInterval); // clear out the contents of myInterval
      setInitializing(false);
      // stopVideo();
    };
  }, []);

  const startVideo = () => {
    // connect video to the web element
    setPlayVideo(true);
    navigator.getUserMedia(
      {
        video: {}, // take an empty object as the first parameter
      },
      (stream) => (videoRef.current.srcObject = stream), // 'stream' is what is coming from the webcam

      (err) => console.log(err) // if an error occurs, log it
    );
  };

  const stopVideo = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(function (track) {
      track.stop();
    });

    videoRef.current.srcObject = null;
  };

  const handleVideoOnPlay = () => {
    window.myInterval = setInterval(async () => {
      // setInterval allows running the code multiple times in a row  // 'async' is used because it uses an asynchronous library

      if (initializing) {
        setInitializing(false);
      }

      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
        videoRef.current // create canvas from video element
      );

      const displaySize = {
        // canvas display size perfectly equal to the video
        width: videoWidth,
        height: videoHeight,
      };
      faceapi.matchDimensions(canvasRef.current, displaySize);
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()) // detect all faces in the webcam
        .withFaceLandmarks() // detect to later be able draw face dots
        .withFaceExpressions(); // determine happy, sad, neutral, angry, fearful, or surprised
      const resizedDetections = faceapi.resizeResults(detections, displaySize); // take in the detections and display size so that boxes that show up around the face are properly sized for the video element & canvas

      // DELETE THIS BLOCK LATER
      // the question marks say "if this currently exist, then do the .getContext and .clearRect"
      // canvasRef?.current
      //   ?.getContext("2d")
      // END DELETE THIS BLOCK LATER

      // canvasRef?.current
      //   ?.getContext("2d")

      if (canvasRef.current) {
        // Error Handling: if canvasRef exist, then run this code
        canvasRef.current
          .getContext("2d")
          .clearRect(0, 0, videoWidth, videoHeight); // clear past canvas drawings (before rendering new canvas drawings)
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections); // draw box around the face
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections); // draw lines and dots on a face
        faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections); // determine the emotion
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
// SOURCE: Build Real Time Face Detection With Javascript <https://www.youtube.com/watch?v=CVClHLwv-4I>
