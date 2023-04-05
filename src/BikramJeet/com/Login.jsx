import React from "react";
import '../com/Login.css';
import { useState } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

const Login=()=>{

    const [page,setPage]=useState(1);

    const show=(object)=>{
        object.preventDefault();
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
                            <h2>Sign In</h2>
                            <div className="input-box">
                                <span className="icon"></span>
                                <input type="email" name="email" required autoComplete="off"/>
                                <label>Enter Your Email</label> 
                                <br/>
                            </div>
                            <div className="input-box">
                                <span className="icon"></span>
                                <input type="password" name="password" required/>
                                <label>Password</label> 
                                <br />
                            </div>
                            <div className="remember-forget">
                                <p><input type="checkbox"/>Remember me</p>
                                <Link href="">Forgot Password?</Link>
                            </div>
                            <button type="submit" className="btn" >Login</button>

                            <div className="login-register">
                                <p>Don't have an account? <Link to="#" onClick={()=>{
                                      const next=2;
                                      setPage(next);
                                    }}  className="register-link">
                                    Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
            {
              page == 2 ? <Form/> : null
            }
            </div>
        
        </>
    )
}

export default Login