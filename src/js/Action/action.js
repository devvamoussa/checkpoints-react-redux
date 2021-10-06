export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const POST = 'POST';
export const DELETE_POST = 'DELETE_POST';


export const getPost = (data) =>{
    return{
        type: ADD_POST,
        payload: data
    };
};


export const addPost = (data) =>{
 
    return{
        type: POST,
        payload: data
    }
};

export const editPost = (data) =>{
 
    return{
        type: EDIT_POST,
        payload: {...data}
    };
}

export const deletePost = (postId) =>{
 
    return{
        type: DELETE_POST,
        payload: {postId}
    };
}
