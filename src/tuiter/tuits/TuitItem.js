import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"; // import useSelector

import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
// import {toggleTuitLike} from "../reducers/tuitReducer";

const TuitItem = ({posts}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    const likeTuitHandler = (id) => {
        dispatch(updateTuitThunk(id))
    }
    return(
                <div className="container-fluid border border-light">
                    <div className="row">
                        <div className="col">
                            <img src={`${posts.userAvatar}`} className="rounded-circle img-fluid" />
                        </div>
                        <div className="col-11">
                            <div className="fw-bold">
                                {posts.userName} &nbsp;<span className="text-secondary fw-normal">@{posts.userHandle}</span>
                                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(posts._id)}></i>
                                &nbsp;<span className="text-secondary fw-normal">&#183;&nbsp;{posts.time}</span>
                            </div>

                            <div className="text-dark">{posts.content}</div>
                            {posts.image &&
                            <div className="wd-post-image">
                                <img src={`${posts.image}`} className="img-fluid rounded-top border border-light"/>
                            </div>
                            }
                            {posts.linkHeadline && posts.linkSummary && posts.linkSite &&
                            <div className="wd-post-link border border-light rounded-bottom p-2">
                                <div className="text-white">{posts.linkHeadline}</div>
                                <div className="text-secondary">{posts.linkSummary}</div>
                                <div className="text-secondary">&#128279; {posts.linkSite}</div>
                            </div>
                            }
                            <div className="container-fluid pt-2 pb-2">
                                <div className="row row-flex">
              <span className="col">
                <a href="#" className="text-secondary text-decoration-none">
                  <i className="fa fa-comment wd-bookmark-interaction" /> {posts.comments}
                </a>
              </span>
                                    <span className="col">
                <a href="#" className="text-secondary text-decoration-none">
                  <i className="fa fa-retweet" /> {posts.shares}
                </a>
              </span>
                                    <span className="col">
                <a href="#" className="text-secondary text-decoration-none">
                  <FontAwesomeIcon
                      icon={posts.liked ? faHeartSolid : faHeart}
                      color={posts.liked ? "red" : "currentColor"}
                      // onClick={() => likeTuitHandler(posts)}
                  /> {posts.likes}
                </a>
              </span>
                                    <span className="col">
                <a href="#" className="text-secondary text-decoration-none">
                  <i className="fa fa-arrow-up-from-bracket" />Share
                </a>
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default TuitItem;