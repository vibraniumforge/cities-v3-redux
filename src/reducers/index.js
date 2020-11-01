import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer.js";

const rootReducer = combineReducers({
  cities: citiesReducer,
});

export default rootReducer;
