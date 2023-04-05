import React from "react";
import '../Login.css';

import { useState } from "react";


const Page2=()=>{

// const [page,setPage]=useState(6);


  
  const show=(e)=>{
    e.preventDefault();
  }
   
    return(
        <>
        <div className="body">
            <div className="container">
                <div className="image">
                    
                </div>
                <div className="login-box">
                    <div className="form-box">
                        <form onSubmit={show}>
                            <h2>Step 2</h2>
                            <div className="input-box">
                                <span className="icon"></span>
                                <input type="text" name="fullname" required autoComplete="off"/>
                                <label>Enter Your Name</label> 
                                <br/>
                            </div>
                            <div className="input-box">
                                <span className="icon"></span>
                                <input type="text" name="username" required autoComplete="off"/>
                                <label>Enter User Name</label> 
                                <br/>
                            </div>
                            <div className="input-box">
                                <span className="icon"></span>
                                <input type="number" name="phone" required autoComplete="off"/>
                                <label>Enter Your Contact number</label> 
                                <br/>
                            </div>
                            

                            <button type="submit" className="btn" >Prev</button>
                            <button type="submit" className="btn" >Next</button>
                            
                            <div className="login-register">
                                <p>Existing Customer? <a href=""className="register-link">
                                    Sign in</a></p>
                            </div>
                        </form>

                        

                    </div>
                </div>


            </div>
            </div>
        
        </>
    )

};

export default Page2;

