import NavigationSidebarItem from "./NavigationSidebarItem.js";
import navigations from "./navigations.js";



const NavigationSidebarList = (active) => {

        return (`
        ${navigations.map(navigations =>
        {return(NavigationSidebarItem(navigations, active));
        }).join("")}
   `)
}

export default NavigationSidebarList;