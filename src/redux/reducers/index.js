import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
  counterReducer,//counterReducer:counterReducer demek. Birden fazla olursa virgülle ayırıyoruz.
});

export default reducers;
