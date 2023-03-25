import {createSlice, current} from "@reduxjs/toolkit";
import tuitArray from "../data/tuits.json";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "shares": 0,
    "likes": 0,
};



const tuitSlice = createSlice({
    name: "tuit",
    initialState: tuitArray,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...currentUser,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
           const index = this.state.findIndex(tuit =>
               tuit._id === action.payload);
           console.log('Deleting tuit:', action.payload, 'at index: ', index);
           state.splice(index, 1);
            },
        }
});

export const {createTuit, deleteTuit} = tuitSlice.actions;
export default tuitSlice.reducer;