import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCards } from "../../components/product-cards/product-cards";
import { getHouses } from "../../redux/slices/houseSlice";
import { Button } from "../../components/button";
import "./filter-page.css";

export const FilterPage = () => {
  const houses = useSelector((state) => state.house.houses);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitElemOnPage, setLimitElemOnPage] = useState(2);
  const dispatch = useDispatch();

  const url = new URL("https://6075786f0baf7c0017fa64ce.mockapi.io/products");
  url.searchParams.append("page", currentPage);
  url.searchParams.append("limit", limitElemOnPage);

  useEffect(() => {
    dispatch(getHouses(url));
  }, [dispatch]);

  const handleFetch = () => {
    console.log("Показать ещё");
    setCurrentPage((prev) => ++prev);
    dispatch(getHouses(url));
  };

  return (
    <div>
      <ProductCards />
      <button onClick={() => handleFetch()}>Показать ещё</button>
    </div>
  );
};
