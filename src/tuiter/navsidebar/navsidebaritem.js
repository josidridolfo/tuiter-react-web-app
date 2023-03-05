import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const NavSidebarItem = (
    {
        navItem = {
            url: '../home/index.html',
            faElement: 'fa-home',
            caption: 'Home'
        },
    }, active = 'Home'
    ) => {
        const isActive = navItem.caption === active ? 'active' : '';
        return (
            <a href={`${navItem.url}`}
                className={`list-group-item list-group-item-action d-flex align-items-center ${isActive}`}>
                <FontAwesomeIcon icon={`fa ${navItem.faElement}`}/>
                <i className={`fa ${navItem.faElement} pe-2`}/>
                <span className="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">
                {navItem.caption}</span>
            </a>
        );
    };

export default NavSidebarItem;