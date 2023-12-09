import{
GET_PROJECTS
} from "./actionTypes"

const initialState = {
    projects:[],
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_PROJECTS:
            return{
                ...state,
                GET_PROJECTS:action.payload
            }
        default:
            return { ...state };
    }
}