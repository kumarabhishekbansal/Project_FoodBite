import React from "react";
import "./style.css";
import Bnavbar from "../bottom navigation/Bnavbar";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Work from "../Ques/Works/Work";
import SideBar from "./SideBar";
const Home = () => {
  return (
    <>
      <div className="image-container">
        <h1 className="image-text">
          Part of the secret of a success in life is to eat what you like and
          let the food fight it out inside.
        </h1>
        
      </div>

      <div className="works">
        <Work />
      </div>

      <div className="sidebar">
        <SideBar />
      </div>
      <Bnavbar />
    </>
  );
};

export default Home;
