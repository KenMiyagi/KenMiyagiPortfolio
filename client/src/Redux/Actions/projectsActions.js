import axios from "axios"
import { HOST, GET_PROJECTS } from "../actionTypes"

export function getProjects(){
    return async function(dispatch){
        try {
            const response = (await axios.get(HOST+"/projects")).data

            dispatch({
                type: GET_PROJECTS,
                payload:response
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}