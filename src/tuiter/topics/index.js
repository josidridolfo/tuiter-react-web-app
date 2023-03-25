import React from "react";
import TopicItem from "./TopicItem";
import {useSelector} from "react-redux";


const TopicSummaryList = () => {
    const topicArray = useSelector(state => state.topic)
    return (
        <ul className="list-group">
            {
                topicArray.map(topic =>
                <TopicItem
                    key={topic._id}
                    topic={topic}
                    />
                )
            }
        </ul>
    );
};

export default TopicSummaryList;