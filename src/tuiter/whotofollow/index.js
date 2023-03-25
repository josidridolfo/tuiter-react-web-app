import React from 'react';
import WhoToFollowItem from "./WhoToFollowItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
                {
                    whoArray.map(who =>
                        <WhoToFollowItem
                            key={who._id}
                            who={who}/>
                    )
                }
            </ul>
        );
    };
export default WhoToFollowList;