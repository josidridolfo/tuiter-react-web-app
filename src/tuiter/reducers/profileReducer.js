import {createSlice, current} from "@reduxjs/toolkit";
import profileArray from "../data/profile.json";


const profileSlice = createSlice({
    name: "profile",
    initialState: profileArray,
    reducers: {
        editProfile(state, action) {
            console.log(action.payload)
            state.profile = [{...state.profile[0],
                                ...action.payload}];
            console.log("LINE 13")
            console.log(state.profile[0])
        }
    }
}
);

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;