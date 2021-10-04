import React from 'react'
import PostList from '../component/PostList'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../js/Action/action';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const dispatch = useDispatch()
    const post = useSelector((state) => state.data)
    console.log(post)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            id: new  Date().getTime(),
            title,
            contents,
        }
        console.log("title et contents", data)
        dispatch(addPost(data));
        setTitle("")
        setContents("")


    } 

    return (
        <div className="form-container">

            <form onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="Titre des taches" onChange={e=> setTitle(e.target.value)}/>
                <textarea value={contents} placeholder="Ecrivez vos tache" onChange={e=> setContents(e.target.value)}/>
                <input type="submit" value="ENVOYER" />
            </form>
            
                <PostList post={post} />
            
            
        </div>
    )
}

export default PostForm;
