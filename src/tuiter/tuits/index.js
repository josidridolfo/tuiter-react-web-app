import React from "react";
import TuitsComponent from "./TuitItem.js";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitsArray = useSelector((state) => state.tuit);
    return (
        <TuitsComponent/>
    );
};
export default TuitList;