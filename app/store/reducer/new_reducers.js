import {GET_ALL_NEWS} from "../types"

export const News = (state ={} , action) => {
    switch (action.type) {
        case GET_ALL_NEWS:
            return {
                ...state,
                News:action.payload ||false
            }
        default:
            return {
                ...state
            }
    }
}