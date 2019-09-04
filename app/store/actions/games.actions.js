import { GET_ALL_GAMES } from "../types";
import Axios from "axios";
import {DB_URL} from "../../../utils/config"
import { arrangeForm } from "../../components/Auth/formUtil";

export const getAllGames=()=>{
  const  request = new Promise((resolve, reject)=>{
        Axios.get(`${DB_URL}/teams.json`)
        .then(response=>{
            const teams = arrangeForm(response.data)
            Axios.get(`${DB_URL}/games.json`)
            .then( games=>{
                  const games= arrangeForm(result.data)
            })
        })
  })
   return{
       type:GET_ALL_GAMES,
       payload:{
           games:'ehdhedjede'
       }
   }
}