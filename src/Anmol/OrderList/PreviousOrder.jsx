import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getuser } from "../../Reducers/Auth/AuthSlice";
import { orderreset, findorders } from "../../Reducers/orders/OrderSlice";
import { useDispatch, useSelector } from "react-redux";
import "./PreviousOrder.css";
import Moment from "react-moment";
import "../Images/bg2.jpg";
import Shop from "../components/Empty/Shop";
import EmptyOrder from "../components/Empty/EmptyOrder";
import { resorderreset } from "../../Reducers/ResOrder/ResOrderSlice";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RecommendIcon from "@mui/icons-material/Recommend";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BeenhereIcon from "@mui/icons-material/Beenhere";

const PreviousOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { userorders, isError, isLoading, isSuccess, isMessage } = useSelector(
    (state) => state.orders
  );
  const { resorder, isresSuccess } = useSelector(
    (state) => state.ResOrderDetails
  );
  const [orders, setorders] = useState([]);

  const [orderflag, setorderflag] = useState(false);

  useEffect(() => {
    dispatch(getuser(user._id));
    if (user) {
      dispatch(findorders(user._id));
      dispatch(orderreset());
    }
  }, []);

  useEffect(() => {
    if (isError) {
      console.log(isMessage);
      setorderflag(false);
    } else if (isSuccess) {
      if (userorders) {
        setorderflag(true);
        setorders(userorders);
        if (userorders.length === 0) {
          setorderflag(false);
        }
      } else {
        setorderflag(false);
      }
    }
  }, [isError, isLoading, isSuccess, isMessage]);

  if (isLoading) {
    return <h1 style={{ marginTop: "15rem" }}>Loading...</h1>;
  }

  return (
    <>
      <div className="bg_div_history_food"></div>
      <div className="order_history_div">
        <header className="history_order_header">
          <h1>Previous Orders</h1>
        </header>
        <main>
          {orderflag ? (
            <>
              {orders.map((val) => {
                return (
                  <div className="div_history">
                    <ul className="orders-list">
                      <li className="order-item">
                        <div className="order-info">
                          <h2>Order #{val._id}</h2>
                          <p>Placed on {val.createdAt.substring(0, 10)}</p>
                          <h2 className="RestoName">
                            Restuarnat : {val.resId.trademark}
                          </h2>
                        </div>
                        <div className="order-details">
                          <div className="order_status_user_main_div">
                            <div className="placed_div order_status_div">
                              <h1>
                                <b>
                                  <strong>Placed</strong>
                                </b>
                              </h1>
                              <RestaurantIcon
                                style={{ fontSize: "5rem", color: "grey" }}
                              />

                              {val.orderstatus === "Placed" ||
                              val.orderstatus === "Confirmed" ||
                              val.orderstatus === "Prepared" ||
                              val.orderstatus === "Delivered" ||
                              val.orderstatus === "Completed" ? (
                                <>
                                  <BeenhereIcon
                                    style={{ fontSize: "5rem", color: "blue" }}
                                  />
                                  <p className="mb-1">
                                    <Moment format="h:mm A">
                                      {val.updatedAt}
                                    </Moment>
                                  </p>
                                  <div className="hrlinedone" />
                                </>
                              ) : (
                                <>
                                <p className="mb-1">
                                    <Moment format="h:mm A">
                                      {}
                                    </Moment>
                                  </p>
                                  <div className="hrline" />
                                </>
                              )}
                            </div>
                            <div className="confirmed_div order_status_div">
                              <h1>
                                <b>
                                  <strong>Confirmed</strong>
                                </b>
                              </h1>
                              <RecommendIcon
                                style={{ fontSize: "5rem", color: "grey" }}
                              />
                              {val.orderstatus === "Confirmed" ||
                              val.orderstatus === "Prepared" ||
                              val.orderstatus === "Delivered" ||
                              val.orderstatus === "Completed" ? (
                                <>
                                  <BeenhereIcon
                                    style={{ fontSize: "5rem", color: "blue" }}
                                  />
                                  <p className="mb-1">
                                    <Moment format="h:mm A">
                                      {val.updatedAt}
                                    </Moment>
                                  </p>
                                  <div className="hrlinedone" />
                                </>
                              ) : (
                                <>
                                  <br />
                                  <br />
                                  <div className="hrline" />
                                </>
                              )}
                            </div>
                            <div className="prepared_div order_status_div">
                              <h1>
                                <b>
                                  <strong>Prepared</strong>
                                </b>
                              </h1>
                              <AlarmOnIcon
                                style={{ fontSize: "5rem", color: "grey" }}
                              />
                              {val.orderstatus === "Prepared" ||
                              val.orderstatus === "Delivered" ||
                              val.orderstatus === "Completed" ? (
                                <>
                                  <BeenhereIcon
                                    style={{ fontSize: "5rem", color: "blue" }}
                                  />
                                  <p className="mb-1">
                                    <Moment format="h:mm A">
                                      {val.updatedAt}
                                    </Moment>
                                  </p>
                                  <div className="hrlinedone" />
                                </>
                              ) : (
                                <>
                                <br />
                                  <br />
                                  <div className="hrline" />
                                </>
                              )}
                            </div>
                            <div className="delivered_div order_status_div">
                              <h1>
                                <b>
                                  <strong>Delivered</strong>
                                </b>
                              </h1>
                              <DeliveryDiningIcon
                                style={{ fontSize: "5rem", color: "grey" }}
                              />
                              {val.orderstatus === "Delivered" ||
                              val.orderstatus === "Completed" ? (
                                <>
                                  <BeenhereIcon
                                    style={{ fontSize: "5rem", color: "blue" }}
                                  />
                                  <p className="mb-1">
                                    <Moment format="h:mm A">
                                      {val.updatedAt}
                                    </Moment>
                                  </p>
                                  <div className="hrlinedone" />
                                </>
                              ) : (
                                <>
                                <br />
                                  <br />
                                  <div className="hrline" />
                                </>
                              )}
                            </div>
                            <div className="completed_div order_status_div">
                              <h1>
                                <b>
                                  <strong>Completed</strong>
                                </b>
                              </h1>
                              <TaskAltIcon
                                style={{ fontSize: "5rem", color: "grey" }}
                              />
                              {val.orderstatus === "Completed" ? (
                                <>
                                  <BeenhereIcon
                                    style={{ fontSize: "5rem", color: "blue" }}
                                  />
                                  <p className="mb-1">
                                    <Moment format="h:mm A">
                                      {val.updatedAt}
                                    </Moment>
                                  </p>
                                  <div className="hrlinedone" />
                                </>
                              ) : (
                                <>
                                <br />
                                  <br />
                                  <div className="hrline" />
                                </>
                              )}
                            </div>
                          </div>
                          <br />
                          <h3 className="order_detail_heading">Order Details</h3>
                          {val.orderDetails.items.map((valitem) => {
                            return (
                              <div className="main_order_item_detail_div">
                                <div className="div1 order_item_detail_div">
                                  <img
                                    src={valitem.itemimg}
                                    alt="burger"
                                    className="itms"
                                  />
                                </div>

                                <div className="div2 order_item_detail_div">
                                  <h3>Name :{valitem.itemname}</h3>
                                </div>

                                <div className="div3 order_item_detail_div">
                                  <h3>Price : {valitem.price} Rs</h3>
                                </div>

                                <div className="div4 order_item_detail_div">
                                  <h3>Quantity : {valitem.quantity}</h3>
                                </div>
                                <div className="div5 order_item_detail_div">
                                  <h3>TotalPrice :{valitem.totalPrice} Rs</h3>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <EmptyOrder />
            </>
          )}
        </main>
        <Shop />
      </div>
    </>
  );
};

export default PreviousOrder;
