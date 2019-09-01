import { SIGN_IN } from "../types";

export const signIn=()=>({
        type:SIGN_IN,
        payload:{
            email:"dan@mail.com",
            password:"hgsggsgfffdfdfdf"
        }
    })