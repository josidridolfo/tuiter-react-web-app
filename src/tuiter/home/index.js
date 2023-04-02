import React from "react";
import TuitList from "../tuits";
import WhatsHappening from "./whatsHappening";


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
       <WhatsHappening/>
       <TuitList/>
   </>
    );
};

export default HomeComponent;