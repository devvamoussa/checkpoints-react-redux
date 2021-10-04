export const ADD_POST = 'ADD_POST';
export const POST = 'POST';


export const getPost = (data) =>{
    return{
        type: ADD_POST,
        payload: data
    }
}
export default getPost;

export const addPost = (data) =>{
    return{
        type: POST,
        payload: data
    }
}
