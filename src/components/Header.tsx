// components/Header.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import Menu from "./Menu";
import logo from "../logo.png";

const Header: React.FC = () => {
  return (
    <AppBar sx={{ backgroundColor: "transparent" }}>
      <Toolbar>
        <Grid item mr={4} mt={1}>
          <img
            src={logo}
            alt="logo"
            height="80"
            style={{
              borderRadius: "5%",
              boxShadow: "0 0 10px 10px transparent",
              filter: "blur(0.2px)", // Add this line
            }}
          />
        </Grid>
        <Grid item mr={4}>
          <Typography variant="h6">Visual Question Answering</Typography>
        </Grid>
        <Grid item>
          <Menu />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
