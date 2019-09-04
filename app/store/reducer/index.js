import { combineReducers  } from "redux";
import Users from "./user.reducer"
import { News } from "./new_reducers";
import Games from "./games_reducers"

const rootReducer = combineReducers({
   Users,
   News,
   Games
})

export default rootReducer