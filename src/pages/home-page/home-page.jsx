import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCards } from "../../components/product-cards/product-cards";
import { getPopular, setCurrentPage } from "../../redux/slices/popularSlice";
import { v4 as uuid } from "uuid";
import "./home-page.css";

export const HomePage = () => {
  const currentPage = useSelector((state) => state.popular.currentPage);
  const [limitElemOnPage, setLimitElemOnPage] = useState(4);
  const dispatch = useDispatch();

  const url = new URL("https://6075786f0baf7c0017fa64ce.mockapi.io/products");
  url.searchParams.append("page", currentPage);
  url.searchParams.append("limit", limitElemOnPage);

  const popularHouses = useSelector((state) => state.popular.popularHouses);
  const popularHousesImg = useSelector((state) => state.popular.popularHousesImg);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(setCurrentPage(currentPage + 1));
      dispatch(getPopular(url));
    }
  }, [dispatch, popularHousesImg]);
  return (
    <div className="home-page">
      <div className="favourites-cards">
        <ProductCards
          houses={popularHouses}
          housesImage={popularHousesImg}
          titleText="Популярные объекты"
          key={uuid()}
        />
      </div>
    </div>
  );
};
