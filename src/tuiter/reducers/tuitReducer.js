import {createSlice} from "@reduxjs/toolkit";
import {findTuitsThunk, createTuitThunk, deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

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

const initialState = {
    tuits: [],
    loading: false
}


const tuitSlice = createSlice({
    name: "tuits",
    initialState,
    extraReducers : {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [createTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.tuits.unshift({
                    ...payload,
                    ...templateTuit
                })
            },
        [updateTuitThunk.fulfilled]:
            (state, {payload}) => {
            state.loading = false
            const tuitIndex = state.tuits
                .findIndex((t) => t._id === payload._id)
            state.tuits[tuitIndex] = {
                ...state.tuits[tuitIndex],
                ...payload
            }
        },
        [deleteTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t =>t._id !== payload)
        },}
    // reducers: {
    //     createTuit(state, action) {
    //         state.unshift({
    //             _id: (new Date()).getTime(),
    //             content: action.payload.content,
    //             ...currentUser,
    //
    //         })
    //     },
    //     deleteTuit(state, action) {
    //         const index = action.payload
    //         state.splice(index, 1)
    //         },
    //
    //     toggleTuitLike(state, action) {
    //         const tuit = state.find((tuit) =>
    //             tuit._id === action.payload._id)
    //         console.log(tuit._id)
    //         tuit.liked = !tuit.liked // Toggle Unliked // Liked (Bool)
    //         tuit.likes = Number(tuit.likes);
    //         if (isNaN(tuit.likes)){
    //             tuit.likes = 0;
    //         }
    //         if (tuit.liked) { // Iterate if tuit.liked is now true; decrement if false
    //             tuit.likes += 1;
    //         } else {
    //             tuit.likes -= 1;
    //         }
    //         if (tuit.likes < 0) {
    //             tuit.likes = "";
    //         }
    //     }
    //     }
});

//export const {createTuit, deleteTuit, toggleTuitLike} = tuitSlice.actions;
export default tuitSlice.reducer;