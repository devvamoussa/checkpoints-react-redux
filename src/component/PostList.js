import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editPost } from '../js/Action/action';


function PostList(post) {
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
                <div>
                    <h1>{post.title}</h1>
                    
                    {editToggle ? (
                        <form onSubmit={e => handleEdit(e)}>
                            <textarea onChange={e => setEditContent(e.target.value)} defaultValue={post.contents}></textarea>
                            <button>submit</button>
                        </form>
                    ) : (
                        <h2>{post.contents}</h2>
                    )}
                    
                    <span><button onClick={()=> setEditToggle(!editToggle)}>E</button></span>
                    <span><button>X</button></span>
                </div>
            
        </div>
    )
}


export default PostList;
