import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"; // import useSelector
import {deleteTuit, toggleTuitLike} from "../reducers/tuitReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";

const TuitsComponent = () => {
    const tuits = useSelector(state => state.tuits);
    const [tuit, setTuit] = useState({content:''}); // create local todo state variable
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    const likeTuitHandler = (id) => {
        dispatch(toggleTuitLike(id));
    }
    return(
        <div className="list-group">
            {tuits.map((tuit, index) => (
                <div key={tuit._id} className="container-fluid border border-light">
                    <div className="row">
                        <div className="col">
                            <img src={`${tuit.userAvatar}`} className="rounded-circle img-fluid" />
                        </div>
                        <div className="col-11">
                            <div className="fw-bold">
                                {tuit.userName} &nbsp;<span className="text-secondary fw-normal">@{tuit.userHandle}</span>
                                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(index)}></i>
                                &nbsp;<span className="text-secondary fw-normal">&#183;&nbsp;{tuit.time}</span>
                            </div>

                            <div className="text-dark">{tuit.content}</div>
                            {tuit.image &&
                            <div className="wd-post-image">
                                <img src={`${tuit.image}`} className="img-fluid rounded-top border border-light"/>
                            </div>
                            }
                            {tuit.linkHeadline && tuit.linkSummary && tuit.linkSite &&
                            <div className="wd-post-link border border-light rounded-bottom p-2">
                                <div className="text-white">{tuit.linkHeadline}</div>
                                <div className="text-secondary">{tuit.linkSummary}</div>
                                <div className="text-secondary">&#128279; {tuit.linkSite}</div>
                            </div>
                            }
                            <div className="container-fluid pt-2 pb-2">
                                <div className="row row-flex">
              <span className="col">
                <a href="#" className="text-secondary text-decoration-none">
                  <i className="fa fa-comment wd-bookmark-interaction" /> {tuit.comments}
                </a>
              </span>
                                    <span className="col">
                <a href="#" className="text-secondary text-decoration-none">
                  <i className="fa fa-retweet" /> {tuit.shares}
                </a>
              </span>
                                    <span className="col">
                <a href="#" className="text-secondary text-decoration-none">
                  <FontAwesomeIcon
                      icon={tuit.liked ? faHeartSolid : faHeart}
                      color={tuit.liked ? "red" : "currentColor"}
                      onClick={() => likeTuitHandler(tuit)}
                  /> {tuit.likes}
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
            ))}
        </div>
    );
}
export default TuitsComponent;


