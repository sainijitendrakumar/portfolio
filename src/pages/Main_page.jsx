import React from "react";
import { Outlet } from "react-router-dom";
import Side_bar from "../components/Side_bar";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

function Main_page() {
  const isBarOpen = useSelector((store) => store.sidebar.isBarOpen);

  return (
    <div>
      <Navbar />
      <Side_bar />
      <div className={`w-full lg:w-5/6 float-end pt-12 lg:px-2 lg:pt-16`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main_page;
