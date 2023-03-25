import Nav from "../nav";
import NavigationSidebar from "./navsidebar";
import WhoToFollowList from "./whotofollow";
import ExploreComponent from "./explore";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import Topics from "./topics/";
import whoReducer from "./reducers/whoReducer.js";
import tuitReducer from "./reducers/tuitReducer.js";
import topicReducer from "./reducers/topicReducer.js";
import navReducer from "./reducers/navReducer.js";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
const store = configureStore(
    {reducer:
        {
        nav: navReducer,
        who: whoReducer,
        tuit: tuitReducer,
        topic: topicReducer}
});

function Tuiter() {
    return (
        <Provider store={store}>
            <div>
            <Nav/>
                <div className="row mt-2">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                        <NavigationSidebar active="explore"/>
                    </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position":"relative"}}>
                    <Routes>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <Routes>
                        <Route path="home" element={<Topics/>}/>
                        <Route path="explore" element={<WhoToFollowList/>}/>
                    </Routes>
                </div>
                </div>
        </div>
        </Provider>
    );
}
export default Tuiter