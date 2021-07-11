import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import Fade from "react-reveal/Fade";

const Box = ({ products }) => {
  return (
    <div className="image-section">
      <Fade right cascade>
        <div className="grid">
          {products.map((product) => (
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
      </Fade>
    </div>
  );
};

export default Box;
