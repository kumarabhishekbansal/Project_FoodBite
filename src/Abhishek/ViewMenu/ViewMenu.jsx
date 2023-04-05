import React from "react";
import Rescards from "../rescards/Rescards";
import "./style.css";
import { Link } from "react-router-dom";
import {
  MDBNavbarItem,
  MDBNavbarLink,
  MDBInputGroup,

} from "mdb-react-ui-kit";
import SearchIcon from '@mui/icons-material/Search';
const ViewMenu = () => {
  return (
    <>
      <div className="mainsection">
        {/* heading  */}
        
        <h1 className="memuhead text-center mt-4">View Resturants</h1>
       
        {/* top menu nav bar */}
        <div className="section1 mt-4">
          <MDBNavbarItem className="navit">
            <MDBNavbarLink>
              <Link to="/veg">Veg</Link>
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem className="navit">
            <MDBNavbarLink>
              <Link to="/non-veg">Non-Veg</Link>
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem className="navit">
            <MDBNavbarLink>
              <Link to="/famous">Most Popular</Link>
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <div className="insearch d-flex">
              <input type="text" placeholder="Search" className="inputsearch" />
              <SearchIcon sx={{fontSize:"2rem"}} className="searchicon"/>
          </div>
        </MDBInputGroup>

        </div>



        <div className="carddiv">
          <Rescards />

        </div>
      </div>
    </>
  );
};

export default ViewMenu;
