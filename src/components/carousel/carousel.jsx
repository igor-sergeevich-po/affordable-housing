import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import "./carousel.css";

export const Carousel = ({ id, housesImage }) => {
  // console.log(housesImage);
  // console.log(id);
  housesImage = housesImage?.slice((id - 1) * 3, (id - 1) * 4 + 4);
  const [curr, setCurr] = useState(0);
  const [activeBtn, setActiveBtn] = useState(0);
  const navigateBtn = [0, 1, 2];

  const nextElem = (elem) => {
    setCurr(elem);
    setActiveBtn(elem);
  };

  return (
    <div className="product-card__carousel">
      <div
        className="product-card__carousel-container"
        style={{ transform: `translateX(-${curr * 224}px)` }}
      >
        {housesImage?.map((elem) => (
          <img
            key={uuid()}
            className="product-card__image-elem"
            src={elem.urls.small}
            alt={elem.alt_description}
          ></img>
        ))}
      </div>
      <nav className="carousel__navigate">
        {navigateBtn.map((elem) => (
          <div
            key={uuid()}
            onMouseOver={() => nextElem(elem)}
            className={`carousel__navigate-elem elem${elem} ${
              activeBtn === elem ? "carousel__activ-btn" : ""
            }`}
          >
            {elem}
          </div>
        ))}
      </nav>
    </div>
  );
};
