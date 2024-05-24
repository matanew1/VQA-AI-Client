import React from "react";
import { Typography, Card, CardContent, Box } from "@mui/material";

interface AnswerDisplayProps {
  answer: string;
}

const AnswerDisplay: React.FC<AnswerDisplayProps> = ({ answer }) =>
  answer !== "" ? (
    <Box>
      <Card
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "5px",
          marginTop: "5px",
        }}
      >
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Answer: {answer}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  ) : null;

export default AnswerDisplay;