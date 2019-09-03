import { GET_ALL_NEWS } from "../types";
import axios from "axios";
import { DB_URL } from "../../../utils/config";
import data from "../../database/data"


export  const  getAllNews= ()=>{
    // const request =  axios.get(`${DB_URL}/news.json`)
    //     .then(response=>{
    //             let newArray=[]
    //             for (const key in response.data) {
    //             newArray.push({
    //                     id:key,
    //                     ...response.data[key]
    //             })
    //             }
    //             console.log(newArray)
    //             return newArray;
    //         })
    //         .catch(e=>{
    //             console.warn(e)
    //             return false
    //     })
     const request =[] 
         for (const key in data.news) {
           request.push({
               id:key,
              ...data.news[key]
           })
        }
    return {
        type:GET_ALL_NEWS,
        payload:request
    }
}
