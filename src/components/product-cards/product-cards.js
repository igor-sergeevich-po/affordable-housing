import React from "react";
import { ProductCard } from "../product-card/product-card";
import "./product-cards.css";

export const ProductCards = ({ houses }) => {
  return (
    <div className="product-cards">
      <div className="product-cards__container">
        <div className="product-cards__title">
          <span className="product-cards__title-text">Похожие объявления:</span>
        </div>
        {houses?.map((house) => (
          <ProductCard house={house} />
        ))}
      </div>
    </div>
  );
};
