import {createSlice} from "@reduxjs/toolkit";
import navArray from "../data/navs.json";

const navSlice = createSlice({
    name: "nav",
    initialState: navArray
});

export default navSlice.reducer;