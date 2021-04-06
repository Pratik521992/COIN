import { combineReducers } from "redux";
import dashboardReducer from "./dashboard";
import loginReducer from "./login";

const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer
});

export default rootReducer;
