import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/reducers/index";

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
