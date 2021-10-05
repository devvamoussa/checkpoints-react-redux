
import PostList from '../component/PostList'
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addPost } from '../js/Action/action';
import { getPost } from '../js/Action/action';
import { useSelector } from 'react-redux';

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

            <form onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="Titre des taches" onChange={e=> setTitle(e.target.value)}/>
                <textarea value={contents} placeholder="Ecrivez vos tache" onChange={e=> setContents(e.target.value)}/>
                <input type="submit" value="ENVOYER" />
            </form>
                <div>
                    {posts.map((post , index) => <PostList  post={post} key={index}/>)} 
                </div>
                
            
            
        </div>
    )
}

export default PostForm;
