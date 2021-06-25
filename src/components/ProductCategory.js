import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { makeStyles } from "@material-ui/core/styles";
import {  Typography, Button } from "@material-ui/core";

import categoryData from '../data/categoryData'


const useStyles = makeStyles((theme) => ({
    root:{
        padding:'50px 0px'
    },
  imageStyle: {
    height: 285,
    width: "100%",
  },
  content: {
    position: "absolute",
    background: "rgba(255,252,252,0.1)",
    bottom: 14,
    width: "100%",
    padding: "10px 15px",
  },
  title:{
      textTransform:'uppercase',
      textAlign:'center'
  }
}));

const ProductCategory = () => {
    const classes = useStyles();

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className={classes.root}>
        <Typography variant="h5" component="h5" className={classes.title}>
          Category Of Furniture
        </Typography>
        <Slider {...settings}>
          {categoryData.map((img) => (
            <div style={{ position: "relative", padding: "12px" }}>
              <div style={{ padding: "10px" }}>
                <img src={img.image} alt="" className={classes.imageStyle} />
                <div className={classes.content}>
                  <Typography variant="h6" component="h6">
                    {img.title}
                  </Typography>
                  <Typography variant="span" component="span">
                    <span>{`${img.item} items`}</span>
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
}

export default ProductCategory
