import React from "react";
import { HiTruck } from "react-icons/hi";
import { RiShieldStarFill } from "react-icons/ri";
import { HiOutlineChartBar } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setStatusSeen, setStausFavourites } from "../../redux/slices/houseSlice";
import { addFavourite, removeFavourite } from "../../redux/slices/favouriteSlice";
import { Carousel } from "../carousel";
import "./product-card.css";
import { setStausFavouritesPopular } from "../../redux/slices/popularSlice";

export const ProductCard = ({ house, housesImage }) => {
  const { oldPrice, price, seen, id, locality, date } = house;
  const favourites = useSelector((state) => state.favourite.favourites);
  const title = house.title.length > 23 ? house.title.slice(0, 23) + "..." : house.title;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setStatusSeen(house.title));
  };

  const setFavourite = () => {
    let isContain = false;
    favourites.map((elem) => {
      if (elem.title === house.title) {
        isContain = true;
      }
      return "";
    });
    if (!isContain) {
      house = { ...house, isFavourites: true, seen: true };

      dispatch(setStausFavourites(house.title));
      dispatch(setStausFavouritesPopular(house.title));
      dispatch(addFavourite(house));
    } else if (isContain) {
      dispatch(setStausFavouritesPopular(house.title));
      dispatch(setStausFavourites(house.title));
      dispatch(removeFavourite(house.title));
    }
  };
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={`product-card ${house.seen === true ? "product-card__is-seen" : ""}`}
    >
      {seen && (
        <div className="product-card__status-container">
          <div className="product-card__status">Просмотрено</div>
        </div>
      )}

      <div className={`product-card__image`}>
        <Carousel housesImage={housesImage} id={id} />

        <AiOutlineHeart
          onClick={() => setFavourite()}
          className={`icons icon-heart ${
            house?.isFavourites === true ? "icon-heart__active" : ""
          } `}
        />
        <HiOutlineChartBar className="icons icon-chart" />
      </div>
      <div className="product-card__description">
        <div className="product-card__header">
          <span className="product-card__header-old-price">{` ${oldPrice} `}&#8381;</span>
          <div className="product-card__header-icons">
            <div className="header-icons">
              <HiTruck className="icons" />
            </div>
            <div className="header-icons">
              <RiShieldStarFill className="icons" />
            </div>
          </div>
        </div>
        <span className="product-card__base-price">{price} &#8381;</span>
        <p className="product-card__description">{title}</p>

        <div className="product-card__location">
          <span className="product-card__location-item">{locality}</span>
          <span className="product-card__location-item">{date}</span>
        </div>
      </div>
    </div>
  );
};
