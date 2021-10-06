import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editPost, deletePost } from '../js/Action/action';
import './PostList.css'


function PostList({post}) {
    const [editToggle , setEditToggle] = useState(false);
    const [editContent , setEditContent] = useState(post.contents)
    const dispatch = useDispatch();


    const handleEdit = (e) =>{
        e.preventDefault();

        const postData ={
            id: post.id,
            title: post.title,
            contents: editContent,
        }
        
        dispatch(editPost(postData))
        console.log('postData liste ', postData)
        setEditToggle(false)
    }


    return (
        <div>
                <div className="container">
                    <h1>{post.title}</h1>
                    
                    {editToggle ? (
                        <form  onSubmit={e => handleEdit(e)}>
                            <div className="content_textarea">
                                <textarea className='edit_content'onChange={e => setEditContent(e.target.value)} defaultValue={post.contents}></textarea>
                            </div>
                            <div className="btn">
                                <button>submit</button>
                            </div>
                            
                        </form>
                    ) : (
                        <p>{post.contents}</p>
                    )}
                    <div className='btn_content'>
                        <span><button onClick={()=> setEditToggle(!editToggle)}>EDIT</button></span>
                        <span><button onClick={()=> dispatch(deletePost(post.id))}>DELETE</button></span>
                    </div>
                   
                </div>
            
        </div>
    )
}


export default PostList;
