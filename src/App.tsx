// App.tsx
import React, { useState, useRef } from "react";
import { Grid } from "@mui/material";
import { QuestionAnswer } from "./types";
import { postQuestion } from "./services/api";
import QuestionForm from "./components/QuestionForm";
import AnswerDisplay from "./components/AnswerDisplay";
import { canvasToBlob, createFormData } from "./utils/convert";
import Header from "./components/Header";
import WebcamCapture from "./components/WebcamCapture";

const App: React.FC = () => {
  const [state, setState] = useState<QuestionAnswer>({
    question: "",
    answer: "",
  });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, question: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoRef.current || !canvasRef.current || !state.question) return;

    // Draw a frame from the video onto the canvas
    const context = canvasRef.current.getContext("2d");
    context?.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    // Convert the canvas image to a blob and create FormData
    const blob = await canvasToBlob(canvasRef.current);
    if (!blob) return;

    const formData = createFormData(blob, state.question);

    try {
      const response = await postQuestion(formData);
      setState((prevState) => ({ ...prevState, answer: response.answer }));
    } catch (error) {
      console.error("Error fetching answer:", error);
      setState((prevState) => ({
        ...prevState,
        answer: "Error fetching answer.",
      }));
    }
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <WebcamCapture videoRef={videoRef} canvasRef={canvasRef} />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <QuestionForm
          question={state.question}
          handleQuestionChange={handleQuestionChange}
          handleSubmit={handleSubmit}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <AnswerDisplay answer={state.answer} />
      </Grid>
    </Grid>
  );
};

export default App;
