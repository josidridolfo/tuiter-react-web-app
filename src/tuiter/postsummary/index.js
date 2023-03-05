import React from 'react';
import PostSummaryItem from "./PostSummaryItem.js";
import postsArray from "./posts.js";


const PostSummaryList = () => {

    return (
        <div className="list-group">
            {postsArray.map(post =>
                <PostSummaryItem
                    key={post._id} post={post}/> )
            }
        </div>
    );
};
export default PostSummaryList;