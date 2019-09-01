import {
   SIGN_IN
} from "../types"

export default function users(state={}, action){
     switch (action.type) {
         case SIGN_IN:
         return {
             ...state,
             auth:{
                 email:action.payload.email,
                 password:action.payload.password
             }
         }
        default:
            return {...state}
     }
}