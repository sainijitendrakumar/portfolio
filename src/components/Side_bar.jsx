import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Store/sidebarSlice";
import { NavLink } from "react-router-dom";
import List from "./List";

function Side_bar() {
  const isBarOpen = useSelector((store) => store.sidebar.isBarOpen);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={` hidden z-10 rounded-sm lg:w-[15%]  bg-slate-200  lg:fixed lg:block pt-[68px] `}
      >
        <ul className={`flex font-semibold flex-col`}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "bg-slate-50 text-red-700" : ""
            }
          >
            <List>💫 Introduction </List>
          </NavLink>
          <NavLink
            to={"/projects_preview"}
            className={({ isActive }) =>
              isActive ? "bg-slate-50 text-red-700" : ""
            }
          >
            <List>💫 Projects Preview </List>
          </NavLink>
           <NavLink
            to={"/figma_design"}
            className={({ isActive }) =>
              isActive ? "bg-slate-50 text-red-700" : ""
            }
          >
            <List>💫 figma </List>
          </NavLink>
          <NavLink
            to={"/react_projects"}
            className={({ isActive }) =>
              isActive ? "bg-slate-50 text-red-700" : ""
            }
          >
            <List>💫 React Projects </List>
          </NavLink>
          <NavLink
            to={"/javascript_projects"}
            className={({ isActive }) =>
              isActive ? "bg-slate-50 text-red-700" : ""
            }
          >
            <List>💫 Javascript Projects </List>
          </NavLink>
          <NavLink
            to={"/bootstrap_projects"}
            className={({ isActive }) =>
              isActive ? "bg-slate-50 text-red-700" : ""
            }
          >
            <List>💫 Bootstrap Projects </List>
          </NavLink>
          <NavLink
            to={"/mega_projects"}
            className={({ isActive }) =>
              isActive ? "bg-slate-50 text-red-700" : ""
            }
          >
            <List>💫 Mega Projects </List>
          </NavLink>
          {/* <NavLink to={"/fullstack_projects"} className={({ isActive }) =>
              isActive ? "bg-slate-50 text-red-700" : ""
            }>
            <List>💫 FullStack Projects </List>
          </NavLink> */}
         
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
    </>
  );
}

export default Side_bar;
