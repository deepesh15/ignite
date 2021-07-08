//for multiple reducers
import { combineReducers } from "redux";
import gamesReducer  from  '../reducers/gamesReducer';


const rootReducer = combineReducers({
    games: gamesReducer,
});

export default rootReducer;