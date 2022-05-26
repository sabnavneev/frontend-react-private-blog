import React from 'react';
import posts from '../data/posts.json';

function BlogpostsPage() {
    const blogs = posts.map((post) => {
        return post.title;
    });

    return (
        <>
            <div className="page-container">
                <h1>Blog overzichtspagina</h1>
                <h4>Aantal blogposts:</h4>
                    <ul>
                        {blogs.map((post) => {
                            return <li>{post}</li>
                        })}
                    </ul>
            </div>
        </>
    );
}

export default BlogpostsPage;