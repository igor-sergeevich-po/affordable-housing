import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../product-card/product-card";
import { v4 as uuid } from "uuid";
import "./favourites-cards.css";

export const FavouritesCards = () => {
  let favourites = useSelector((state) => state.favourite.favourites);

  return (
    <div className="favourites-cards">
      {favourites.length < 1
        ? "Вы ничего не добавили"
        : favourites?.map((house) => <ProductCard house={house} key={uuid()} />)}
    </div>
  );
};
