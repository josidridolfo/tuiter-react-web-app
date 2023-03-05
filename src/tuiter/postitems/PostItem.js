import React from "react";

const PostItem = ({
                      post = {
                          'userName': 'The New York Times',
                          'userHandle': 'nyt',
                          'userAvatar': 'https://theme.zdassets.com/theme_assets/968999/d8a347b41db1ddee634e2d67d08798c102ef09ac.jpg',
                          'time': '9h 40m',
                          'content': 'content',
                          'image': 'https://pbs.twimg.com/media/FAuW2GlXIAIOBN7.jpg',
                          'linkHeadline': 'linky headline',
                          'linkSummary': 'Lorem ipsum /Summary Content goes here',
                          'linkSite': 'nyt.com',
                          'comments': '428k',
                          'shares': '62k',
                          'likes': '1.6M'
                      }
                  }

) => {
    return(
<div className="container-fluid border border-light">
<div className="row">
    <div className="col">
        <img src={`${post.userAvatar}`}  className="rounded-circle img-fluid"/>
    </div>
    <div className="col-11">
        <div className="text-white fw-bold">{post.userName}
            <span className="text-secondary fw-normal">@{post.userHandle}  &#183; {post.time}</span></div>
        <div className="text-white">{post.content}</div>

        <div className="wd-post-image">
            <img src={`${post.image}`} className="img-fluid rounded-top border border-light"/>
        </div>
        <div className="wd-post-link border border-light rounded-bottom p-2">
            <div className="text-white">{post.linkHeadline}</div>
            <div className="text-secondary">{post.linkSummary}</div>
            <div className="text-secondary">&#128279; {post.linkSite}</div>
        </div>
        <div className="container-fluid pt-2 pb-2">
        <div className="row row-flex">
            <span className="col"><a href="#" className="text-secondary text-decoration-none"><i
    className="fa fa-comment wd-bookmark-interaction"/> {post.comments}</a></span>
            <span className="col"><a href="#" className="text-secondary text-decoration-none"><i
    className="fa fa-retweet"/> {post.shares}</a></span>
            <span className="col"><a href="#" className="text-secondary text-decoration-none"><i
    className="fa fa-heart"/> {post.likes}</a></span>
            <span className="col"><a href="#" className="text-secondary text-decoration-none"><i
    className="fa fa-arrow-up-from-bracket"/>Share</a></span>
        </div>
        </div>
    </div>
</div>
</div>
    );
}
export default PostItem;


