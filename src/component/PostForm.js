
import PostList from '../component/PostList'
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addPost } from '../js/Action/action';
import { getPost } from '../js/Action/action';
import { useSelector } from 'react-redux';
import "./PostForm.css"

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
  
    const handleSubmit =(e) =>{
        e.preventDefault()
        const data = {
            id: new  Date().getTime(),
            title,
            contents,
        }
        console.log("title et contents", data)
        dispatch(addPost(data));
        setTitle("");
        setContents("");
        dispatch(getPost());
    } 

    return (
        <div className="form-container">
            <div className="content_input">
                <form onSubmit={handleSubmit}>
                    <input className='input-title' type="text" value={title} placeholder="Titre des taches" onChange={e=> setTitle(e.target.value)}/> <br/>
                    <textarea className='input-textarea' value={contents} placeholder="Ecrivez vos tache" onChange={e=> setContents(e.target.value)}/> <br/>
                    <div className="content_submit">
                        <input input className='input-submit' type="submit" value="ENVOYER" />
                    </div>
                    
                </form>
            </div>
            
                <div>
                    {posts.map((post , index) => <PostList  post={post} key={index}/>)} 
                </div>
                
            
            
        </div>
    )
}

export default PostForm;
