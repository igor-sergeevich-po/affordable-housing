import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Theme } from "../theme";
import "./header.css";
import { Search } from '../search';

export const Header = () => {
  const data = Date().split(" ").slice(0, 4).join(" ");
  const favouritesHouses = useSelector((state) => state.favourite.favourites);
  const favouriteLength = favouritesHouses.length;

  const moveUp = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };

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
        <span id="123" className="">
          {data}
        </span>{" "}
        <Link onClick={moveUp} className="header__housing-title">
          &uArr;
        </Link>
      </footer>
    </>
  );
};
