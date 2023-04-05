import React from "react";
import "./items.css";
const items = ({ img, title, quantity, price }) => {
  return (
    <div className="items">
      <div className="item">
        <div className="left">
          <img src={img} alt="img" className="itemImage" />
          <div className="leftDetail">
            <p>{title}</p>
            <p className="quantity">x {quantity}</p>
          </div>
        </div>
        <div className="right">₹ {price}</div>
      </div>
    </div>
  );
};

export default items;
