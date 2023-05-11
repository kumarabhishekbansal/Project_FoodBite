import React from "react";
import "./App.css"

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
import Footers from "./Abhishek/Navigation/Footer/Footers";
import Dashboard from "./Abhishek/Profile/DashBoard/DashBoard";
import ViewAdminRes from "./Abhishek/Profile/AddRestuarant/ViewAdminRes";
import AdminResDetail from "./Abhishek/Profile/AdminResDetail/AdminResDetail";
import ViewClientRes from "./Abhishek/Profile/AddRestuarant/ViewClientRes";
import Cart from "./Abhishek/Profile/ViewMenuRes/Cart";
import PreviousOrder from "./Anmol/OrderList/PreviousOrder";
const App = () => {
  return (
    <>
    <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/menu" element={<ViewMenu />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Form />}/>
        <Route exact path="/profile" element={<Dashboard />}/>
        <Route exact path="/viewadminres" element={<ViewAdminRes />}/>
        <Route exact path="/viewres/:val" element={<AdminResDetail />}/>
        <Route exact path="/viewres" element={<ViewClientRes />}/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/historyorders" element={<PreviousOrder />}/>
      
      </Routes>
      <Footers />
      <Bnavbar />
      
    </>
  );
};

export default App;
