import React from 'react';

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName" : "SpaceX",
            "time" : "2h",
            "title" : "Tesla Cybertruck auto-crashes on Mars, runs over NASA's rover Curiosity. Musk blames NASA.",
            "image" : ""
        }
    }

) => {
    return(
           <div class="list-group-item container-fluid">
                <div class="row">
                    <div class="col-9 text-container">
                        <div class="text-secondary">
                            <span class="text-secondary">{post.topic}</span>
                        </div>
                        <div class="fw-bold text-main">{post.userName}
                        <span class="text-secondary ps-2">{post.time}
                        </span></div>
                        <div class="text-main fw-bold">{post.title}</div>
                        <div class="text-muted">{post.tweets} Tuits</div>
                    </div>
                    <div class="col-3">
                        <img src={`${post.image}`} class="img-fluid pt-2"/>
                    </div>
                </div>
            </div>
    );
}
export default PostSummaryItem;