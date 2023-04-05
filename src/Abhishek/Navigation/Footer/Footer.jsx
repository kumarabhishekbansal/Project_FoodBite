import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import {
  MDBNavbarItem,
  MDBNavbarLink,


} from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <>
      <section id="footer" className="top-content footer ">
        <div className="main-footer border border-warning">
          
          <div className="f1">
            <div className="get">
              <h2 className="headfget ">Company</h2>
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#services"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#interest"
                  >
                    About
                  </Link>
                </li>
                
              </ul>
            </div>
</div>


        <div className="f1">
        <MDBNavbarItem className="navitem">
                <MDBNavbarLink><Link to='https://www.instagram.com/abhi_s.he.k?r=nametag'>Instagram</Link></MDBNavbarLink>
        </MDBNavbarItem>
        </div>

            <div className="f1 connect">
              <h2 className="headf">connect with us</h2>
              <div  className="uld">
              <ul>
                <li className="mt-1 list-unstyled">
                  <Link href="https://www.instagram.com/abhi_s.he.k?r=nametag">
                    <i aria-hidden="true"></i> Instagram
                  </Link>
                </li>
                <li className="mt-1 list-unstyled">
                  <Link href="https://www.instagram.com/abhi_s.he.k?r=nametag">
                    <i aria-hidden="true"></i>Twitter
                  </Link>
                </li>
                <li className="mt-1 list-unstyled">
                  <Link href="https://www.linkedin.com/in/abhishek-1a9541205">
                    <i aria-hidden="true"></i> Linkedin
                  </Link>
                </li>
                <li className="mt-1 list-unstyled">
                  <Link href="https://www.linkedin.com/in/abhishek-1a9541205">
                    <i aria-hidden="true"></i>Whatsapp
                  </Link>
                </li>
                <li className="mt-1 list-unstyled">
                  <Link href="https://wa.me/qr/P4LWKZTWO346I1">
                    <i aria-hidden="true"></i>Facebook
                  </Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
        
      </section>
    </>
  );
};

export default Footer;
