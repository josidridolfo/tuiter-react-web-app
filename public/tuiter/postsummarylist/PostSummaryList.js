import PostSummaryListItem from "./PostSummaryItem.js";
import posts from "./posts.js";


const PostSummaryList = () => {

    return (`
            <div class="list-group">
            <div class="list-group-item position-relative">
            <!-- ON NEXT REFACTOR, TURN THIS INTO A FUNCTION THAT PULLS FROM AN ARRAY -->
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/SpaceX-Starship-Mk1-17.jpg" class="w-100">
                <div class="image-caption">SpaceX's Spaceship</div>
            </div>
        ${posts.map(posts =>
    {return(PostSummaryListItem(posts));
    }).join("")}
        </div>
`)
}
export default PostSummaryList;