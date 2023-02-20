const PostItem = (post) => {
    return(`
<div class="container-fluid border border-light">
<div class="row">
    <div class="col">
        <img src="${post.userAvatar}" class="rounded-circle img-fluid"/>
    </div>
    <div class="col-11">
        <div class="text-white fw-bold">${post.userName}
            <span class="text-secondary fw-normal">@${post.userHandle}  &#183; ${post.time}</span></div>
        <div class="text-white">${post.content}</div>

        <div class="wd-post-image">
            <img src="${post.image}" class="img-fluid rounded-top border border-light">
        </div>
        <div class="wd-post-link border border-light rounded-bottom p-2">
            <div class="text-white">${post.linkHeadline}</div>
            <div class="text-secondary">${post.linkSummary}</div>
            <div class="text-secondary">&#128279; ${post.linkSite}</div>
        </div>
        <div class="container-fluid pt-2 pb-2">
        <div class="row row-flex">
            <span class="col"><a href="#" class="text-secondary text-decoration-none"><i
                class="fa fa-comment wd-bookmark-interaction"></i> ${post.comments}</a></span>
            <span class="col"><a href="#" class="text-secondary text-decoration-none"><i
                class="fa fa-retweet"></i> ${post.shares}</a></span>
            <span class="col"><a href="#" class="text-secondary text-decoration-none"><i
                class="fa fa-heart"></i> ${post.likes}</a></span>
            <span class="col"><a href="#" class="text-secondary text-decoration-none"><i
                class="fa fa-arrow-up-from-bracket"></i>Share</a></span>
        </div>
        </div>
    </div>
</div>
</div>
    `);
}
export default PostItem;


