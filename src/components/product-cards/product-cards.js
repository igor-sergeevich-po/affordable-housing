import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../product-card/product-card";
import { Spiner } from "../spiner";
import { v4 as uuid } from "uuid";
import "./product-cards.css";

export const ProductCards = ({ houses, housesImage, titleText }) => {
  const statusSpiner = useSelector((state) => state.house.isDownloaded);

  useEffect(() => {}, [statusSpiner, houses]);
  return (
    <div className="product-cards">
      <div className="product-cards__container">
        <div className="product-cards__title">
          <div className="product-cards__title-text">{titleText}:</div>
        </div>

        {!statusSpiner ? (
          <Spiner />
        ) : (
          houses?.map((house) => (
            <ProductCard house={house} housesImage={housesImage} key={uuid()} />
          ))
        )}
      </div>
    </div>
  );
};
