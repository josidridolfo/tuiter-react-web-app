import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"; // import useSelector
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom"

const Profile = () => {
    const profiles = useSelector(state => state.profile);
    const [profile, setProfile] = useState({profile:''}); // create local todo state variable

    const dispatch = useDispatch();
 return (
     <>
         {profiles.map((profile, index) => (
             <li key={profile._id} className="list-group-item container-fluid">
                 {/* User's First & Last name, Number of Tweets Block */}
                 <div className="d-flex gap-3 align-items-baseline">
                     <Link to="/tuiter/home/">
                         <i className="fas fa-arrow-left "></i>
                     </Link>
                     <div>
                        <span className="fs-5 fw-bold">
                            {profile.nameFirst} {profile.nameLast}
                        </span>
                         <br/>
                         <small>
                             {profile.tweets}
                             <span> Tweets</span>
                         </small>
                     </div>
                 </div>
                 {/* Banner and Profile Picture Block */}
                 <div className="row align-items-center">
                     <div className="col">
                         <img
                             src={`${profile.bannerPicture}`}
                             height={200}
                             className="w-100"
                             style={{ zIndex: -1 }}
                         />
                     </div>
                 </div>
                 <div className="row align-items-center py-3">
                     <div className="col-3 position-relative">
                         <img
                             src={`${profile.profilePicture}`}
                             height={75}
                             className="rounded-circle position-absolute start-50 translate-middle-x"
                             alt="Profile"
                             style={{ zIndex: 1, marginTop: "-55px" }}
                         /></div>
                     <div className="col-12 text-end">
                         <Link to="/tuiter/profile/edit" className="btn btn-light btn-outline-dark rounded-pill">
                             Edit Profile
                         </Link>
                     </div></div>
                 {/* User Info (Name, Handle, Bio) Block */}
                     <div className="col-12 text-container">
                         <div className="fw-bold">
                             {profile.nameFirst} {profile.nameLast}
                         </div>
                         <div className="fw-light">@{profile.nameUser}</div>
                         <div className="fw-light py-2">{profile.bio}</div>
                     </div>
                 {/* Detailed User Info (Location, BDay, Join Date) Block */}
                      <div className="col py-1">
                         <p className="fw-light">
                            <span className="me-2">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span className="ms-2">{profile.location}</span>
                            </span>
                            <span className="me-2">
                                <FontAwesomeIcon icon={faCakeCandles} />
                                <span className="ms-2">Born on {profile.dateOfBirth}</span>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCalendar} />
                                <span className="ms-2">Joined {profile.dateJoined}</span>
                            </span>
                         </p>
                     </div>
                 {/* User Activity (Following, Followers) Block */}
                 <div className="row">
                     <div className="col">
                        <span className="fw-bold">{profile.followingCount}</span> Following
                         <span className="ps-3 fw-bold">{profile.followerCount}</span> Followers
                     </div>
                 </div>
             </li>
         ))}
     </>
    );
}


export default Profile;
