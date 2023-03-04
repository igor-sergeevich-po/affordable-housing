import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import { Theme } from "../theme";
import "./header.css";

export const Header = () => {
  const data = Date().split(" ").slice(0, 4).join(" ");
  const favouritesHouses = useSelector((state) => state.favourite.favourites);
  const favouriteLength = favouritesHouses.length;
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <nav className="nav">
            <NavLink to="/affordable-housing/" className="header__housing-title">
              Home page
            </NavLink>
            <NavLink
              to="/affordable-housing/filter-page"
              className="header__housing-title"
            >
              Filter page
            </NavLink>
            <NavLink
              to="/affordable-housing/favourites-page"
              className="header__housing-title"
            >
              Favourites page
              {favouriteLength < 1 ? (
                ""
              ) : (
                <span className="header__favourites-length">{favouriteLength}</span>
              )}
            </NavLink>
          </nav>
          <Theme></Theme>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <span className="">{data}</span>
      </footer>
    </>
  );
};
