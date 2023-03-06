import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCards } from "../../components/product-cards/product-cards";
import {
  getHouses,
  setCurrentPage,
  setStatusDownloaded,
} from "../../redux/slices/houseSlice";
import { Spiner } from "../../components/spiner";
import { Link } from "react-router-dom";
import "./filter-page.css";

export const FilterPage = () => {
  const statusSpiner = useSelector((state) => state.house.isDownloaded);
  const currentPage = useSelector((state) => state.house.currentPage);

  const [limitElemOnPage, setLimitElemOnPage] = useState(8);
  const dispatch = useDispatch();

  const url = new URL("https://6075786f0baf7c0017fa64ce.mockapi.io/products");
  url.searchParams.append("page", currentPage);
  url.searchParams.append("limit", limitElemOnPage);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(setCurrentPage(currentPage + 1));
      dispatch(getHouses(url));
    }
  }, [dispatch]);

  const handleFetch = () => {
    setTimeout(() => {
      window.scrollBy({
        top: 50000,
        behavior: "smooth",
      });
    }, 500);

    dispatch(setStatusDownloaded(false));
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(getHouses(url));
  };

  return (
    <div className="filter-page">
      {!statusSpiner ? <Spiner /> : <ProductCards />}

      <Link href="#" className="filter-page__btn-more" onClick={handleFetch}>
        Показать ещё &or;
      </Link>
    </div>
  );
};
