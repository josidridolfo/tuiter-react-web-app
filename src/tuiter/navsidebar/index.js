import React from "react";
import NavItem from "./NavItem";
import {useSelector} from "react-redux";
import { faHome, faHashtag, faEnvelope, faBookmark, faFlask, faEllipsisH, faList, faUser } from "@fortawesome/free-solid-svg-icons";


const NavigationSidebar = () => {
    const navArray = useSelector(state => state.nav)
    return (
        <div className="list-group">
            <a className="list-group-item list-group-item-action d-flex align-items-center">
                Tuiter
            </a>
            {navArray.map(navItem =>
                <NavItem
                    key={navItem._id} navItem={navItem}/> )
            }
        </div>

    );
};
export default NavigationSidebar;
