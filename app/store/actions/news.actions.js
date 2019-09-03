import { GET_ALL_NEWS } from "../types";
import axios from "axios";
import { DB_URL } from "../../../utils/config";


export  const  getAllNews= ()=>{
    const request =  axios.get(`${DB_URL}/news.json`)
        .then(response=>{
                let newArray=[]
                for (const key in response.data) {
                newArray.push({
                        id:key,
                        ...response.data[key]
                })
                }
                return newArray;
            })
            .catch(()=>{
                return false
        })

    return {
        type:GET_ALL_NEWS,
        payload:request
    }
}
