//for multiple reducers
import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import gamesReducer  from  '../reducers/gamesReducer';


const rootReducer = combineReducers({
    games: gamesReducer,
    detail : detailReducer,
});

export default rootReducer;