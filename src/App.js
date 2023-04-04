import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navigation/Navbar";
import { Routes, Route} from "react-router-dom";
import ViewMenu from "./components/ViewMenu/ViewMenu";
const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/menu" element={<ViewMenu />}/>
      </Routes>
    </>
  );
};

export default App;
