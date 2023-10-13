import { combineReducers } from "redux";
import DasboardReducer from "./Element/Dashboard";
import { Admin } from "./Element/Admin";



const RootReducer = combineReducers({
    DasboardReducer,
    Admin


})
export default RootReducer
