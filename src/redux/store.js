import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

export const store = createStore(rootReducer, applyMiddleware(...compose));
export default store;
