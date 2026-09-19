import React from 'react';

/**
 * 
 * GET:
 * POST:
 * UPDATE: put patch
 * DELETE:
 */

const getPost = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();     
    
}

const getPost3 = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!res.ok){
        throw new Error('Failed to fetch posts');
        
    }
    return res.json();

}

const getPost2 = async () => {
    try{
       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
       return res.json(); 
    }
    catch (error){
        throw new Error('Failed to fetch posts');
    }
}

const PostPage = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    const posts = await getPost();

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