import React from "react";
import { HiTruck } from "react-icons/hi";
import { RiShieldStarFill } from "react-icons/ri";
import { HiOutlineChartBar } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setStatusSeen } from "../../redux/slices/houseSlice";
import "./product-card.css";

export const ProductCard = ({ house }) => {
  const { oldPrice, price, title, seen, id, locality, date } = house;
  const housesImg = useSelector((state) => state.house.housesImg[id]);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    // e.stopImmediatePropogation();
    // e.stopPropogation();
    dispatch(setStatusSeen(title));
  };
  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
      className={`product-card ${seen ? "product-card__is-seen" : ""}`}
    >
      {seen && (
        <div className="product-card__status-container">
          <div className="product-card__status">Просмотрено</div>
        </div>
      )}

      <div className="product-card__image">
        <img
          className="product-card__image-elem"
          src={housesImg.url}
          alt={housesImg.title}
        />
        <AiOutlineHeart className="icons icon-heart" />
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
