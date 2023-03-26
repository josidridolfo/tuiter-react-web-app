import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editProfile} from "../../reducers/profileReducer"

const EditProfile = () => {
    const profiles = useSelector(state => state.profile);
    const [profile, setProfile] = useState({}); // create local todo state variable

    const firstNameHandler = (event) => {
        const {value} = event.target
        setProfile({...profile,nameFirst: value});
    }
    const lastNameHandler = (event) => {
        const {value} = event.target
        setProfile({...profile,nameLast: value});
    }
    const bioHandler = (event) => {
        const {value} = event.target
        setProfile({...profile,bio: value});
    }
    function locationHandler(event) {
        const {value} = event.target
        setProfile({...profile,location: value});
    }
    function websiteHandler(event) {
        const {value} = event.target
        setProfile({...profile,website: value});
    }
    function birthdateHandler(event) {
        const {value} = event.target
        setProfile({...profile,website: value});
    }

    const dispatch = useDispatch();
    const handleSaveProfile = () => {
        console.log(profile)
        dispatch(editProfile(profile))
    }

    return (
        <>
            {profiles.map((profile, index) => (
            <li key={profile._id}>
            <div className="">
                {/* X (Cancel, Return to Profile LINK) and Save Button Block */}
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-3 align-items-center">
                        <Link className=""
                              to="/tuiter/profile">
                            <i className="fas fa-times" >
                            </i>
                        </Link>
                        <span className="fs-5 fw-bold">Edit Profile</span>
                    </div>
                    <Link className="btn btn-dark border-1 border-white rounded-pill fw-bold mt-2 w-25 m-1"
                          onClick={handleSaveProfile}
                          to="/tuiter/profile">
                        Save
                    </Link>
                </div>
            </div>
                {/* User's Photos (Banner & Profile Pictures) Block */}
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
                    </div></div>
                {/* User Name - first and last - Block */}
            <div className="mb-3">
                <label className="form-label" >First Name</label>
                <input type="text"
                       className="form-control bg-transparent text-muted"
                       id="myNameFirst"
                       placeholder={profile.nameFirst}
                       onChange={firstNameHandler}>
                </input>
            </div>
            <div className="mb-3">
                <label className="form-label" >Last Name</label>
                <input type="text" className="form-control bg-transparent text-muted"
                       id="myNameLast"
                       placeholder={profile.nameLast}
                       onChange={lastNameHandler}>
                </input>
            </div>
                {/* User Bio Block */}
            <div className="mb-3">
                <label className="form-label" >Bio</label>
                <textarea rows="4" className="form-control bg-transparent text-muted"
                          id="myBio"
                          placeholder={profile.bio}
                          onChange={bioHandler}>
                </textarea>
            </div>
                {/* User Details - Location, Website, Date of Birth - Block */}
                <div className="mb-3">
                    <label className="form-label" >Location</label>
                    <textarea rows="1" className="form-control bg-transparent text-muted"
                              id="myLocation"
                              placeholder={profile.location}
                              onChange={locationHandler}>
                </textarea>
                </div>
                {/* User Details - Website */}
                <div className="mb-3">
                    <label className="form-label" >Website</label>
                    <textarea rows="1" className="form-control bg-transparent text-muted"
                              id="myWebsite"
                              placeholder={profile.website}
                              onChange={websiteHandler}>
                </textarea>
                </div>
                {/* User Details - Date of Birth */}
                <div className="mb-3">
                    <label className="form-label" >Birth Date</label><br/>
                    <input type="date"
                           id="myBirthdate" name="birthday"
                           value={profile.dateOfBirth}
                            onChange={birthdateHandler}/>
                </div>

            </li>
            ))}
        </>
    );
}
export default EditProfile;


