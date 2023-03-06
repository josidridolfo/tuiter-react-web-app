/*import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavSidebarItem = ({ navItem }) => {
    const { pathname } = useLocation();
    const paths = pathname.split("/");
    const active = paths[2];
    const isActive = active === navItem.caption;
    return (
        <Link
            to={`${navItem.url}`}
            className={`list-group-item list-group-item-action d-flex align-items-center ${
                isActive ? "active" : ""
            }`}
        >
            <i className={`fa ${navItem.faElement} me-3`}/>
            <span className="d-xxl-inline-block d-none d-lg-block">
        {navItem.caption}
      </span>
        </Link>
    );
};

const NavigationSidebar = () => {
    const navItems = [
        {
            url: "/tuiter/home",
            faElement: "fa-home",
            caption: "Home",
        },
        {
            url: "/tuiter/explore",
            faElement: "fa-compass",
            caption: "Explore",
        },
        {
            url: "/",
            faElement: "fa-flask",
            caption: "Labs",
        },
        {
            url: "#",
            faElement: "fa-ellipsis-h",
            caption: "More",
        },
    ];

    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            {navItems.map((navItem, index) => (
                <NavSidebarItem key={index} navItem={navItem} />
            ))}
        </div>
    );
};

export default NavigationSidebar;*/



import React from "react";
import navElementsArray from "./navelements";
import NavSidebarItem from "./navsidebaritem";

const NavigationSidebar = () => {
    return (
        <div className="list-group">
            <a className="list-group-item list-group-item-action d-flex align-items-center">
                Tuiter
            </a>
            {navElementsArray.map(navItem =>
                <NavSidebarItem
                    key={navItem._id} navItem={navItem}/> )
            }
        </div>

    );
};
export default NavigationSidebar;
