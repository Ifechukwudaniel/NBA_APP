import { GET_ALL_GAMES } from "../types";
import Axios from "axios";
import {DB_URL, FirebaseData, findTeamRelationship} from "../../../utils/config"

export const getAllGames=()=>{
  const  request = new Promise((resolve, reject)=>{
        Axios.get(`${DB_URL}/teams.json`)
        .then(response=>{
             let teams= FirebaseData(response.data)
            Axios.get(`${DB_URL}/games.json`)
            .then( gamesRequest=>{
                let responseDate = []
                 let games =   FirebaseData(gamesRequest.data)
                 for (const key in games) {
                     console.log(games[key].away, teams)
                    responseDate.push({
                        ...games[key],
                        awayTeam: findTeamRelationship(games[key].away, teams),
                        localTeam: findTeamRelationship(games[key].away, teams),
                    }) 
                 }
                 console.log(responseDate)
                 resolve(responseDate)
            })
        })
        .catch(e=>{
             console.log(e)
            reject(false)
        })
  })
   return{
       type:GET_ALL_GAMES,
       payload:request
   }
}