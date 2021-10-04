import { ADD_POST, POST } from "../Action/action";

const initialState ={
    data:[
        
    ]
}

const rootReducers = (state=initialState , action) =>{
    switch (action.type) {
        case ADD_POST:
            return [...state.data]
        case POST:
            return [...state.data];
        default:
            return state
    }
}
export default rootReducers;