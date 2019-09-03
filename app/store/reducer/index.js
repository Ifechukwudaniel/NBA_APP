import { combineReducers  } from "redux";
import Users from "./user.reducer"
import { News } from "./new_reducers";


const rootReducer = combineReducers({
   Users,
   News
})

export default rootReducer