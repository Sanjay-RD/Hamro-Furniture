import React from "react";
import ImageSlider from "../components/ImageSlider";
import NewArrival from "../components/NewArrival";
import ProductCategory from "../components/ProductCategory";
import { Button, makeStyles } from "@material-ui/core";

import "../styles/CustomeStyles.css";

import rack from "../images/category/rack.jpg";

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: "10px 30px",
    borderRadius: "25px",
    boxShadow: "none",
    marginRight: "20px",
    marginBottom: "10px",
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <>
      <ImageSlider />
      <div className="container">
        <ProductCategory />
        <NewArrival />
      </div>
      <div className="custom_design">
        <div className="custom_content">
          <div className="container">
            <span className="custome-title">Custom Design Furniture</span>
            <h2>Let our product make your room more perfect</h2>
            <a href="#">
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                Order Now
              </Button>
            </a>
            <a href="#">
              <Button variant="contained" className={classes.btn}>
                Contact Us
              </Button>
            </a>
          </div>
        </div>
        <div className="custome-image">
          <img src={rack} alt="rack.." />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
