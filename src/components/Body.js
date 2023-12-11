import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="header">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
