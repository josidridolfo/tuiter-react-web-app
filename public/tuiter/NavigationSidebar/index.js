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


const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   
   <a href="../homescreen/index.html" class="list-group-item list-group-item-action d-flex align-items-center">
            <i class="fa fa-home pe-2"></i>
            <span class="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">Home</span>
        </a>
        <a href="../explore/index.html" class="list-group-item list-group-item-action d-flex align-items-center active">
            <i class="fa fa-hashtag pe-2"></i>
            <span class="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">Explore</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
            <i class="fa fa-bell pe-2"></i>
            <span class="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">Notifications</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
            <i class="fa fa-envelope pe-2"></i>
            <span class="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">Messages</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
            <i class="fa fa-bookmark pe-2"></i>
            <span class="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">Bookmarks</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
            <i class="fa fa-list pe-2"></i>
            <span class="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">Lists</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
            <i class="fa fa-user pe-2"></i>
            <span class="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">Profile</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
        <i class="fa fa-ellipsis-h pe-2"></i>
            <span class="d-xxl-inline-block d-none d-xxl-inline-block d-lg-block">More</span>
        </a>
   
   
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;