import { GET_ALL_GAMES } from "../types";


export default (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                 games:action.payload ||false
            }
        default:
            return state
    }
}