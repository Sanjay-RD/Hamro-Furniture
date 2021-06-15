import React, { useState, useEffect } from "react";
import { sliderImageData } from "../data/imageData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles, IconButton } from "@material-ui/core";
import "../styles/SliderStyle.css";

const useStyles = makeStyles((theme) => ({}));

const ImageSlider = () => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const length = sliderImageData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  return (
    <div className="slider">
      <div className="left-arrow">
        <IconButton color="inherit" onClick={previousSlide}>
          <ArrowBackIosIcon className="arrow" />
        </IconButton>
      </div>
      <div className="right-arrow">
        <IconButton color="inherit" onClick={nextSlide}>
          <ArrowForwardIosIcon className="arrow" />
        </IconButton>
      </div>
      {sliderImageData.map((image, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img src={image.image} alt="image" className="image" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
