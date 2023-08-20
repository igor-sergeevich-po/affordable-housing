import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../product-card/product-card";
import { Spiner } from "../spiner";
import { v4 as uuid } from "uuid";
import "./product-cards.css";
import { Search } from '../search';
import { Filters } from '../filters'

export const ProductCards = ({ houses, housesImage, titleText }) => {
  const statusSpiner = useSelector((state) => state.house.isDownloaded);
  const [searchKey, setSearchKey] = useState('');
  const [filterKey, setFilterKey] = useState('');
  
  useEffect(() => {}, [statusSpiner, houses]);
  return (
    <React.Fragment>
        <Filters />
          <div className="product-cards">
            <div className="product-cards__container">
              <div className="product-cards__title">
                <div className="product-cards__title-text">{titleText}:</div>
                <Search searchKey={searchKey} setSearchKey={setSearchKey} />
                {/* <input value={filterKey} className='search' type='text' placeholder='Поиск_' onChange={(e)=>setFilterKey(e.target.value)} /> */}
              </div>

              {!statusSpiner ? (
                <Spiner />
              ) : (
                houses?.map((house) => {
                  console.log(searchKey && house.title.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1)
                  if (searchKey && house.title.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1){
                    return <ProductCard house={house} housesImage={housesImage} key={uuid()} />
                  
                  }
                  if (!searchKey){
                    return <ProductCard house={house} housesImage={housesImage} key={uuid()} />
                  
                  }
                }
                )
              )}
            </div>
          </div>
    </React.Fragment>
  );
};
