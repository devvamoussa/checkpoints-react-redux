import React from 'react'

function PostList({post}) {

    return (
        <div>
            {post.map((post , index) =>(
                <div key={index}>
                    <h1>{post.title}</h1>
                    <h2>{post.contents}</h2>
                </div>
            ))}
        </div>
    )
}


export default PostList;
