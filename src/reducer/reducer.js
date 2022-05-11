import { ADDENTRY,UPDATEENTRY,FINDENTRY,FINDALLENTRIES,DELETEENTRY } from "../action/action"
import axios from "axios"


const reducer = (state=[],action) =>
{
    switch(action.type)
    {
        case ADDENTRY: 
                state = [...action.payload]
                return state

        case UPDATEENTRY: 
                state = [...action.payload]
                return state

        case FINDENTRY: 
                state = "ENTRY found for id: "+ action.payload
                return state

        case FINDALLENTRIES: 
                state = [...action.payload]
                return state

        case DELETEENTRY:
                state = [...action.payload]
                return state

        default:
                return state
    }
}

export default reducer;