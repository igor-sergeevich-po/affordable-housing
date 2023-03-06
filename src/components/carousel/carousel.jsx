import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import "./carousel.css";

export const Carousel = ({ id }) => {
  const [curr, setCurr] = useState(0);
  const [activeBtn, setActiveBtn] = useState(0);
  const navigateBtn = [0, 1, 2, 3];

  const carouselPicSet = useSelector((state) => state.house.housesImg).slice(
    id * 4,
    id * 4 + 4
  );
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
        {carouselPicSet.map((elem) => (
          <img
            key={uuid()}
            className="product-card__image-elem"
            src={elem.url}
            alt={elem.title}
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
