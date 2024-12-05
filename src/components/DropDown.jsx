import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import List from "./List";

function DropDown() {
  const [show, setShow] = useState(false);
  const handleChange = (prev) => {
    setShow(!prev);
  };

  return (
    <div className="z-30">
      <button className="" onClick={() => handleChange(show)}>
        {show ? (
          <div className="bg-slate-300 rounded flex justify-center text-xl me-3 p-2">
            <i className="fa-solid fa-xmark"></i>
          </div>
        ) : (
          <div className="bg-slate-300 rounded flex justify-center text-lg me-3 p-2">
            {" "}
            <i className="fa-solid fa-bars "></i>
          </div>
        )}
      </button>
      <ul
        className={` font-semibold flex-col ${
          show ? "flex" : "hidden"
        } absolute bg-slate-200 mt-2 left-0 px-4 rounded`}
      >
        <NavLink to={"/"}>
          <List>💫 Introduction </List>
        </NavLink>
        <NavLink to={"/projects_preview"}>
          <List>💫 Projects Preview </List>
        </NavLink>
        <NavLink to={"/react_projects"}>
          <List>💫 React Projects </List>
        </NavLink>
        <NavLink to={"/javascript_projects"}>
          <List>💫 Javascript Projects </List>
        </NavLink>
        <NavLink to={"/bootstrap_projects"}>
          <List>💫 Bootstrap Projects </List>
        </NavLink>
        <NavLink to={"/mega_projects"}>
          <List>💫 Mega Projects </List>
        </NavLink>
        {/* <NavLink to={"/fullstack_projects"}>
            <List>💫 FullStack Projects </List>
          </NavLink> */}
        <NavLink to={"/figma_design"}>
          <List>💫 figma </List>
        </NavLink>
        <NavLink
          to={"/components"}
          className={({ isActive }) =>
            isActive ? "bg-slate-50 text-red-700" : ""
          }
        >
          <List>💫 Components</List>
        </NavLink>
        <NavLink
          to={"/forms"}
          className={({ isActive }) =>
            isActive ? "bg-slate-50 text-red-700" : ""
          }
        >
          <List>💫 Forms</List>
        </NavLink>
      </ul>
    </div>
  );
}

export default DropDown;
