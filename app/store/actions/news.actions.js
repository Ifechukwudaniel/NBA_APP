import { GET_ALL_NEWS } from "../types";
import axios from "axios";
import { DB_URL, FirebaseData } from "../../../utils/config";
import data from "../../database/data"


export  const  getAllNews= ()=>{
    const request =  axios.get(`${DB_URL}/news.json`)
        .then(response=>{
            return FirebaseData(response.data)
            })
            .catch(e=>{
                console.warn(e)
                return false
        })
    
    return {
        type:GET_ALL_NEWS,
        payload:request
    }
}
