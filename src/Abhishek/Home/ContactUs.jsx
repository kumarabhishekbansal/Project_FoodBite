import React from "react";
import "./NewHome.css";
import contactimg from "../NewHomeImages/contact-bg.jpg";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBTextArea,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
const ContactUs = () => {
  return (
    <>
      <section className="order" id="order">
        <h1 className="heading">
          {" "}
          Contact <span>Us</span>{" "}
        </h1>
        <MDBRow>
        <MDBCol lg="8">
          <form
            id="form"
            className="text-center col-12 formcontact"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            

            <MDBInput label="Name" v-model="name" wrapperClass="mb-4" className="inputcontact" />

            <MDBInput
              type="email"
              label="Email address"
              v-model="email"
              wrapperClass="mb-4"
              className="inputcontact"
            />

            <MDBInput label="Subject" v-model="subject" wrapperClass="mb-4" className="inputcontact"/>

            <MDBTextArea wrapperClass="mb-4" label="Message" className="messagecontact"/>

            <MDBBtn color="primary" block className="my-4">
              Send
            </MDBBtn>
          </form>
          </MDBCol>
          
          
          <MDBCol lg="4">
          <div className="image" data-aos="fade-left">
            <img src={contactimg} alt="" />
          </div>  
          </MDBCol>
          </MDBRow>
      </section>
    </>
  );
};

export default ContactUs;
