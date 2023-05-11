import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { offadditembtn } from "../../../Reducers/Dashboard/AddResSlice";
import si1 from "../images/resback.jpg";
import convertToBase64 from "../../../BikramJeet/com/helper/convert";
import { ToastContainer, toast } from "react-toastify";
import { reset, additem } from "../../../Reducers/Items/ItemSlice";
import "react-toastify/dist/ReactToastify.css";
import Noodles from "../NoodleSection/Noodles";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Modal = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [topRightModal, setTopRightModal] = useState(true);

  const [img, setimg] = useState(null);
  const handleimage = async (e) => {
    const data = new FormData();
    const file = e.target.files[0];
    setimg(file);
    data.append("file", file);
    data.append("upload_preset", "FoodBite");
    data.append("cloud_name", "dbhnxaw3m");
    try {
      fetch("https://api.cloudinary.com/v1_1/dbhnxaw3m/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setimg(data.url);
          setitemdata({ ...itemdata, photo: data.url });
        })
        .catch((err) => console.log("error"));
    } catch (error) {
      console.log("Error");
    }
  };

  const handleChange = (event) => {
    setitemdata({ ...itemdata, category: event.target.value });
  };

  const handleclose = () => {
    dispatch(offadditembtn());
  };
  const { item, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.itemreducer
  );

  const [itemdata, setitemdata] = useState({
    restaurant: "",
    name: "",
    isVeg: "",
    isContainsEgg: "",
    category: "",
    photo: "",
    price: "",
  });
  const { restaurant, name, isVeg, isContainsEgg, category, photo, price } =
    itemdata;

  const handleform = (e) => {
    setitemdata({ ...itemdata, restaurant: props.val._id });
    setitemdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      console.log("message : ", message);
      toast.error(message);
      setTimeout(() => {
        dispatch(reset());
      }, 5000);
    } else if (isSuccess || item) {
      console.log(message);
      toast.success("Adding.. ");
      setTimeout(() => {
        navigate("/");
        dispatch(reset());
      }, 5000);
    } else {
      dispatch(reset());
    }
  }, [item, isError, isSuccess, message, navigate, dispatch]);

  const handlechange1 = (e) => {
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;

    const checkedValue = e.target.value;

    const checkedName = e.target.name;

    console.log(checked, checkedValue, checkedName);

    if (checked === true) {
      setitemdata({ ...itemdata, isVeg: true, isContainsEgg: false });
    } else {
      setitemdata({ ...itemdata, isVeg: false, isContainsEgg: true });
    }
  };

  const handlechange2 = (e) => {
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;

    const checkedValue = e.target.value;

    const checkedName = e.target.name;

    console.log(checked, checkedValue, checkedName);

    if (checked === true) {
      setitemdata({ ...itemdata, isVeg: false, isContainsEgg: true });
    } else {
      setitemdata({ ...itemdata, isVeg: true, isContainsEgg: false });
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    // console.log(props.val._id);
    setitemdata({ ...itemdata, restaurant: props.val._id });
    if (!photo || !restaurant || !name || !category || !price) {
      console.log(itemdata);
      toast.error("Please filled all data");
      return;
    } else {
      dispatch(additem(itemdata));
      toast.success("Item added..");
      setitemdata({
        restaurant: "",
        name: "",
        isVeg: "",
        isContainsEgg: "",
        category: "",
        photo: "",
        price: "",
      });
      setimg(null);
    }
  };

  return (
    <>
      <MDBModal
        animationDirection="right"
        show={topRightModal}
        tabIndex="-1"
        setShow={setTopRightModal}
      >
        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader className="bg-info text-white">
              <MDBModalTitle>Add Item In your Restuarant</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={handleclose}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row">
                <div className="col-12 text-center">
                  <form onSubmit={handlesubmit}>
                    {/* item pic */}

                    <div className="signup_profile_container">
                      <img
                        src={img || si1}
                        alt=""
                        className="signup_profile_pic"
                      />
                      <label htmlFor="profile" className="image-upload-label">
                        <i className="fas fa-plus-circle add-picture-icon"></i>
                      </label>
                      <input
                        type="file"
                        onChange={handleimage}
                        id="profile"
                        hidden
                        name="profile"
                      />
                      {/* <button onClick={handleimage}>Upload</button> */}
                    </div>

                    {/* resid */}

                    <div class="mb-3">
                      <label htmlFor="exampleInputname1" className="form-label">
                        Restuarant ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputname1"
                        name="user"
                        readOnly
                        value={props.val._id}
                      />
                    </div>

                    {/* Item name */}

                    <div class="mb-3">
                      <label htmlFor="exampleInputname2" className="form-label">
                        Item Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputname2"
                        name="name"
                        value={name}
                        onChange={handleform}
                      />
                    </div>

                    {/* category */}

                    <div class="mb-3">
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={category}
                          onChange={handleChange}
                          label="Category"
                        >
                          <MenuItem value={"Pizza"}>Pizza</MenuItem>
                          <MenuItem value={"Burger"}>Burger</MenuItem>
                          <MenuItem value={"Subway"}>Subway</MenuItem>
                          <MenuItem value={"Noodles"}>Noodles</MenuItem>
                          <MenuItem value={"Garlic Bread"}>
                            Garlic Bread
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    {/* is veg or iscontainsegg */}
                    <MDBCheckbox
                      name="isVeg"
                      value="isVeg"
                      id="flexCheckDefault"
                      label="vegetarian"
                      onChange={handlechange1}
                    />

                    <MDBCheckbox
                      name="isContainsEgg"
                      value="isContainsEgg"
                      id="flexCheckDefault"
                      label="Non vegetarian"
                      onChange={handlechange2}
                    />
                    {/* price */}

                    <div class="mb-3">
                      <label
                        htmlFor="exampleInputphone1"
                        className="form-label"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputphone1"
                        name="price"
                        value={price}
                        onChange={handleform}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Add
                    </button>
                    <ToastContainer />
                  </form>
                </div>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default Modal;
