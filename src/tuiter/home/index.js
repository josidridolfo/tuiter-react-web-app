import React from "react";
import NavigationSidebar from "../navsidebar/index.js";
import Post from "../postitems/index.js";
import PostSummary from "../postsummary/index.js";


const HomeComponent = () => {
    return(
   <>
   <div className="row">
       <div className="col-11 position-relative">
           <input placeholder="Search Tuiter" className="form-control rounded-pill ps-5"/>
           <i className="bi bi-search position-absolute wd-nudge-up"/>
       </div>
       <div className="col-1">
           <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-2 position-relative"/>
       </div>
   </div>
        <Post/>
   </>
    );
};

export default HomeComponent;