import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";


const WhoToFollowList = () => {

    return (`
   <div class="list-group-item fw-bolder">Who To Follow</div>
        ${who.map(who =>
    {return(WhoToFollowListItem(who));
    }).join("")}
`)
}
export default WhoToFollowList;