import React from "react";
import { BsSun } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleChangeTheme } from "../../redux/slices/themeSlice";
import "./theme.css";

export const Theme = () => {
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    if (document.body.hasAttribute("dark")) {
      document.body.removeAttribute("dark");
      dispatch(toggleChangeTheme());
    } else {
      document.body.setAttribute("dark", "");
      dispatch(toggleChangeTheme());
    }
  };
  return (
    <div>
      <BsSun onClick={() => handleChangeTheme()} className="header_theme-button"></BsSun>
    </div>
  );
};
