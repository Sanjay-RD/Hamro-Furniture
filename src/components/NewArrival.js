import React, { useState } from "react";
import { makeStyles, Link } from "@material-ui/core";
import "../styles/NewArrival.css";
import bed from "../images/category/bed.jpg";

import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import newArrivalData from "../data/newArrivalData";

const useStyles = makeStyles((theme) => ({}));

const NewArrival = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  const handleClick1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };

  const handleClick2 = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
  const handleClick3 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
  const handleClick4 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(true);
    setIsActive5(false);
    setIsActive6(false);
  };
  const handleClick5 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(true);
    setIsActive6(false);
  };
  const handleClick6 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(true);
  };
  return (
    <div className="new-arrival-container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="section-title">
            <span>Our Product</span>
            <h2>New Arrivals</h2>
          </div>
          <div className="filter__controls">
            <ul>
              <li
                onClick={handleClick1}
                className={isActive1 ? "active" : undefined}
              >
                All
              </li>
              <li
                onClick={handleClick2}
                className={isActive2 ? "active" : undefined}
              >
                Bed
              </li>
              <li
                onClick={handleClick3}
                className={isActive3 ? "active" : undefined}
              >
                Daraz
              </li>
              <li
                onClick={handleClick4}
                className={isActive4 ? "active" : undefined}
              >
                Table
              </li>
              <li
                onClick={handleClick5}
                className={isActive5 ? "active" : undefined}
              >
                Rack
              </li>
              <li
                onClick={handleClick6}
                className={isActive6 ? "active" : undefined}
              >
                Furniture
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="image-section">
        <div className="grid">
          {newArrivalData.map((product) => (
            <div className="product__item" id={product.title}>
              <div className="product__item__pic">
                <img src={product.image} alt={product.title} />
                <ul className="product__item__hover">
                  <li>
                    <a href="#">
                      <span>
                        <SearchIcon />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <LocalMallIcon />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FavoriteBorderIcon />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h5>
                  <a href="#">{product.title}</a>
                </h5>
                <div className="price">Rs.{product.price}</div>
                <a href="#" className="cart-btn">
                  Add to cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
