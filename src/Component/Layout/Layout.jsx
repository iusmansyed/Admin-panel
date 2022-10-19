import React from "react";
import Router from "../../Routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import Topnav from "../Topnav/Topnav";
import "./latout.css"
const Layout = () => {
  return (
    <>
    <div className="container">

     
          <div className="content">
            <Router />
          </div>
        
    </div>
    </>
  );
};
export default Layout;
