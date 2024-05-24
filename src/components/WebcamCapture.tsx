import React, { useEffect } from "react";
import { IconButton, Box } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

interface WebcamCaptureProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ videoRef, canvasRef }) => {
  useEffect(() => {
    const constraints = {
      audio: true,
      video: { facingMode: "environment" },
    };

    // Check if getUserMedia is supported and ensure it's the correct format for iOS Safari
    const getUserMedia = (constraints: MediaStreamConstraints) => {
      const n = navigator as any;
      return (n.mediaDevices && n.mediaDevices.getUserMedia) 
        ? n.mediaDevices.getUserMedia(constraints)
        : new Promise((resolve, reject) => {
          const getWebcam = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
          if (!getWebcam) {
            reject(new Error("getUserMedia is not implemented in this browser"));
          }
          getWebcam.call(n, constraints, resolve, reject);
        });
    };

    getUserMedia(constraints)
      .then((stream: MediaStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error: Error) => {
        console.error("Error accessing media devices.", error);
      });
  }, [videoRef]);

  return (
    <Box position="relative">
      <IconButton
        color="default"
        aria-label="upload picture"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <CameraAltIcon />
      </IconButton>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          borderRadius: "12px",
          borderColor: "black",
          borderWidth: "5px",
          borderStyle: "solid",
          width: "100%",
          height: "100%",
        }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </Box>
  );
};

export default WebcamCapture;