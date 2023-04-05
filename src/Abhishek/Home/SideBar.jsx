import React from "react";
import "./sidebarstyle.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import img1 from '../static/images/home3d_1.jpg';
const SideBar = () => {
  return (
    <>
      <div className="homesidebar">
        <div className="textsidebar">
          <h2 className="p-2">Restaurants in your pocket</h2>
          <p className="p-2">
            Order from your favorite restaurants & track on the go, with the
            all-new FoodBite ..
          </p>
          <Button className="exp p-5">
            <Link to="/menu" className="expbtn">Explore More...</Link>
        </Button>
        </div>
        <hr />

        <div className="imgsidebar">
          <figure>
            <img src={img1} alt="" className="imgphn" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default SideBar;
