import React, { useState } from "react";
import { Grid, TextField, IconButton, InputAdornment, LinearProgress } from "@mui/material";
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
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmitWithLoading = async (e: React.FormEvent) => {
    setLoading(true);
    await handleSubmit(e);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmitWithLoading}>
      <Grid item container>
        <Grid item xs={12}>
          <TextField
            label="Question"
            value={question}
            onChange={handleQuestionChange}
            variant="filled"
            required
            fullWidth
            InputProps={{
              style: { fontWeight: "bold" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" disabled={loading}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {loading && (
          <Grid item xs={12}>
            <LinearProgress />
          </Grid>
        )}
      </Grid>
    </form>
  );
};

export default QuestionForm;