import {createSlice, current} from "@reduxjs/toolkit";
import tuitArray from "../data/tuits.json";

const currentUser = {
    "userName": "NASA",
    "userHandle": "nasa",
    "userAvatar": "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
};

const templateTuit = {
    ...currentUser,
    "time": "Just Now",
    "content" : "",
    "image": "",
    "linkHeadline": "",
    "linkSummary": "",
    "linkSite": "",
    "liked": false,
    "comments": 0,
    "shares": 0,
    "likes": 0,
};



const tuitSlice = createSlice({
    name: "tuit",
    initialState: tuitArray,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                _id: (new Date()).getTime(),
                content: action.payload.content,
                ...currentUser,

            })
        },
        deleteTuit(state, action) {
            const index = action.payload
            state.splice(index, 1)
            },

        toggleTuitLike(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            console.log(tuit._id)
            tuit.liked = !tuit.liked // Toggle Unliked // Liked (Bool)
            tuit.likes = Number(tuit.likes);
            if (isNaN(tuit.likes)){
                tuit.likes = 0;
            }
            if (tuit.liked) { // Iterate if tuit.liked is now true; decrement if false
                tuit.likes += 1;
            } else {
                tuit.likes -= 1;
            }
            if (tuit.likes < 0) {
                tuit.likes = "";
            }
        }
        }
});

export const {createTuit, deleteTuit, toggleTuitLike} = tuitSlice.actions;
export default tuitSlice.reducer;