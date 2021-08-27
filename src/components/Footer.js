import React from "react";

import logo from "../images/logo.png";

import {
  TextField,
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";

import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import InfoIcon from "@material-ui/icons/Info";
import SearchIcon from "@material-ui/icons/Search";
import BookIcon from "@material-ui/icons/Book";
import EventIcon from "@material-ui/icons/Event";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HelpIcon from "@material-ui/icons/Help";

const useStyle = makeStyles((theme) => ({
  suscribeBtn: {
    marginTop: 10,
  },
  logo: {
    width: 140,
  },
  emailForm: {
    margin: "10px 0px",
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <div className="container">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          <div className="footer_aboutus">
            <img src={logo} alt="logo" className={classes.logo} />
            <div className="about-us" style={{ marginBottom: "30px" }}>
              <Typography variant="h4">About Us</Typography>
              <p>we bring a unique product in a market</p>
            </div>
            <div className="contact-us">
              <Typography variant="h4">Contact Us</Typography>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="9803505373" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="rishidevsanjay9@gmail.com" />
                </ListItem>
              </List>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="information">
            <Typography variant="h4">Information</Typography>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="More Search" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Blogs" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="helpful-link">
            <Typography variant="h4">Helpful Links</Typography>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Support" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Terms & Conditions" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Privacy Policy" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="subscribe">
            <Typography variant="h4">Subscribe For More Info</Typography>
            <form noValidate autoComplete="off">
              <TextField
                label="Email"
                variant="outlined"
                className={classes.emailForm}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.suscribeBtn}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
