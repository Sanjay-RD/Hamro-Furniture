import React, { useState, useEffect } from "react";
import { sliderImageData } from "../data/imageData";
import { Button, makeStyles } from "@material-ui/core";
import "../styles/SliderStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: "5px",
  },
}));

const ImageSlider = () => {
  const classes = useStyles();
  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Slider {...settings}>
      {sliderImageData.map((image) => (
        <div>
          <div className="image-container">
            {/* <div
              className="background-img"
              style={{
                background: `url(${image.image}) center center / cover no-repeat`,
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                filter: "blur(2px)",
              }}
            ></div> */}
            <div className="background-img">
              <img src={image.image} alt="" />
            </div>
            <div className="flex-2">
              <div className="image-content">
                <h3>
                  Buy any furniture product <br /> online with low price.
                </h3>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  Buy Now
                </Button>
              </div>
              <div className="slider-image-container">
                <img className="slider-image" src={image.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
