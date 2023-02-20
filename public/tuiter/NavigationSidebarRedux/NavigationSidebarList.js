import NavigationSidebarItem from "./NavigationSidebarItem.js";
import navigations from "./navigations.js";



const NavigationSidebarList = () => {

        return (`
        ${navigations.map(navigations =>
        {return(NavigationSidebarItem(navigations));
        }).join("")}
   `)
}

export default NavigationSidebarList;