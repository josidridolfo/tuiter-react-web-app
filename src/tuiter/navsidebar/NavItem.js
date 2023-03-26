import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import { faHome, faHashtag, faEnvelope, faBookmark, faFlask, faEllipsisH, faList, faUser } from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

library.add(...iconList);

const NavItem = (
    {
        navItem = {
            url: "../home/index.html",
            faIcon:  {
                "prefix" : "fas",
                "iconName" : "hashtag"
            },
            caption: "home"
        }
    }
) => {
    const location = useLocation();
    const activePath = location.pathname.split("/")[2];
    const isActive = activePath === navItem.caption.toLowerCase();

    return (
        <Link
            to={navItem.url}
            className={`list-group-item list-group-item-action d-flex align-items-center
             ${isActive ? "active" : ""}`}>
            <FontAwesomeIcon icon={navItem.faIcon}/>
            <span className="d-none d-sm-none d-xxl-inline-block d-xl-inline-block
             d-l-inline-block ps-2">
        {navItem.caption}
            </span>
        </Link>
    );
};
export default NavItem;