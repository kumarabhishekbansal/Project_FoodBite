import React from "react";
import { useState } from "react";
// import '.../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import App from "../App";
const Clock=(props)=>{
    let time=new Date().toLocaleTimeString();
    const [ctime,updatetime]=useState(time);
    const update=()=>{
        time=new Date().toLocaleTimeString();
        updatetime(time);
    }
    // let val=props.val;
    setInterval(update,1000);
    return(
        <>
        <h1>{ctime}</h1>
        <h5>{props.val}</h5>
       
        </>
    );

};

export default Clock;