import React, { useState } from "react";
import "../styles/HeaderStyles.css";

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import headersData from "../data/headersData";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navbar: {
    backgroundColor: "#5137a0",
    // marginBottom: "20px",
  },
  flexHeader: {
    display: "flex",
  },
  navText: {
    fontSize: "17px",
  },
  drawerButton: {
    padding: "10px 35px",
  },
}));

const Header = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const classes = useStyles();

  const handleToggleDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };
  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.flexHeader}>
            <Button color="inherit" disableRipple>
              <Typography variant="h6">Hamro Furniture</Typography>
            </Button>
          </div>

          <div>
            <div className="rightNav">
              {headersData.map((data, index) => (
                <Button color="inherit" key={index}>
                  <Typography className={classes.navText}>
                    {data.label}
                  </Typography>
                </Button>
              ))}
            </div>
            <div className="Nav-small-screen">
              <Drawer
                anchor="right"
                open={toggleDrawer}
                onClose={handleToggleDrawer}
              >
                {headersData.map((data, index) => (
                  <Button
                    color="inherit"
                    key={index}
                    className={classes.drawerButton}
                    onClick={handleToggleDrawer}
                  >
                    <Typography className={classes.navText}>
                      {data.label}
                    </Typography>
                  </Button>
                ))}
              </Drawer>
            </div>
            <div className="menuIcon" onClick={handleToggleDrawer}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
