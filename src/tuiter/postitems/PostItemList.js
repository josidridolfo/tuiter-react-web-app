import React from 'react';
import PostItem from "./PostItem.js";
import postsArray from "./posts.js";


const PostSummaryList = () => {

    return (`
            <div class="list-group">
        ${posts.map(posts =>
    {return(PostItem(posts));
    }).join("")}
        </div>
`)
}
export default PostSummaryList;