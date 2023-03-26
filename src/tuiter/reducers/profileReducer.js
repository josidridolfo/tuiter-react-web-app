import {createSlice, current} from "@reduxjs/toolkit";
import profileArray from "../data/profile.json";


const profileSlice = createSlice({
    name: "profile",
    initialState: profileArray,
    reducers: {
        editProfile(state, action) {
            state[0] = {...state[0],
                                ...action.payload};
        }
    }
}
);

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;