import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../product-card/product-card";
import { Spiner } from "../spiner";

import "./product-cards.css";

export const ProductCards = ({ houses }) => {
  const statusSpiner = useSelector((state) => state.house.isDownloaded);
  return (
    <div className="product-cards">
      <div className="product-cards__container">
        <div className="product-cards__title">
          <span className="product-cards__title-text">Похожие объявления:</span>
        </div>
        {!statusSpiner && <Spiner />}
        {statusSpiner && houses?.map((house) => <ProductCard house={house} />)}
      </div>
    </div>
  );
};
