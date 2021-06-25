import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography, Button } from "@material-ui/core";

import categoryData from "../data/categoryData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imageStyle: {
    height: 285,
    width: "100%",
  },
  content: {
    position: "absolute",
    background: "rgba(255,252,252,0.3)",
    bottom: 16,
    width: "100%",
    padding: "10px 15px",
  },
}));
const ProductCategoryOne = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} style={{ padding: "50px 0px" }}>
      {categoryData.map((img) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          style={{ position: "relative" }}
        >
          <img src={img.image} alt="" className={classes.imageStyle} />
          <div className={classes.content}>
            <Typography variant="h6" component="h6">
              {img.title}
            </Typography>
            <Typography variant="span" component="span">
              <span>{`${img.item} items`}</span>
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCategoryOne;
