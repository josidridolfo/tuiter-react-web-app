// Who To Follow List Item takes an Item who (an array with
// the following parameters:
// (a) avatarIcon, String that is an href to an image
// (b) userName, String
// (c) handle, String
// The function iterates over the
const PostSummaryListItem = (post) => {
    return(`
           <div class="list-group-item container-fluid">
                <div class="row">
                    <div class="col-9 text-container">
                        <div class="text-secondary">
                            <span class="text-secondary">${post.topic}</span>
                        </div>
                        <div class="fw-bold text-main">${post.userName}
                        <span class="text-secondary">${post.time}
                        </span></div>
                        <div class="text-main fw-bold">${post.title}</div>
                        <div class="text-muted">${post.tweets} Tuits</div>
                    </div>
                    <div class="col-3">
                        <img src="${post.image}" class="img-fluid pt-2">
                    </div>
                </div>
            </div>
    `);
}
export default PostSummaryListItem;