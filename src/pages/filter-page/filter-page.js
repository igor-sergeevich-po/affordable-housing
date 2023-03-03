import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCards } from "../../components/product-cards/product-cards";
import { getHouses, setHouses, setStatus } from "../../redux/slices/houseSlice";
import "./filter-page.css";

export const FilterPage = () => {
  const dispatch = useDispatch();
  dispatch(setStatus(false));
  const houses = useSelector((state) => state.house.houses);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  return (
    <div>
      <ProductCards houses={houses} />
    </div>
  );
};
