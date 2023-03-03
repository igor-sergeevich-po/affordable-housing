import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCards } from "../../components/product-cards/product-cards";
import { getHouses } from "../../redux/slices/houseSlice";
import "./filter-page.css";

export const FilterPage = () => {
  const houses = useSelector((state) => state.house.houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  return (
    <div>
      <ProductCards houses={houses} />
    </div>
  );
};
