import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../Reducers/Auth/AuthSlice'
import AddResReducer from "../Reducers/Dashboard/AddResSlice"
import AddResModalReducer from '../Reducers/Modal/AddResModalSlice'
import ItemReducer from '../Reducers/Items/ItemSlice'
import CartReducer from "../Reducers/Cart/CartSlice"
// import PaymentService from '../Reducers/Payment/PaymentService'
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    addres:AddResReducer,
    addresmodal:AddResModalReducer,
    itemreducer:ItemReducer,
    cart:CartReducer,
    // [PaymentService.reducerPath]: PaymentService.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat([
  //    PaymentService.middleware,
  //   ]),
});