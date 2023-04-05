import React, { useState,useEffect } from "react";
import SignUpInfo from "../com/signupInfo";
import PersonalInfo from "../com/PersonalInfo";
import OtherInfo from "../com/OtherInfo";
import Login from "./Login";
import Info from "../com/Info"
import '../new.css';
import { Link } from "react-router-dom";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    Name: "",
    userName: "",
    contact: "",
    Address: "",
    State: "",
    City: "",
    Dob:"",
    Profile:"",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other", "Add Profile Pic"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page===2){
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Info formData={formData} setFormData={setFormData} />;
    }
  };

  useEffect(()=>{
      const data=JSON.parse(localStorage.getItem('data'));
      if(data) setFormData(data);
  },[])

  return (
    <div className="body">
      <div className="box">
      <div className="form-container">
          <div className="progressbar">
            <div
              style={{ width: page === 0 ? "0%" : page === 1 ? "25%" :page===2 ? "50%": "100%" }}
            ></div>
          </div>
        

            <div className="header">
              <h1>{FormTitles[page]}</h1>
            </div>
        <div className="bodyy">{PageDisplay()}</div>
        <div className="footer">
          {
            page > 0 ?
          <button
            disabled={page === 0}
            onClick={() => {
             
              setPage((currPage) => currPage - 1);
             
            }}
          >
            Prev
          </button>:null}
          <button
            type="submit"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                localStorage.setItem("data",JSON.stringify(formData));
                console.log(formData);
              } else {
                console.log(page," before");
                setPage((currPage) => currPage + 1);
                console.log(page," after");
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
          

        
        </div>
        <div className="login-register">
                                <p>Existing Customer? <Link to="#" onClick={()=>{
                                  <Login/>
                                }}className="register-link">
                                    Sign in</Link></p>
           </div>
        
      </div>
      </div>
    </div>
  );
}

export default Form;