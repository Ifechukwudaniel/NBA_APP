import {
   SIGN_IN
} from "../types"

export default function users(state={}, action){
     switch (action.type) {
         case SIGN_IN:
         return {}
        default:
            return state
     }
}