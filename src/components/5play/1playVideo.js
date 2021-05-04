import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { Button } from "react-bootstrap";

function PlayVideo() {
  const videoHeight = 420;
  const videoWidth = 560;
  const [playVideo, setPlayVideo] = useState(false);
  const [drawCanvas, setDrawCanvas] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();

  let localstream;

  useEffect(() => {
    const loadModels = async () => {
      let mounted = true;
      console.log(mounted);
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      if (mounted) {
        Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]).then(startVideo);
      }
    };
    loadModels();

    return () => {
      // 1. load the models
      // 2. setInitializing to true
      // 3. asychonchronously got the promises
      // 4. start the video
      // 5. setPlayVideo to true
      // 6. navigator.getUserMedia to stream the video
      // 7. setInterval runs the video
      // 8. create canvas
      stopCanvas();
      if (localstream) {
        setTimeout(localstream.getTracks()[0].stop(), 1000);
      }
    };
  }, []);

  const startVideo = () => {
    setPlayVideo(true);
    navigator.getUserMedia(
      {
        video: {}, // take an empty object as the first parameter
      },
      (stream) => {
        console.log(stream);
        if (videoRef.current !== null) {
          videoRef.current.srcObject = stream;
          localstream = stream;
        }
      }, // 'stream' is what is coming from the webcam
      (err) => console.log(err) // if an error occurs, log it
    );
  };

  const stopVideo = () => {
    setPlayVideo(false);
    console.log(MediaStream.active);
    if (MediaStream.active === true) {
      let video = document.getElementsByClassName("Play_Video")[0];
      if (video) {
        video.srcObject.getTracks().forEach((track) => track.stop());
      }
    }
  };

  const startCanvas = () => {
    setDrawCanvas(true); // flip the button
    window.myInterval = setInterval(async () => {
      if (MediaStream.active === true) {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          videoRef.current // create canvas from video element
        );
      }
      console.log(canvasRef);
      const displaySize = {
        height: videoHeight,
        width: videoWidth,
      };
      faceapi.matchDimensions(canvasRef.current, displaySize);
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()) // detect all faces in the webcam
        .withFaceLandmarks() // detect to later be able draw face dots
        .withFaceExpressions(); // determine happy, sad, neutral, angry, fearful, or surprised
      const resizedDetections = faceapi.resizeResults(detections, displaySize); // take in the detections and display size so that boxes that show up around the face are properly sized for the video element & canvas

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

  const stopCanvas = () => {
    setDrawCanvas(false); // flip the button
    if (canvasRef.current !== null) {
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, videoWidth, videoHeight); // clear past canvas drawings (before rendering new canvas drawings)
    }
    clearInterval(window.myInterval); // stop the canvas drawing ???
  };

  return (
    <>
      {/* VIDEO AND CANVAS */}
      <div className="Play_VideoAndCanvas">
        <video
          className="Play_Video"
          ref={videoRef}
          autoPlay
          muted
          height={videoHeight}
          width={videoWidth}
          // onPlay={handleVideoOnPlay}
        />

        <canvas ref={canvasRef} className="Play_Canvas" />
      </div>
      {/* BUTTON */}
      <div class="Play_ButtonContainer">
        {drawCanvas ? (
          <Button variant="outline-primary" onClick={stopCanvas}>
            Stop Emotion Detection
          </Button>
        ) : (
          <Button variant="outline-primary" onClick={startCanvas}>
            Start Emotion Detection
          </Button>
        )}
      </div>
    </>
  );
}

export default PlayVideo;
// SOURCE: Build Real Time Face Detection With Javascript <https://www.youtube.com/watch?v=CVClHLwv-4I>
