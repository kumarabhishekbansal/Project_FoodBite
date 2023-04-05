import React from "react";
import "./mainTopbar.css";
const MainTopbar = () => {
  return (
    <div className="maintopbar">
      <h1>Food Bite</h1>
      <img src={process.env.PUBLIC_URL + "/data/mainLogo.png"} />
    </div>
  );
};

export default MainTopbar;
