import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../product-card/product-card";
import { Spiner } from "../spiner";
import { v4 as uuid } from "uuid";

import "./product-cards.css";

export const ProductCards = () => {
  const statusSpiner = useSelector((state) => state.house.isDownloaded);
  useEffect(() => {}, [statusSpiner]);
  const houses = useSelector((state) => state.house.houses);
  return (
    <div className="product-cards">
      <div className="product-cards__container">
        <div className="product-cards__title">
          <span className="product-cards__title-text">Похожие объявления:</span>
        </div>

        {!statusSpiner ? (
          <Spiner />
        ) : (
          houses?.map((house) => <ProductCard house={house} key={uuid()} />)
        )}
      </div>
    </div>
  );
};
