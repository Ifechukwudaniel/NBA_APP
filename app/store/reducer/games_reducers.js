import { GET_ALL_GAMES } from "../types";


export default (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}