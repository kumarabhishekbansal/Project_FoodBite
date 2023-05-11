import React from "react";
import "./style.css";
import { useSelector,useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import {onadditembtn} from "../../../Reducers/Dashboard/AddResSlice";
import AddItemModal from "./AddItemModal";
import ViewMenuRes from "../ViewMenuRes/ViewMenuRes";
import { getAllFood,reset } from "../../../Reducers/Items/ItemSlice";
const AdminResDetail = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
    const {val}=useParams();
    const usedval=JSON.parse(decodeURIComponent(val));
    const {user}=useSelector((state)=>state.auth);
  const {additembtn}=useSelector((state)=>state.addres);
    const handleadditem=()=>{
      console.log("add item clicked");
      dispatch(onadditembtn());
      console.log("additembtn  : ",additembtn);
    }

    const handleviewmenu=()=>{
      console.log("handle view menu clicked");
        // dispatch(getAllFood(usedval._id));
        navigate(`/viewres/${encodeURIComponent(JSON.stringify(usedval))}`)
        window.location.reload(false);
      }

  return (
    <>
     {additembtn?(<>
        <AddItemModal val={usedval}/>
      </>):(<>

      </>)}
      <div className="admin_res_parent">
        <div className="main_div_admin_res">
          <div className="partition_admin_res1">
            <div className="div_for_image"></div>
                <figure>
                    <img src={usedval.profile} alt="img" className="image" />
                </figure>
            <div className="other_info">
            {usedval.isvacancies?(<h3 className="text-warning p-4"> vacancies : Yes </h3>):(<h3> vacancies : No </h3>)}  
            {user.isAdmin?(<>

            </>):(<>
                <button className={`${usedval.isvacancies?'btn-info':'btn-danger'} aplbtn p-4`}>Apply</button>
            </>)}
                    
                    <h3 className="p-4"> openHours : {usedval.openHours} </h3>
                    <h3 className="p-4"> closeHours : {usedval.closeHours} </h3>
            </div>
          </div>
        <hr />
          <div className="partition_admin_res2">
            <div className="info1">
                <h3>Name : {usedval.trademark} </h3>
                <h3>Phone : {usedval.phone}</h3>
            </div>
            <div className="info2">
                <h3>Descritption : {usedval.description}</h3>
            </div>
            <div className="info3">
            <h3>Address : {usedval.address}</h3>
            </div>
            <div className="info4">
                <h3>City : {usedval.city}</h3>
            </div>
            <div className="info5">
                <h3>Email : {usedval.email}</h3>
            </div>
            <div className="info6">
            {user.isAdmin?(<>
                <button className="btn-primary btn-lg" onClick={handleadditem}>Add Item</button>
                <button className="btn-warning btn-lg m-4" onClick={handleviewmenu}>Update Restuarant</button>
            </>):(<>
                <button className="btn-info btn-lg">Chat with us</button>
                <button className="btn-warning btn-lg m-4" onClick={handleviewmenu}>View Menu</button>
            </>)}
            
            
            </div>
          </div>
        </div>
      </div>

    <div className="menu_at_res_main">
          <ViewMenuRes val={usedval}/>
    </div>

    </>
  );
};

export default AdminResDetail;
