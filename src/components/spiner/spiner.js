import React from "react";
import "./spiner.css";

export const Spiner = () => {
  return (
    <div className="spiner">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
