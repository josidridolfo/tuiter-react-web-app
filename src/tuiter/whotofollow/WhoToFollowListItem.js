// Who To Follow List Item takes an Item who (an array with
// the following parameters:
// (a) avatarIcon, String that is an href to an image
// (b) userName, String
// (c) handle, String
// The function iterates over the
import React from 'react';

const WhoToFollowListItem = (
            {who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'}
        }
    ) => {
    return(
<li className="list-group-item container-fluid">
<div className="row">
        <div className="col-3">
        <img src={`${who.avatarIcon}`} height={48} className="rounded-circle"/>
        </div>
            <div class="col-6 text-container">
                <div class="fw-bold">{who.userName}</div>
                <div class="fw-normal">@{who.handle}</div>
            </div>
        <button class="btn btn-primary col-3 rounded-pill">Follow</button>
    </div>
</li>
    );
};
export default WhoToFollowListItem;