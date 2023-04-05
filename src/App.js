import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./Abhishek/Home/Home";
import { Routes, Route} from "react-router-dom";
import ViewMenu from "./Abhishek/ViewMenu/ViewMenu";
import Bnavbar from "./Abhishek/bottom navigation/Bnavbar";
import Navigation from "./Abhishek/Navigation/Top/Navigation";
import Login from "./BikramJeet/com/Login";
import Form from "./BikramJeet/com/Form";
import Mainpage from "./Anmol/components/mainPage/Mainpage"
import Footers from "./Abhishek/Navigation/Footer/Footers";
const App = () => {
  return (
    <>
    <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/menu" element={<ViewMenu />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Form />}/>
        <Route exact path="/payment" element={<Mainpage />}/>
      </Routes>
      <Footers />
      <Bnavbar />
      
    </>
  );
};

export default App;
