import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import img1 from "../static/images/home3d_1.jpg";
import  Resdata  from "../dummy/resturants";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const Rescards = () => {
  return (
    <>
    <div className="cardmenu mt-5">
      {Resdata.map((val) => {
        return (
          
            <MDBCard className="cardsmenu">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage src={img1} fluid alt="..." />
                <Link>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </Link>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{val.name}</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn> <Link to='/' style={{color:"white"}}>Read More</Link></MDBBtn>
              </MDBCardBody>
            </MDBCard>
          
        );
      })}
      </div>
    </>
  );
};

export default Rescards;
