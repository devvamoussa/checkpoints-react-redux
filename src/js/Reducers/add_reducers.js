import { ADD_POST, EDIT_POST, POST } from "../Action/action";

const initialState ={
    posts:[]
}

const rootReducers = (state=initialState , action) =>{
    switch (action.type) {
        case ADD_POST:
            return {
                posts : [...state.posts]
            } 
        case POST:
            return {
                posts : [...state.posts, action.payload]
            } 
        case EDIT_POST:
            return  state.map((post) =>{
                if(post.id ===action.payload.id){
                    return{
                        ...post,
                        contents: action.payload.contents
                    }
                } else return post

            
            });
            default:
                return state;
            
            }
}
export default rootReducers;