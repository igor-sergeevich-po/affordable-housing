import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ProductCards } from "../../components/product-cards/product-cards";
import {
  getHouses,
  setCurrentPage,
  setStatusDownloaded
} from "../../redux/slices/houseSlice";
import { Spiner } from "../../components/spiner";
import "./filter-page.css";
import { Search } from '../../components/search';

export const FilterPage = () => {
  const statusSpiner = useSelector((state) => state.house.isDownloaded);
  const currentPage = useSelector((state) => state.house.currentPage);
  const houses = useSelector((state) => state.house.houses);

  const housesImage = useSelector((state) => state.house.housesImg);

  const [limitElemOnPage] = useState(8);
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

  useEffect(() => {}, [housesImage, statusSpiner]);

  const handleFetch = () => {
    dispatch(setStatusDownloaded(false));
    setTimeout(() => {
      window.scrollBy({
        top: 50000,
        behavior: "smooth",
      });
    }, 500);

    dispatch(setCurrentPage(currentPage + 1));
    dispatch(getHouses(url));
  };

  return (
    <div className="filter-page">
      {!statusSpiner ? (
        <Spiner />
      ) : (
        <div className="favourites-cards">
          <ProductCards
            houses={houses}
            housesImage={housesImage}
            titleText="Актуальные объявления"
          />
        </div>
      )}

      <Link href="null" className="filter-page__btn-more" onClick={handleFetch}>
        Показать ещё &or;
      </Link>
    </div>
  );
};
