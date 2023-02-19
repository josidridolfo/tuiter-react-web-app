import PostItemList from "./PostItemList.js";

const Post = () => {
    return(`
            <!-- SEARCH BAR AND COG - on next refactor move into separate JS function -->
    ${PostItemList()}
    `);

}

export default Post;