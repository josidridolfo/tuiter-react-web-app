import React from "react";
import navElementsArray from "./navelements";
import NavSidebarItem from "./navsidebaritem";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item list-group-item-action d-flex align-items-center">
                Tuiter
            </a>
            {navElementsArray.map(navItem =>
                <NavSidebarItem
                    key={navItem._id} navItem={navItem} active={active}/> )
            }
        </div>

    );
};
export default NavigationSidebar;
