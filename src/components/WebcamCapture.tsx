import React, { useEffect } from "react";
import { IconButton, Box } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

interface WebcamCaptureProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({
  videoRef,
  canvasRef,
}) => {
  const [face, setFace] = React.useState(true);
  useEffect(() => {
    const constraints = {
      audio: true,
      video: face,
    };

    // Check if getUserMedia is supported and ensure it's the correct format for iOS Safari
    const getUserMedia = (constraints: MediaStreamConstraints) => {
      const n = navigator as any;
      return n.mediaDevices && n.mediaDevices.getUserMedia
        ? n.mediaDevices.getUserMedia(constraints)
        : new Promise((resolve, reject) => {
            const getWebcam =
              n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
            if (!getWebcam) {
              reject(
                new Error("getUserMedia is not implemented in this browser")
              );
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
  }, [videoRef, face]);

  return (
    <Box position="relative">
      <IconButton
        color="default"
        aria-label="upload picture"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
        onClick={() => setFace(!face)}
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
          borderColor: "#40E0D0",
          borderWidth: "2px",
          borderStyle: "solid",
          width: "100%",
          height: "auto",
        }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </Box>
  );
};

export default WebcamCapture;
