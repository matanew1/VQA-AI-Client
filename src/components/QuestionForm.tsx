import React from "react";
import { Grid, TextField, IconButton, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface QuestionFormProps {
  question: string;
  handleQuestionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  question,
  handleQuestionChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <Grid item container>
      <Grid item xs={12}>
        <TextField
          label="Question"
          value={question}
          onChange={handleQuestionChange}
          variant="filled" // Change variant to "filled"
          required
          fullWidth
          InputProps={{
            style: { fontWeight: "bold", backgroundColor: "#40f0f0", color: "#00001f" },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  </form>
);

export default QuestionForm;