import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import AboutIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";

const Menu: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const spacer = <>&nbsp;&nbsp;</>;

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Hidden smDown>
        <Toolbar>
          <List
            component="nav"
            aria-label="main mailbox folders"
            style={{ display: "flex" }}
          >
            <ListItem button component={Link} href="/home">
              <ListItemIcon style={{ color: "white" }}>
                <HomeIcon />
                {spacer}
                <ListItemText primary="Home" />
              </ListItemIcon>
            </ListItem>
            <ListItem button component={Link} href="/about">
              <ListItemIcon style={{ color: "white" }}>
                <AboutIcon />
                {spacer}
                <ListItemText primary="About" />
              </ListItemIcon>
            </ListItem>
          </List>
        </Toolbar>
      </Hidden>
      <Hidden smUp>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <List>
            <ListItem button component={Link} href="/home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} href="/about">
              <ListItemIcon>
                <AboutIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Menu;
