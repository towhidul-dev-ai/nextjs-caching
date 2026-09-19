import React from 'react';

const PostPromise = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();     
    
}

const PostPage = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    const posts = await PostPromise();

    return (
        <div>
            <h2>hello post: {posts.length} </h2>
            {/* {
                data.map (post=>)
            } */}
        </div>
    );
};

export default PostPage;