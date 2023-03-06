import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavSidebarItem = (
    {
        navItem = {
            url: '../home/index.html',
            faIcon: 'fa-home',
            caption: 'home'
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

export default NavSidebarItem;
