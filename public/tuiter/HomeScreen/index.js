import NavigationSidebar from "../NavigationSidebar/index.js";
import Post from "../PostItems/index.js";
import PostSummary from "../PostSummaryList/index.js";


function exploreComponent() {
    $('#wd-explore').append(`
    <!--    <h2>Explore</h2>  -->
          <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        <!-- <h3>NavigationSidebar</h3> -->
        ${NavigationSidebar("Home")}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
    <!-- <h3>ExploreComponent</h3> -->
    <!-- SEARCH BAR AND COG - on next refactor move into separate JS function -->
        <div class="row mb-1">
            <input type="text" class="form-text col-10 ms-3 rounded-pill" placeholder="&#x1F50D; Search">
            <i class="fa fa-cog text-primary ps-4 pt-1 col-1 display-6"></i>
        </div>
        ${Post()}
   </div>
   <div class="list-group col-xxl-3 col-xl-3 col-lg-3 d-lg-block d-none pt-1 follow">
    <!-- <h3>WhoToFollowList</h3> -->
        ${PostSummary()}
   </div>
    `);
}

$(exploreComponent);