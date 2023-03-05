import React from "react";
import postsArray from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (
        <div className="list-group">
            {postsArray.map(post =>
                <PostItem
                    key={post._id} post={post}/> )
            }
        </div>
    );
};
export default PostList;