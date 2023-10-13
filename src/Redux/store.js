import { applyMiddleware, createStore } from "redux";
import RootReducer from "./Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default Store;