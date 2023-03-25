import React from "react";
import TuitItem from "./TuitItem.js";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitsArray = useSelector((state) => state.tuit);
    return (
        <div className="list-group">
            {tuitsArray.map(tuit =>
                <TuitItem
                    key={tuit._id} tuit={tuit}/> )
            }
        </div>
    );
};
export default TuitList;