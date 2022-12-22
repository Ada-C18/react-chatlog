import React from 'react';
import { useState } from 'react';

const Post = () => {
    
    const [likeCount, setLikeCount] = useState(0);
    const updateLikes = () => {
        setLikeCount(likeCount+1);
    };

    return (

        <section>
            <p> {likeCount} </p>
            <button onClick={updateLikes}>Like</button>
        </section>
    );
};

export default Post;





