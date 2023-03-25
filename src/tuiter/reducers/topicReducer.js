import {createSlice} from "@reduxjs/toolkit";
import topicArray from "../data/topics.json";

const topicSlice = createSlice({
    name: "topic",
    initialState: topicArray
});

export default topicSlice.reducer;