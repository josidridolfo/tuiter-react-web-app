// Refactor NavigationSidebar so it accepts active as a parameter.
// If parameter is equal to 'home', then the Home hyperlink should be highlighted (active),
// if it's equal to 'explore', then the Explore hyperlink should be highlighted (active),
// and so on for all other hyperlinks.
//
// Refactor the hyperlinks in NavigationSidebar so that you can navigate between the ExploreScreen and HomeScreen.
// Both are implemented in index.html files located in folders of the same name as the components.
// The hyperlink to the HomeScreen should be ../HomeScreen/index.html and
// the hyperlink to the ExploreScreen should be ../ExploreScreen/index.html.
// Make sure at the end of this assignment that these links work as
// expected allowing navigation between these two screens.

import NavigationSidebarList from "./NavigationSidebarList.js"

function NavigationSidebar(active) {
    const NavSidebar = () => {
        return (`
        <div class="list-group">
            <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></a>
            ${NavigationSidebarList(active)}
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
 `);
    }
}
export {NavigationSidebar};