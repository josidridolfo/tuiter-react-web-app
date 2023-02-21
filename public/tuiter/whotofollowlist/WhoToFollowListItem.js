// Who To Follow List Item takes an Item who (an array with
// the following parameters:
// (a) avatarIcon, String that is an href to an image
// (b) userName, String
// (c) handle, String
// The function iterates over the
const WhoToFollowListItem = (who) => {
    return(`
<div class="list-group-item container-fluid">
<div class="row">
        <img src="${who.avatarIcon}" class="img-fluid rounded-circle col-2">
            <div class="col-6 text-container">
                <div class="fw-bold">${who.userName}</div>
                <div class="fw-normal">@${who.handle}</div>
            </div>
        <button class="btn btn-primary col-4 rounded-pill">Follow</button>
    </div>
</div>
    `);
}
export default WhoToFollowListItem;