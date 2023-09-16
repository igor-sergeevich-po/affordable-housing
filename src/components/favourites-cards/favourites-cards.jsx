import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../product-card/product-card";
import { v4 as uuid } from "uuid";
import "./favourites-cards.css";
import { ProductCards } from "../product-cards/product-cards";

export const FavouritesCards = () => {
  const favourites = useSelector((state) => state.favourite.favourites);
  const housesImage = useSelector((state) => state.house.housesImg);
  return (
    <div className="favourites-cards">
      {favourites.length < 1 ? (
        "Вы ничего не добавили"
      ) : (
        <ProductCards
          houses={favourites}
          housesImage={housesImage}
          titleText="Избранное"
          key={uuid()}
        />
      )}
    </div>
  );
};
