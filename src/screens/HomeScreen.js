import React from "react";
import ImageSlider from "../components/ImageSlider";
import NewArrival from "../components/NewArrival";
import ProductCategory from "../components/ProductCategory";

const HomeScreen = () => {
  return (
    <>
      <ImageSlider />
      <div className="container">
        <ProductCategory />
        <NewArrival />
      </div>
    </>
  );
};

export default HomeScreen;
