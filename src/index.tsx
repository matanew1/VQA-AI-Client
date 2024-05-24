import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, Box } from "@mui/material";
import App from "./App";
import { createTheme, CssBaseline } from "@mui/material";
import { GlobalStyles } from "@mui/system";

const bgTheme = createTheme({
  palette: {
    background: {
      default: "linear-gradient(45deg, #00001f 1%, #40E0D0 50%, #00001f 99%)",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={bgTheme}>
    <Box sx={{ justifyContent: "center", alignItems: "center" }}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            background: bgTheme.palette.background.default,
            margin: 0,
            padding: 0,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <App />
    </Box>
  </ThemeProvider>,
  document.getElementById("root")
);