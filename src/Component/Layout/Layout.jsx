import React from "react";
import Router from "../../Routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import Topnav from "../Topnav/Topnav";
import "./latout.css"
const Layout = () => {
  return (
    <>
    <div className="container">

      <div className="Layout">
        <Sidebar />
        <div className="main__layout">
          <Topnav />
          <div className="content">
            <Router />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Layout;
