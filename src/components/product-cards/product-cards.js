import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../product-card/product-card";
import { Spiner } from "../spiner";
import { v4 as uuid } from "uuid";
import "./product-cards.css";

export const ProductCards = ({ houses, housesImage, titleText }) => {
  const statusSpiner = useSelector((state) => state.house.isDownloaded);
  const [filterKey, setFilterKey] = useState('')
  
  useEffect(() => {}, [statusSpiner, houses]);
  return (
    <div className="product-cards">
      <div className="product-cards__container">
        <div className="product-cards__title">
          <div className="product-cards__title-text">{titleText}:</div>
          <input value={filterKey} className='search' type='text' placeholder='Поиск_' onChange={(e)=>setFilterKey(e.target.value)} />
        </div>

        {!statusSpiner ? (
          <Spiner />
        ) : (
          houses?.map((house) => {
            if (house.title.toLowerCase().indexOf(filterKey.toLowerCase()) !== -1){
              return <ProductCard house={house} housesImage={housesImage} key={uuid()} />
              
            }
          }
          )
        )}
      </div>
    </div>
  );
};
