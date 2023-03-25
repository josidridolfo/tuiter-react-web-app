import React from 'react';

const TopicItem = ({
                        topic = {
                                "subject": "Space",
                                "userName" : "SpaceX",
                                "time" : "2h",
                                "title" : "Tesla Cybertruck auto-crashes on Mars, runs over NASA's rover Curiosity. Musk blames NASA.",
                                "image" : "",
                                "tweets" : "245"
                        }
                      }
) => {
    return(
           <div class="list-group-item container-fluid">
                <div class="row">
                    <div class="col-9 text-container">
                        <div class="text-secondary">
                            <span class="text-secondary">{topic.subject}</span>
                        </div>
                        <div>
                            <span class="fw-bold text-main pe-1">{topic.userName}</span>
                            <span class="text-secondary">{topic.time}</span>
                        </div>
                        <div class="text-main fw-bold">{topic.title}</div>
                        <div class="text-muted">{topic.tweets} Tuits</div>
                    </div>
                    <div class="col-3">
                        <img src={`${topic.image}`} class="img-fluid pt-2"/>
                    </div>
                </div>
            </div>
    );
}
export default TopicItem;