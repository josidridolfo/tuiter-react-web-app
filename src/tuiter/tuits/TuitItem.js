import React from "react";
import {deleteTuit} from "../reducers/tuitReducer";
import {useDispatch} from "react-redux";


const TuitItem = (
    {
                      tuit = {
                          'userName': 'User Name',
                          'userHandle': 'handle with @ preceding it',
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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
<div className="container-fluid border border-light">
<div className="row">
    <div className="col">
        <img src={`${tuit.userAvatar}`}  className="rounded-circle img-fluid"/>
    </div>
    <div className="col-11">
        <div className="fw-bold">{tuit.userName}
            <span className="text-secondary fw-normal">@{tuit.userHandle}  &#183; {tuit.time}</span></div>
        <div className="text-white">{tuit.content}</div>

        <div className="wd-post-image">
            <img src={`${tuit.image}`} className="img-fluid rounded-top border border-light"/>
        </div>
        <div className="wd-post-link border border-light rounded-bottom p-2">
            <div className="text-white">{tuit.linkHeadline}</div>
            <div className="text-secondary">{tuit.linkSummary}</div>
            <div className="text-secondary">&#128279; {tuit.linkSite}</div>
        </div>
        <div className="container-fluid pt-2 pb-2">
        <div className="row row-flex">
            <span className="col"><a href="#" className="text-secondary text-decoration-none"><i
    className="fa fa-comment wd-bookmark-interaction"/> {tuit.comments}</a></span>
            <span className="col"><a href="#" className="text-secondary text-decoration-none"><i
    className="fa fa-retweet"/> {tuit.shares}</a></span>
            <span className="col"><a href="#" className="text-secondary text-decoration-none"><i
    className="fa fa-heart"/> {tuit.likes}</a></span>
            <span className="col"><a href="#" className="text-secondary text-decoration-none"><i
    className="fa fa-arrow-up-from-bracket"/>Share</a></span>
            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}>Delete</i>
        </div>
        </div>
    </div>
</div>
</div>
    );
}
export default TuitItem;


